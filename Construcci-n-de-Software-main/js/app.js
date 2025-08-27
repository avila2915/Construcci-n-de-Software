document.addEventListener("DOMContentLoaded", () => {
  // Login de usuario (sin validación)
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("loginEmail") || document.getElementById("email");
  const passwordInput = document.getElementById("loginPassword") || document.getElementById("password");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Aquí omites validación y asumes login correcto
      alert("Sesión iniciada");
      window.location.href = "../index.html"; // Cambia la ruta si es necesario
    });
  }

  // Manejar botones sociales
  const socialButtons = document.querySelectorAll(".btn-social");
  socialButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Rellenar datos ficticios
      if(emailInput) emailInput.value = "usuario@ejemplo.com";
      if(passwordInput) passwordInput.value = "contraseña123";

      alert("Sesión iniciada");
      window.location.href = "../index.html"; // Cambia la ruta si es necesario
    });
  });

  // Código original de registro (sin cambios)
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
});

  

