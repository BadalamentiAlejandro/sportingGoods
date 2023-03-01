
//codigo de Bootstrap para los popovers.
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
});

//Array para la cesta
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];



//lista de productos pre creada con un constructor.
const listaDeProductos = [];
class productos {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        listaDeProductos.push(this);
    }

}
const remera = new productos('remera', '5.53');
const sweater = new productos('sweater', '12.28');
const shorts = new productos('shorts', '8.42');
const zapatillas = new productos('zapatillas', '40.17');
const pantalones = new productos('pantalones', '15.00');
const leggings = new productos('leggings', '12.98');
const botines = new productos('botines', '50.00');


//obtengo los productos elegidos por el usuario.
const botonAgregar = document.getElementsByClassName("botonAgregar");
//Funcion que por cada click ingresa cada item en el carrito y en el STORAGE.
function ingresarProductos(el) {
    for (let i = 0; i < el.length; i++) {
        botonAgregar[i].addEventListener("click", () => {
            let saveItem = listaDeProductos[i]
            carrito.push(saveItem);
            localStorage.setItem("carrito", JSON.stringify(carrito));
        })
    }
};


ingresarProductos(botonAgregar);



//Manipulamos el DOM de miCesta.
let containerProducto = document.getElementById("containerProducto");

let containerTotal = document.getElementById("containerTotal");

//Este loop imprime el los productos y los precios de la cesta.
function imprimirContainer() {
    for (const producto of carrito) {
        containerProducto.innerHTML += `
                            <h2>Producto: ${producto.nombre} </h2>
                            <h2>Precio: $${producto.precio} </h2>
                            <button class="botonEliminar">Eliminar producto</button>`;
    }
};
imprimirContainer()


const botonEliminar = document.getElementsByClassName("botonEliminar");
//Funcion para eliminar elemento del STORAGE.
function eliminarElemento(botonEliminar) {
    for (let i = 0; i < carrito.length; i++) {
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