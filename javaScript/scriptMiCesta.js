
//Array para la cesta
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];


//Manipulamos el DOM de miCesta.
const containerProducto = document.getElementById("containerProducto");


//Este loop imprime los productos y los precios de la cesta.
function imprimirContainer() {
    for (const producto of carrito) {
        containerProducto.innerHTML += `
                        <li class="lista">
                            <img class="imagen" src= "${producto.imagen}">
                            <p class="nombre">${producto.nombre}</p>
                            <p class="precio">$${producto.precio}</p>
                            <div class="containerContador">
                                <button class="botonEliminar"> Quitar </button>
                                <p class="textoContador" id="textoContador"> 1 </p>
                                <button class="botonSumar"> Sumar </button>
                            </div>
                        </li>    
                            `;
    }
};
imprimirContainer()


const textoContador = document.getElementsByClassName("textoContador");
const botonSumar = document.getElementsByClassName("botonSumar");
//Función para sumar productos.
function sumarElemento(botonSumar) {
    let count = 1
    for (let i = 0; i < botonSumar.length; i++) {
        botonSumar[i].addEventListener("click", () => {
            count++;
            textoContador[i].innerHTML = count;
        })
    
    }
}
sumarElemento(botonSumar);


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



let containerTotal = document.getElementById("containerTotal");
//Este elemento imprime el precio total de la compra.
containerTotal.innerHTML = `
                            <h2>Precio Total: $${total.toFixed(2)} </h2>
                            <button id="botonComprar" class="botonAgregar">Comprar</button>
                            `;
const botonComprar = document.getElementById("botonComprar");
function comprar() {
    botonComprar.addEventListener("click", () => {
        if (!carrito.length) {
            swal({
                title: "Lo sentimos, no tienes ningun producto en la cesta. Agrega un producto en la sección Ropa para poder realizar la compra",
                icon: "error",
            });
        } else {
            swal({
                title: "Haz realizado la compra correctamente por un total de",
                text: `$${total.toFixed(2)}`,
                icon: "success",
            });
        };

    });
}
comprar();






console.log(carrito);
