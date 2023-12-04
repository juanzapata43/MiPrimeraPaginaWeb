document.addEventListener("DOMContentLoaded", function() {

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
  var campos = document.querySelectorAll('#nombreProducto, #precioProducto, #cantidadProducto, #categoriaProducto');
  campos.forEach(function(campo) {
   
    toggleCampoRequerido(campo);
    campo.addEventListener('input', function() {
      toggleCampoRequerido(campo);
    });
  });

  document.querySelector('form').addEventListener('submit', function(event) {
    var formValido = true;

    campos.forEach(function(campo) {
      if (campo.value.trim() === '') {
        toggleCampoRequerido(campo);
        formValido = false;
      }
    });

    if (!formValido) {
      event.preventDefault();
    } else {
      
      alert('Producto creado');
      location.reload(); 
    }
  });
});
