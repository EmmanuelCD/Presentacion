document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contacto-form');

  form.addEventListener('submit', function(event) {
      // Evitar el envío del formulario por defecto
      event.preventDefault();
      
      // Recuperar valores de los inputs
      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const asunto = document.getElementById('asunto').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();
      
      // Inicializar una variable para errores
      let errores = [];
      
      // Validar el nombre
      if (nombre === '') {
          errores.push('El nombre es obligatorio.');
      }
      
      // Validar el correo
      if (correo === '') {
          errores.push('El correo es obligatorio.');
      } else if (!isValidEmail(correo)) {
          errores.push('El correo no es válido.');
      }
      
      // Validar el asunto
      if (asunto === '') {
          errores.push('El asunto es obligatorio.');
      }
      
      // Validar el mensaje
      if (mensaje === '') {
          errores.push('El mensaje es obligatorio.');
      }
      
      // Mostrar errores o enviar el formulario
      if (errores.length > 0) {
          alert(errores.join('\n'));
      } else {
        alert(`Gracias por contactarme ${nombre}. Te responderé a la mayor brevedad posible`)
           // Enviar el formulario si todo está bien
      }
  });

  // Función para validar correo electrónico
  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
});

