const carrito =[
    {nombre: "Tenis", precio: 400, cantidad: 5},
    {nombre: "Guantes", precio: 50, cantidad: 3},
    {nombre: "lazo", precio: 10, cantidad: 4}
];

const calcularTotal = (productos) =>{
    return productos.reduce((total, productos) => {
        const subtotal = productos.precio * productos.cantidad;
        return total + subtotal;
    }, 0);
};

const total = calcularTotal(carrito);
console.log("Productos en carrito:", carrito);
console.log("Total a pagar: $" + total);