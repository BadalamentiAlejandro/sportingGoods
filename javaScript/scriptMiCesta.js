
//Array para la cesta
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const containerProducto = document.getElementById("containerProducto");
const containerTotal = document.getElementById("containerTotal");

//Función por la cual renderizo el carrito en el modal que se despliega con el widget de carrito.
function verCarrito() {
    if (carrito.length === 0) {
        containerProducto.innerHTML = `
        <h5>Tu carrito está vacío</h5>
        `
    } else {
        containerProducto.innerHTML = "";
        carrito.forEach(e => {
            const { id, imagen, nombre, precio, cantidad } = e;

            containerProducto.innerHTML += `
            <div class="contenedorModal"> 
                <div>
                    <img class="imagen" src="${imagen}">
                </div>

                <div>
                    <p class="nombre">Nombre: ${nombre}</p>
                    <p class="precio">Precio: $${precio}</p>
                    <p class="cantidad">Cantidad: ${cantidad}</p>

                    <button class="botonAgregar" onclick="funcinoRestar(${id})">-</button>
                    <button class="botonAgregar" onclick="funcionEliminar(${id})">Eliminar Producto</button>
                    <button class="botonAgregar" onclick="funcionAgregar(${id})">+</button>
                </div>
            </div>
            `
        })
    }
    //Metodo reduce para poder dar con la suma total de todos los productos.
    containerTotal.textContent = "Precio toal: " + carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0).toFixed(2);
};

//Función por la cual se puede agregar un producto al carrito.
function funcionAgregar(id) {
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
    }
    verCarrito();
};

//Función para restar y eliminar productos del carrito.
function funcinoRestar(id) {
    //Buscamos que el producto exista.
    const productoExiste = carrito.some((e) => parseFloat(e.id) === id);

    if (productoExiste) {
        //Aquí buscamos el producto en el carrito.
        const productoEncontrado = carrito.find((e) => parseFloat(e.id) === id)

        //Si la cantidad es mayor a 1 entonces resta la cantidad del producto en uno. De lo contrario se remite a la funcionEliminar.
        if (productoEncontrado.cantidad > 1) {
            productoEncontrado.cantidad--
            localStorage.setItem("carrito", JSON.stringify(carrito));
            swal({
                title: "Producto eliminado correctamente!",
                icon: "success",
            })
        } else {
            funcionEliminar(id);
        }
    }
    verCarrito();

}

//Función por la cual podemos eliminar productos del carrito.
function funcionEliminar(id) {
    carrito = carrito.filter(prod => parseFloat(prod.id) !== id);
    swal({
        title: "Producto eliminado correctamente!",
        icon: "success",
    })
    localStorage.clear();
    localStorage.setItem("carrito", JSON.stringify(carrito));
    verCarrito();
};

//Función que utilizamos para vaciar el carrito de forma completa.
function vaciarCarrito() {
    carrito = [];
    localStorage.clear();
    verCarrito();
};

function realizarCompra() {
    if (carrito.length === 0) {
        swal({
            title: "Dirígete a la seccion ROPA para seleccionar un producto!",
            icon: "info",
        })
    } else {
        swal({
            title: "Compra realizada con exito!",
            icon: "success",
        })
    }
};

verCarrito();