// Obtener referencia al formulario
const form = document.querySelector('form');

// Agregar evento de envío del formulario
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evitar el envío del formulario

  // Obtener valores de los campos
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  // Aquí puedes realizar acciones adicionales, como enviar los datos a través de AJAX o realizar validaciones

  // Limpiar campos del formulario
  form.reset();
});
