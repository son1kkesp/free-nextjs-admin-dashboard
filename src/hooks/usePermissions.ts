"use client";

import { useAuth } from "./useAuth";
import { UserRole } from "@prisma/client";
import { useMemo } from "react";

export interface UserPermissions {
  role: UserRole;
  globalPermissions: string[];
  serverPermissions: { [serverId: string]: string[] };
}

export function usePermissions() {
  const { session, loading } = useAuth();

  const userPermissions = useMemo(() => {
    if (!session?.user) {
      return null;
    }

    const user = session.user;

    const permissions: UserPermissions = {
      role: user.role as UserRole,
      globalPermissions: [],
      serverPermissions: {}
    };

    // Definir permisos globales basados en el rol
    switch (user.role) {
      case "SUPER_ADMIN":
        permissions.globalPermissions = [
          "users:read", "users:write", "users:delete",
          "servers:read", "servers:write", "servers:delete",
          "demos:read", "demos:write", "demos:delete",
          "settings:read", "settings:write",
          "analytics:read",
          "logs:read"
        ];
        break;
      case "TECH_ADMIN":
        permissions.globalPermissions = [
          "users:read", "users:write",
          "servers:read", "servers:write",
          "demos:read", "demos:write", "demos:delete",
          "settings:read",
          "analytics:read",
          "logs:read"
        ];
        break;
      case "PREMIUM_RESELLER":
        permissions.globalPermissions = [
          "users:read", "users:write",
          "servers:read", "servers:write",
          "demos:read", "demos:write", "demos:delete",
          "analytics:read"
        ];
        break;
      case "ADVANCED_RESELLER":
        permissions.globalPermissions = [
          "users:read", "users:write",
          "servers:read", "servers:write",
          "demos:read", "demos:write", "demos:delete"
        ];
        break;
      case "BASIC_RESELLER":
        permissions.globalPermissions = [
          "users:read",
          "servers:read",
          "demos:read", "demos:write", "demos:delete"
        ];
        break;
    }

    return permissions;
  }, [session]);

  const hasPermission = (permission: string, serverId?: string) => {
    if (!userPermissions) return false;
    
    if (serverId && userPermissions.serverPermissions[serverId]) {
      return userPermissions.serverPermissions[serverId].includes(permission);
    }
    
    return userPermissions.globalPermissions.includes(permission);
  };

  const isSuperAdmin = () => {
    return userPermissions?.role === "SUPER_ADMIN";
  };

  const isTechAdmin = () => {
    return userPermissions?.role === "TECH_ADMIN";
  };

  const isReseller = () => {
    return userPermissions?.role && ["PREMIUM_RESELLER", "ADVANCED_RESELLER", "BASIC_RESELLER"].includes(userPermissions.role);
  };

  return {
    userPermissions,
    hasPermission,
    isSuperAdmin,
    isTechAdmin,
    isReseller,
    loading,
    authenticated: !!session
  };
}