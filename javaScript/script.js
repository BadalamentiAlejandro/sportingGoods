
let cesta = 0;
let precioTotal = 0;

const agregarAlCarro = () => {
    alert('Bienvenido a tu tienda de ropa deportiva favorita. Nuestros productos especiales de hoy son: Remera, Sweater, Shorts, Zapatillas, Pantalones, Leggings y Botines');

    let productoElegido = prompt('Escribe un producto, por favor! Remera, Sweater, Shorts, Zapatillas, Pantalones, Leggings, Botines o escribe Finalizar para salir').toLocaleLowerCase();

    while (productoElegido != 'finalizar') {
        switch (productoElegido) {
            case 'remera':
                cesta = 5;
                alert('Haz elegido ' + productoElegido + ' y su precio es de ' + cesta + ' Dolares');
                break;
            case 'sweater':
                cesta = 12;
                alert('Haz elegido ' + productoElegido + ' y su precio es de ' + cesta + ' Dolares');
                break;
            case 'shorts':
                cesta = 8;
                alert('Haz elegido ' + productoElegido + ' y su precio es de ' + cesta + ' Dolares');
                break;
            case 'zapatillas':
                cesta = 40;
                alert('Haz elegido ' + productoElegido + ' y su precio es de ' + cesta + ' Dolares');
                break;
            case 'pantalones':
                cesta = 15;
                alert('Haz elegido ' + productoElegido + ' y su precio es de ' + cesta + ' Dolares');
                break;
            case 'leggings':
                cesta = 12;
                alert('Haz elegido ' + productoElegido + ' y su precio es de ' + cesta + ' Dolares');
                break;
            case 'botines':
                cesta = 50;
                alert('Haz elegido ' + productoElegido + ' y su precio es de ' + cesta + ' Dolares');
                break;
            default: cesta
                cesta = 0;
                alert('Introduce un producto correcto');
        }
        precioTotal = precioTotal + cesta
        productoElegido = prompt('Escribe otro producto, por favor! Remera, Sweater, Shorts, Zapatillas, Pantalones, Leggings, Botines o escribe Finalizar para salir').toLocaleLowerCase();
    }
}

agregarAlCarro();

console.log(precioTotal);
alert('Su carro tiene productos por un total de ' + precioTotal + ' dolares');

const activarCuponDeDescuento = () => {
    console.log('Los números de cupon son 10, 25, 30 o 50');
    let numeroDeCupon = prompt('Escribe el número de cupon de descuento si posees uno, sino escribe Finalizar (Los números de cupon son 10, 25, 30 o 50)').toLocaleLowerCase();

    while (numeroDeCupon != 'finalizar') {
        switch (numeroDeCupon) {
            case '10':
                precioTotal = precioTotal - (precioTotal * 0.10);
                break;
            case '25':
                precioTotal = precioTotal - (precioTotal * 0.25);
                break;
            case '30':
                precioTotal = precioTotal - (precioTotal * 0.30);
                break;
            case '50':
                precioTotal = precioTotal - (precioTotal * 0.50);
                break;
            default:
                alert('El número introducido es incorrecto, vuelve a intentar');
        }
        numeroDeCupon = prompt('Escribe un número de cupon correcto de descuento si posees uno, sino escribe Finalizar');
    }
    console.log(precioTotal);
    alert('El total de tu compra tiene un precio de ' + parseFloat(precioTotal));
}

activarCuponDeDescuento();

