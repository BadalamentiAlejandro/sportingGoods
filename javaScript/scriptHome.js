
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
            swal({
                title: "Producto agregado correctamente!",
                text: `${listaDeProductos[i].nombre}
                       ${listaDeProductos[i].precio}`,
                icon: "success",
            });
        })
    }
};


ingresarProductos(botonAgregar);