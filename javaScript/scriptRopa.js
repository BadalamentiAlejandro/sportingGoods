
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


//Se utiliza un fetch para poder llenar la lista.
const listaDeProductos = [];

//Array para la cesta.
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Container principal donde se imprime las tarjetas de cada producto.
const container = document.getElementById("container");

//Función asincronica para traer los productos de un archivo .json
async function productos() {
    const data = await fetch ("../index.json");
    const prods = await data.json();

    //Aqui se deconstruye el array para poder agregar de a uno los productos de forma separada.
    listaDeProductos.push(...prods.store);

    //Loop para poder imprimir en pantalla los productos.
    prods.store.forEach(element => {
        container.innerHTML += `
        <li class="lista">
            <img class="imagen" src= "${element.imagen}">
            <p class="nombre">${element.nombre}</p>
            <p class="precio">$${element.precio}</p>
            <button class="botonAgregar">AGREGAR AL CARRO</button>
        </li>
        `
    });

    const botonAgregar = document.getElementsByClassName("botonAgregar");

    //Función gracias a la cual agregamos productos al carrito, de ahi al storage y un sweet alert para confirmar el movimiento.
    function funcionBoton(el) {
        for (let i = 0; i < el.length; i++) {
            el[i].addEventListener("click", () => {
                carrito.push(listaDeProductos[i]);
                localStorage.setItem("carrito", JSON.stringify(carrito));
                swal({
                    title: "Producto agregado correctamente!",
                    text: `${listaDeProductos[i].nombre}
                           $${listaDeProductos[i].precio}`,
                    icon: "success",
                });
            })
        }
    }
    funcionBoton(botonAgregar);

}

productos();
