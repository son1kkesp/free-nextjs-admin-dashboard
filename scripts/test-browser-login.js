// Script para probar login en el navegador
// Ejecutar en la consola del navegador

console.log('🚀 Iniciando prueba de login...');

// Función para probar login
async function testLogin(email, password) {
  try {
    console.log(`🔍 Probando login con ${email}...`);
    
    const response = await fetch('/api/auth/signin/credentials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        email: email,
        password: password,
        callbackUrl: '/',
        json: 'true'
      })
    });

    const result = await response.json();
    console.log('📊 Resultado del login:', result);
    
    if (result.error) {
      console.log('❌ Error en login:', result.error);
    } else {
      console.log('✅ Login exitoso');
      // Recargar la página para ver la sesión
      window.location.reload();
    }
    
    return result;
  } catch (error) {
    console.error('❌ Error en la prueba:', error);
    return null;
  }
}

// Función para verificar sesión actual
async function checkCurrentSession() {
  try {
    const response = await fetch('/api/auth/session');
    const session = await response.json();
    console.log('🔍 Sesión actual:', session);
    return session;
  } catch (error) {
    console.error('❌ Error al verificar sesión:', error);
    return null;
  }
}

// Función para cerrar sesión
async function logout() {
  try {
    const response = await fetch('/api/auth/signout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        callbackUrl: '/auth/signin'
      })
    });
    
    console.log('🚪 Sesión cerrada');
    window.location.reload();
  } catch (error) {
    console.error('❌ Error al cerrar sesión:', error);
  }
}

// Exportar funciones para uso en consola
window.testLogin = testLogin;
window.checkCurrentSession = checkCurrentSession;
window.logout = logout;

console.log('✅ Funciones disponibles:');
console.log('   testLogin(email, password) - Probar login');
console.log('   checkCurrentSession() - Verificar sesión actual');
console.log('   logout() - Cerrar sesión');
console.log('');
console.log('Ejemplos:');
console.log('   testLogin("admin@emby.com", "admin123")');
console.log('   testLogin("tech@emby.com", "tech123")');
console.log('   checkCurrentSession()');
console.log('   logout()');
