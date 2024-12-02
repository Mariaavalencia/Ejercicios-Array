const ventas = [
    {productos: "Manzana", categoria:"Frutas", precio: 150},
    {productos: "Leche", categoria:"Lacteos", precio: 400},
    {productos: "Peras", categoria:"Frutas", precio: 120},
    {productos: "Queso", categoria:"Lacteos", precio: 250},
    {productos: "Yogurt", categoria:"Lacteos", precio: 600}
];

const ventasPorCategoria = ventas.reduce((acc, ventas) => {
    acc[ventas.categoria] = (acc[ventas.categoria] || 0) + ventas.precio;
    return acc;
},{});

console.log("ventas por categoria:", ventasPorCategoria);


