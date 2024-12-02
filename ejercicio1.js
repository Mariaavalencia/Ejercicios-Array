const carrito2 = [
    {nombre:"califlor", precio:150, cantidad: 4},
    {nombre:"zanahoria", precio:80, cantidad:8},
    {nombre:"espinaca", precio:30, cantidad:6}
];

const calcularTotal2 = (productos) =>{
    return productos.reduce((total, productos) =>{
        const subtotal = productos.precio / productos.cantidad;
        return total + subtotal;
    }, 0);
}

const total = calcularTotal2(carrito2);
console.log("productos del carrito:", carrito2);
console.log("Total a pagar: $" + total);

