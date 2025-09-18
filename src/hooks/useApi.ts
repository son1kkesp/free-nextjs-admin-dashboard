import { useState, useCallback } from 'react';
import { useToast } from './useToast';

interface UseApiOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
  showToast?: boolean;
}

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T = any>(options: UseApiOptions = {}) {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null
  });
  
  const { showToast } = useToast();
  const { onSuccess, onError, showToast: showToastOption = true } = options;

  const execute = useCallback(async (
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    body?: any
  ) => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const config: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (body && (method === 'POST' || method === 'PUT')) {
        config.body = JSON.stringify(body);
      }

      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || errorData.error || 'Error en la solicitud');
      }

      const data = await response.json();
      
      setState(prev => ({ ...prev, data: data.data || data, loading: false }));
      
      if (onSuccess) {
        onSuccess(data.data || data);
      }
      
      if (showToastOption && data.message) {
        showToast('success', data.message);
      }
      
      return data.data || data;
    } catch (error: any) {
      const errorMessage = error.message || 'Error desconocido';
      
      setState(prev => ({ ...prev, error: errorMessage, loading: false }));
      
      if (onError) {
        onError(errorMessage);
      }
      
      if (showToastOption) {
        showToast('error', errorMessage);
      }
      
      throw error;
    }
  }, [onSuccess, onError, showToast, showToastOption]);

  const get = useCallback((url: string) => execute(url, 'GET'), [execute]);
  const post = useCallback((url: string, body?: any) => execute(url, 'POST', body), [execute]);
  const put = useCallback((url: string, body?: any) => execute(url, 'PUT', body), [execute]);
  const del = useCallback((url: string) => execute(url, 'DELETE'), [execute]);

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return {
    ...state,
    execute,
    get,
    post,
    put,
    delete: del,
    reset
  };
}

// Hook específico para listados con paginación
export function useApiList<T = any>(endpoint: string, options: UseApiOptions = {}) {
  const [items, setItems] = useState<T[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 50,
    total: 0,
    totalPages: 0
  });
  
  const api = useApi<T[]>({
    ...options,
    onSuccess: (data) => {
      if (Array.isArray(data)) {
        setItems(data);
      } else if (data?.items) {
        setItems(data.items);
        setPagination(prev => ({
          ...prev,
          ...data.pagination
        }));
      }
    }
  });

  const fetchItems = useCallback(async (params: Record<string, any> = {}) => {
    const searchParams = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        searchParams.append(key, value.toString());
      }
    });
    
    const url = searchParams.toString() 
      ? `${endpoint}?${searchParams.toString()}`
      : endpoint;
    
    return api.get(url);
  }, [api, endpoint]);

  const refresh = useCallback(() => {
    return fetchItems();
  }, [fetchItems]);

  const addItem = useCallback((item: T) => {
    setItems(prev => [item, ...prev]);
  }, []);

  const updateItem = useCallback((id: string, updates: Partial<T>) => {
    setItems(prev => prev.map(item => 
      (item as any).id === id ? { ...item, ...updates } : item
    ));
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(item => (item as any).id !== id));
  }, []);

  return {
    ...api,
    items,
    pagination,
    fetchItems,
    refresh,
    addItem,
    updateItem,
    removeItem
  };
}

// Hook para operaciones CRUD específicas
export function useCrud<T = any>(endpoint: string, options: UseApiOptions = {}) {
  const list = useApiList<T>(endpoint, options);
  
  const create = useCallback(async (data: Partial<T>) => {
    const result = await list.post(endpoint, data);
    list.addItem(result);
    return result;
  }, [list, endpoint]);
  
  const update = useCallback(async (id: string, data: Partial<T>) => {
    const result = await list.put(`${endpoint}/${id}`, data);
    list.updateItem(id, result);
    return result;
  }, [list, endpoint]);
  
  const remove = useCallback(async (id: string) => {
    await list.delete(`${endpoint}/${id}`);
    list.removeItem(id);
  }, [list, endpoint]);
  
  const getById = useCallback(async (id: string) => {
    return list.get(`${endpoint}/${id}`);
  }, [list, endpoint]);

  return {
    ...list,
    create,
    update,
    remove,
    getById
  };
}
