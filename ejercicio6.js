const habitaciones =[
    { numero: 101, tipo: 'individual', precio: 100, ocupada: false},
    { numero: 102, tipo:'doble', precio: 150, ocupada: false},
    { numero:103, tipo:'suite', precio: 250, ocupada: false}
];

let reserva =[];

function reservarHabitacion(numeroHabitacion, huesped, fechaIngreso, fechaSalida){
    const habitacion = habitaciones.find(h => h.numero === numeroHabitacion);
    if(!habitacion) {
        return `La habitación ${numeroHabitacion} no existe`;
    }

    if(habitacion.ocupada){
        return`La habitacion ${numeroHabitacion} ya está ocupada`;
    }

    habitacion.ocupada = true;

    const nuevaReserva ={
        id: reserva.length + 1,
        habitacion: numeroHabitacion,
        huesped,
        fechaIngreso,
        fechaSalida
    };

    reserva.push(nuevaReserva);
    return `Reserva confirmada para ${huesped} en habitacion ${numeroHabitacion}`;
}

function verDisponibles(){
    return habitaciones.filter(h => !h.ocupada);
}

function cancelarReserva(numeroHabitacion){
    const habitacion = habitaciones.find(h => h.numero === numeroHabitacion);

    if(!habitacion){
        return`La habitacion ${numeroHabitacion} no existe`;
    }

    if(!habitacion.ocupada){
        return`La habitacion ${numeroHabitacion} ya esta libre`;
    }

    habitacion.ocupada = false;
    reserva = reserva.filter(r => r.habitacion !== numeroHabitacion);
    return `Reserva cancelada para la habitacion ${numeroHabitacion}`;
}

console.log(verDisponibles());
console.log(reservarHabitacion(101, "Juan Perez","2024-11-28", "2024-11-30"));
console.log(verDisponibles());
console.log(cancelarReserva(101));
console.log(verDisponibles());