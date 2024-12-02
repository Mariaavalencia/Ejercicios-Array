const peliculas =[
    {id: 1, nombre: "avengers", horarios:["14:00", "17:00", "20:00"], precio: 20},
    {id: 2, nombre: "robot salvaje", horarios:["15:00", "18:00", "21.00"], precio: 20}
];

let asientos =[
    {numero: "A1", ocupado: false},
    {numero: "A2", ocupado: false},
    {numero: "A3", ocupado: true},
    {numero: "B1", ocupado: false},
    {numero: "B2", ocupado: false}
];

let boletas =[];

function verPeliculas(){
    return peliculas.map(p => ({
        nombre: p.nombre,
        horarios: p.horarios
    }));
}

function verAsientosDisponible(){
    return asientos.filter(a =>!a.ocupado);
}

function comprarBoleta(peliculaId, horario , asientosSeleccionados){
    const pelicula = peliculas.find(p => p.id === peliculaId);
    if(!pelicula) return "Pelicula no encontada";

    if(!pelicula.horarios.includes(horario)){
    return "Horario no disponible";
}

const asientosValidos = asientosSeleccionados.every(asiento => {
    const asientoExiste = asientos.find(a => a.numero === asiento && !a.ocupado
        );
        return asientoExiste;
});

if (!asientosValidos) return "Asientos no disponibles";
const total = pelicula.precio * asientosSeleccionados.length;

asientosSeleccionados.forEach(asiento =>{
    const idx = asientos.findIndex( a=> a.numero === asiento);
    asientos[idx].ocupado = true;
});

const boleta ={
    id: boletas.length + 1,
    pelicula: pelicula.nombre, horario,
    asientos: asientosSeleccionados, total
};

boletas.push(boleta);
return boleta;
}

console.log(verPeliculas());
console.log(verAsientosDisponible());
console.log(comprarBoleta(1, "14:00", ["A1", "A2"]));
console.log(verAsientosDisponible());



