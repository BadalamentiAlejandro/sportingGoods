
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
        const productoEncontrado = carrito.map((e) => {
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
    verCarrito();
};

// //Función para restar y eliminar productos del carrito.
// function funcinoRestar(id) {
//     //Buscamos que el producto exista.
//     const productoExiste = carrito.some((e) => parseFloat(e.id) === id);

//     if (productoExiste) {
//         //Aquí buscamos el producto en el carrito.
//         const productoEncontrado = carrito.find((e) => parseFloat(e.id) === id)

//         //Si la cantidad es mayor a 1 entonces resta la cantidad del producto en uno. De lo contrario se remite a la funcionEliminar.
//         if (productoEncontrado.cantidad > 1) {
//             productoEncontrado.cantidad--
//             localStorage.setItem("carrito", JSON.stringify(carrito));
//             swal({
//                 title: "Producto eliminado correctamente!",
//                 icon: "success",
//             })
//         } else {
//             funcionEliminar(id);
//         }
//     }
//     verCarrito();

// }

// //Función por la cual renderizo el carrito en el modal que se despliega con el widget de carrito.
// function verCarrito() {
//     if (carrito.length === 0) {
//         modalBody.innerHTML = `
//         <h5>Tu carrito está vacío</h5>
//         `
//     } else {
//         modalBody.innerHTML = "";
//         carrito.forEach(e => {
//             const { id, imagen, nombre, precio, cantidad } = e;

//             modalBody.innerHTML += `
//             <div class="contenedorModal"> 
//                 <div>
//                     <img class="imgCarrito" src="${imagen}">
//                 </div>

//                 <div>
//                     <p>Nombre: ${nombre}</p>
//                     <p>Precio: $${precio}</p>
//                     <p>Cantidad: ${cantidad}</p>

//                     <button class="botonEliminar" onclick="funcinoRestar(${id})">-</button>
//                     <button class="botonEliminar" onclick="funcionEliminar(${id})">Eliminar Producto</button>
//                     <button class="botonEliminar" onclick="funcionAgregar(${id})">+</button>
//                 </div>
//             </div>
//             `
//         })
//     }
//     //Metodo reduce para poder dar con la suma total de todos los productos.
//     precioTotal.textContent = "Precio toal: " + carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0).toFixed(2);
// };

// //Función por la cual podemos eliminar productos del carrito.
// function funcionEliminar(id) {
//     carrito = carrito.filter(prod => parseFloat(prod.id) !== id);
//     swal({
//         title: "Producto eliminado correctamente!",
//         icon: "success",
//     })
//     localStorage.clear();
//     localStorage.setItem("carrito", JSON.stringify(carrito));
//     verCarrito();
// };

// //Función que utilizamos para vaciar el carrito de forma completa.
// function vaciarCarrito() {
//     carrito = [];
//     localStorage.clear();
//     verCarrito();
// };

// verCarrito();
productos();