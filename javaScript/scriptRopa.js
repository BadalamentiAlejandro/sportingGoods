
// //lista de productos pre creada con un constructor, esto no se usa mas ya que se hace fetch desde un .json.
// const listaDeProductos = [];
// class productos {
//     constructor(nombre, precio) {
//         this.nombre = nombre;
//         this.precio = parseFloat(precio);
//         listaDeProductos.push(this);
//     }

// }
// const remera = new productos('remera', '5.53');
// const sweater = new productos('sweater', '12.28');
// const shorts = new productos('shorts', '8.42');
// const zapatillas = new productos('zapatillas', '40.17');
// const pantalones = new productos('pantalones', '15.00');
// const leggings = new productos('leggings', '12.98');
// const botines = new productos('botines', '50.00');


//Array para la cesta.
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Container principal donde se imprime las tarjetas de cada producto.
const container = document.getElementById("container");

//Función asincronica para traer los productos de un archivo .json
async function productos() {
    const data = await fetch("../index.json");
    const prods = await data.json();
    
    //Loop para poder imprimir en pantalla los productos.
    prods.store.forEach(element => {
        container.innerHTML += `
        <li class="lista">
            <img class="imagen" src= "${element.imagen}">
            <p class="nombre">${element.nombre}</p>
            <p class="precio">$${element.precio}</p>
            <button class="botonAgregar">AGREGAR A MI CESTA</button>
        </li>
        `
    });

    const botonAgregar = document.getElementsByClassName("botonAgregar");
    //Función gracias a la cual agregamos productos al carrito, de ahi al storage y un sweet alert para confirmar el movimiento.
    function funcionBoton(el) {
        for (let i = 0; i < el.length; i++) {
            el[i].addEventListener("click", () => {

                if(!carrito[i]) {

                    carrito.push(prods.store[i]);
                    localStorage.setItem("carrito", JSON.stringify(carrito));                    
                    swal({
                        title: "Producto agregado correctamente!",
                        text: `${prods.store[i].nombre}
                               $${prods.store[i].precio}`,
                        icon: "success",
                    });
                } else {
                    swal({
                        title: "Ya tienes este producto en tu cesta",
                        text: "Para agregar mas o quitarlo, dirígete a la sección Mi Cesta",
                        icon: "warning",
                    });
                }

                } 
            )}
        }
        funcionBoton(botonAgregar);
    }





productos();

