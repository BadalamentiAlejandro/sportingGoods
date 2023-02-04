
const listaDeProductos = [];


class productos {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        listaDeProductos.push(this);
    }
    
}


const remera = new productos('remera', 5.53);
const sweater = new productos('sweater', 12.28);
const shorts = new productos('shorts', 8.42);
const zapatillas = new productos('zapatillas', 40.17);
const pantalones = new productos('pantalones', 15.00);
const leggings = new productos('leggings', 12.98);
const botines = new productos('botines', 50.00);


const listaDeCupones = ['10', '25', '30', '50']


let cesta = 0;
let precioTotal = 0;

const agregarAlCarro = () => {
    alert('Bienvenido a tu tienda de ropa deportiva favorita. Nuestros productos especiales de hoy son: Remera, Sweater, Shorts, Zapatillas, Pantalones, Leggings y Botines');

    let productoElegido = prompt('Deseas agregar un producto a tu carrito de compras? Escribe alguna de las opciones: Remera, Sweater, Shorts, Zapatillas, Pantalones, Leggings, Botines o escribe "no" para salir').toLowerCase();

    while (productoElegido != 'no') {
        switch (productoElegido) {
            case listaDeProductos[0].nombre:
                cesta = listaDeProductos[0].precio;
                alert('Haz elegido ' + listaDeProductos[0].nombre + ' y su precio es de ' + (listaDeProductos[0].precio).toFixed(2) + ' Dolares');
                break;
            case listaDeProductos[1].nombre:
                cesta = listaDeProductos[1].precio;
                alert('Haz elegido ' + listaDeProductos[1].nombre + ' y su precio es de ' + (listaDeProductos[1].precio).toFixed(2) + ' Dolares');
                break;
            case listaDeProductos[2].nombre:
                cesta = listaDeProductos[2].precio;
                alert('Haz elegido ' + listaDeProductos[2].nombre + ' y su precio es de ' + (listaDeProductos[2].precio).toFixed(2) + ' Dolares');
                break;
            case listaDeProductos[3].nombre:
                cesta = listaDeProductos[3].precio;
                alert('Haz elegido ' + listaDeProductos[3].nombre + ' y su precio es de ' + (listaDeProductos[3].precio).toFixed(2) + ' Dolares');
                break;
            case listaDeProductos[4].nombre:
                cesta = listaDeProductos[4].precio;
                alert('Haz elegido ' + listaDeProductos[4].nombre + ' y su precio es de ' + (listaDeProductos[4].precio).toFixed(2) + ' Dolares');
                break;
            case listaDeProductos[5].nombre:
                cesta = listaDeProductos[5].precio;
                alert('Haz elegido ' + listaDeProductos[5].nombre + ' y su precio es de ' + (listaDeProductos[5].precio).toFixed(2) + ' Dolares');
                break;
            case listaDeProductos[6].nombre:
                cesta = listaDeProductos[6].precio;
                alert('Haz elegido ' + listaDeProductos[6].nombre + ' y su precio es de ' + (listaDeProductos[6].precio).toFixed(2) + ' Dolares');
                break;
            default: cesta
                cesta = 0;
                alert('Introduce un producto correcto');
        }
        precioTotal = precioTotal + cesta;
        productoElegido = prompt('Escribe otro producto, por favor! Remera, Sweater, Shorts, Zapatillas, Pantalones, Leggings, Botines o escribe "no" para salir').toLowerCase();
    }
}

agregarAlCarro();

console.log(precioTotal.toFixed(2));
alert('Su carro tiene productos por un total de ' + precioTotal.toFixed(2) + ' dolares');

const activarCuponDeDescuento = () => {
    console.log('Los números de cupon son 10, 25, 30 o 50');
    let numeroDeCupon = prompt('Escribe el número de cupon de descuento si posees uno, sino escribe "no" (Los números de cupon son 10, 25, 30 o 50)').toLowerCase();

    while (numeroDeCupon != 'no') {
        switch (numeroDeCupon) {
            case listaDeCupones[0]:
                precioTotal = (precioTotal - (precioTotal * 0.10)).toFixed(2);
                break;
            case listaDeCupones[1]:
                precioTotal = (precioTotal - (precioTotal * 0.25)).toFixed(2);
                break;
            case listaDeCupones[2]:
                precioTotal = (precioTotal - (precioTotal * 0.30)).toFixed(2);
                break;
            case listaDeCupones[3]:
                precioTotal = (precioTotal - (precioTotal * 0.50)).toFixed(2);
                break;
            default:
                alert('El número introducido es incorrecto, vuelve a intentar');
        }
        numeroDeCupon = prompt('Escribe un número de cupon correcto de descuento si posees uno, sino escribe "no"');
    }
    console.log(precioTotal);
    alert('El total de tu compra tiene un precio de ' + precioTotal + ' dolares');
}

activarCuponDeDescuento();

