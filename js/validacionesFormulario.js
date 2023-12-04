document.addEventListener("DOMContentLoaded", function() {

  // Función para mostrar u ocultar el mensaje de campo requerido
  function toggleCampoRequerido(elemento) {
    var mensajeError = elemento.nextElementSibling;
    if (mensajeError && mensajeError.classList.contains('campo-requerido')) {
      if (elemento.value.trim() === '') {
        mensajeError.style.display = 'inline'; // Mostrar el mensaje de error
      } else {
        mensajeError.style.display = 'none'; // Ocultar el mensaje de error
      }
    }
  }

  // Añadir evento input a cada campo para controlar la visualización del mensaje de error
  var campos = document.querySelectorAll('#nombreProducto, #precioProducto, #cantidadProducto, #categoriaProducto');
  campos.forEach(function(campo) {
    // Inicializar en el arranque en caso de que los campos estén pre-rellenados
    toggleCampoRequerido(campo);
    campo.addEventListener('input', function() {
      toggleCampoRequerido(campo);
    });
  });

  // Manejador del evento submit del formulario
  document.querySelector('form').addEventListener('submit', function(event) {
    var formValido = true;

    // Validaciones de cada campo excepto el campo de la imagen
    campos.forEach(function(campo) {
      if (campo.value.trim() === '') {
        toggleCampoRequerido(campo);
        formValido = false;
      }
    });

    // Si el formulario no es válido, prevenir el envío
    if (!formValido) {
      event.preventDefault();
    } else {
      // Mostrar alerta de producto creado y recargar la página
      alert('Producto creado');
      location.reload(); // Esto recargará la página después de aceptar la alerta
    }
  });
});
