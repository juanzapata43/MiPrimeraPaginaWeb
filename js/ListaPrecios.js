document.addEventListener("DOMContentLoaded", function() {
    let productos = [
        {
            nombre: 'Plátanos',
            imagen: 'file:///E:/IU%20Digital/Semestre%203/Ingenier%C3%ADa%20Web%201/MiPrimeraPaginaWeb/html/imagenes/pl%C3%A1tanos.jpg',
            precio: 2500,
            cantidad: 25
        },
        {
            nombre: 'Fríjol',
            imagen: 'file:///E:/IU%20Digital/Semestre%203/Ingenier%C3%ADa%20Web%201/MiPrimeraPaginaWeb/html/imagenes/fr%C3%ADjol.jpg',
            precio: 6500,
            cantidad: 80
        },
        {
            nombre: 'Mangos',
            imagen: 'file:///E:/IU%20Digital/Semestre%203/Ingenier%C3%ADa%20Web%201/MiPrimeraPaginaWeb/html/imagenes/mangos.jpg', 
            precio: 7500,
            cantidad: 64
        },
        {
            nombre: 'Cereal',
            imagen: 'file:///E:/IU%20Digital/Semestre%203/Ingenier%C3%ADa%20Web%201/MiPrimeraPaginaWeb/html/imagenes/cereales.jpg',
            precio: 4800,
            cantidad: 35
        },
        {
            nombre: 'Leche',
            imagen: 'file:///E:/IU%20Digital/Semestre%203/Ingenier%C3%ADa%20Web%201/MiPrimeraPaginaWeb/html/imagenes/leche.jpg',
            precio: 5600,
            cantidad: 100
        }
    ];
  
    function actualizarInventario() {
        const tbody = document.querySelector("#inventarioProductos tbody");
        tbody.innerHTML = "";

        productos.forEach(producto => {
            const total = producto.precio * producto.cantidad;
            const fila = `
                <tr>
                    <td><img src="${producto.imagen}" alt="${producto.nombre}" style="width:100px;"></td>
                    <td>${producto.nombre}</td>
                    <td>$${producto.precio.toLocaleString()}</td>
                    <td>${producto.cantidad}</td>
                    <td>$${total.toLocaleString()}</td>
                </tr>
            `;
            tbody.innerHTML += fila;
        });
    }
  
    actualizarInventario();
});
