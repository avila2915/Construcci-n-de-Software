// --- LOGIN MANUAL ---
// Registro de usuario
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
  
    if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault(); // evita que se recargue
  
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
  
        // Validación de contraseñas
        if (password !== confirmPassword) {
          alert("⚠️ Las contraseñas no coinciden.");
          return;
        }
  
        // Guardar usuario en localStorage (simulación)
        const user = { nombre, email, password };
        localStorage.setItem("user", JSON.stringify(user));
  
        alert("✅ Registro exitoso, ahora inicia sesión.");
        window.location.href = "login.html"; // Redirección al login
      });
    }
  
    // Login de usuario
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
  
        const storedUser = JSON.parse(localStorage.getItem("user"));
  
        if (storedUser && storedUser.email === email && storedUser.password === password) {
          alert(`👋 Bienvenido, ${storedUser.nombre}`);
          window.location.href = "perfil.html"; // Redirige al perfil
        } else {
          alert("❌ Credenciales incorrectas.");
        }
      });
    }
  });
  

