const ventas1 = [
    {productos: "Fabuloso", categoria:"Aseo", precio: 40},
    {productos: "Cucharas", categoria:"Hogar", precio: 65},
    {productos: "Servilletas", categoria:"Aseo", precio: 12},
    {productos: "Limpido", categoria:"Aseo", precio: 25},
    {productos: "Esponja", categoria:"Aseo", precio: 10}
];

const ventasPorCategoria = ventas1.reduce((acc, ventas1) => {
    acc[ventas1.categoria] = (acc[ventas1.categoria] || 0) + ventas1.precio;
    return acc;
},{});

console.log("ventas por categoria:", ventasPorCategoria);
