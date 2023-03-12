
//Array para la cesta
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


//Manipulamos el DOM de miCesta.
let containerProducto = document.getElementById("containerProducto");

let containerTotal = document.getElementById("containerTotal");

//Este loop imprime el los productos y los precios de la cesta.
function imprimirContainer() {
    for (const producto of carrito) {
        containerProducto.innerHTML += `
                        <li class="lista">
                            <img class="imagen" src= "${producto.imagen}">
                            <p class="nombre">${producto.nombre}</p>
                            <p class="precio">$${producto.precio}</p>
                            <button class="botonEliminar">Eliminar producto</button>
                        </li>    
                            `;
    }
};
imprimirContainer()


const botonEliminar = document.getElementsByClassName("botonEliminar");
//Funcion para eliminar elemento del STORAGE.
function eliminarElemento(botonEliminar) {
    for (let i = 0; i < botonEliminar.length; i++) {
        botonEliminar[i].addEventListener("click", () => {
            carrito.splice(i, 1);
            localStorage.clear();
            localStorage.setItem("carrito", JSON.stringify(carrito));
            location.reload();//Se que esto no es lo mejor, pero es lo que encontré para poder refrescar la funcion imprimirContainer.
        })
    }
};
eliminarElemento(botonEliminar);

let total = 0;
//Funcion que suma el precio total de todos los items en el carrito.
function sumarTotal() {
    for (let i = 0; i < carrito.length; i++) {

        total += carrito[i].precio;
    };
};
sumarTotal();
//Este elemento imprime el precio total de la compra.
containerTotal.innerHTML = `
                            <h2>Precio Total: $${total.toFixed(2)} </h2>`;