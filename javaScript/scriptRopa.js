
const listaProductos = [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const container = document.getElementById("container");
const precioTotal = document.getElementById("precioTotal");


//Utilizo una función asincrónica para poder hacer un fetch del documento json con los datos de los productos.
async function productos() {
    const data = await fetch("../index.json");
    const prods = await data.json();

    //Mediante una función de desestructuración paso la información fuera de la asincronía para poder utilizarla en otras funciones.
    listaProductos.push(...prods.store);

    prods.store.forEach(e => {
        //Si bien no es necesario desestructurar aquí, lo utilizo para crear un codigo mas limpio.
        const { id, imagen, nombre, precio } = e;

        container.innerHTML += `
        <li class="lista">
        <img class="imagen" src= "${imagen}">
        <p class="nombre">${nombre}</p>
        <p class="precio">Precio: $${precio}</p>
        
        <button class="botonAgregar" onclick="funcionAgregar(${id})">AGREGAR A MI CESTA</button>
        </li>
        `
    });
};

//Función por la cual se puede agregar un producto al carrito.
async function funcionAgregar(id) {
    //Primero nos fijamos si el producto existe con el método "some()" ya que nos devolvera true o false.
    const productoExiste = carrito.some((e) => parseFloat(e.id) === id);

    //Si nos devuelve true.
    if (productoExiste) {
        //Aquí mapeamos 
        const productoEncontrado = carrito.find((e) => {
            if (parseFloat(e.id) === id) {
                e.cantidad++
                localStorage.setItem("carrito", JSON.stringify(carrito));
                swal({
                    title: "Producto agregado correctamente!",
                    icon: "success",
                })
            }
        })
    } else {
        //En este caso no puedo usar el metodo "some()" porque me retorna un valor booleano y no el valor que necesito, por lo cual no imprime en pantalla. En cambio utilizando el metodo "find()", me devuelve el valor solicitado.
        const item = listaProductos.find((e) => parseFloat(e.id) === id);
        carrito.push(item);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        swal({
            title: "Producto agregado correctamente!",
            icon: "success",
        })
    }
};

productos();