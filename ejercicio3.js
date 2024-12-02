const estudiantes = [
    {nombre: "Juliana", nota: 3.2},
    {nombre:"Samuel", nota:5.0},
    {nombre:"Maria", nota:2.5},
    {nombre:"Pedro", nota:4.2},
    {nombre:"Juan", nota:1.5}
];

const aprobados = estudiantes
.filter(estudiante => estudiante.nota >= 3)
.map(estudiante => estudiante.nombre);
console.log("Estudiantes aprobados:", aprobados);