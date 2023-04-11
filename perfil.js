const btnLogin = document.querySelector('#btn-login');
const btnRegister = document.querySelector('#btn-register');
const formLogin = document.querySelector('#form-login');
const formRegister = document.querySelector('#form-register');

// Mostrar el formulario de inicio de sesión y ocultar el de registro
btnLogin.addEventListener('click', () => {
  formLogin.classList.remove('hidden');
  formRegister.classList.add('hidden');
});

// Mostrar el formulario de registro y ocultar el de inicio de sesión
btnRegister.addEventListener('click', () => {
  formRegister.classList.remove('hidden');
  formLogin.classList.add('hidden');
});