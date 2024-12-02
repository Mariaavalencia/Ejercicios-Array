const mesas =[
    { numero: 1, tipo: 'sencilla', precio: 20, ocupada: false},
    { numero: 2, tipo:'doble', precio: 55, ocupada: false},
    { numero: 3, tipo:'familiar', precio: 180, ocupada: false},
    { numero: 4, tipo: 'sencilla', precio: 20, ocupada: false},
    { numero: 5, tipo:'doble', precio: 55, ocupada: false},
    { numero: 6, tipo:'familiar', precio: 180, ocupada: false}
];

let reserva =[];

function reservarMesa(numeroMesa, clientes, fechaHoraIngreso, fechaHoraSalida){
    const mesa = mesas.find(m => m.numero === numeroMesa);
    if(!mesa) {
        return `La mesa ${numeroMesa} no existe`;
    }

    if(mesa.ocupada){
        return`La mesa ${numeroMesa} ya está ocupada`;
    }

    mesa.ocupada = true;

    const nuevaReserva ={
        id: reserva.length + 1,
        mesa: numeroMesa,
        clientes,
        fechaHoraIngreso,
        fechaHoraSalida
    };

    reserva.push(nuevaReserva);
    return `Reserva confirmada para ${clientes} en mesa ${numeroMesa}`;
}

function verDisponibles(){
    return mesas.filter(m => !m.ocupada);
}

function cancelarReserva(numeroMesa){
    const mesa = mesas.find(m => m.numero === numeroMesa);

    if(!mesa){
        return`La mesa ${numeroMesa} no existe`;
    }

    if(!mesa.ocupada){
        return`La mesa ${numeroMesa} ya esta libre`;
    }

    mesa.ocupada = false;
    reserva = reserva.filter(r => r.mesa !== numeroMesa);
    return `Reserva cancelada para la mesa ${numeroMesa}`;
}

console.log(verDisponibles());
console.log(reservarMesa(5, "Juan Perez","2024-11-28-7:20", "2024-11-28-8:20"));
console.log(verDisponibles());
console.log(cancelarReserva(5));
console.log(verDisponibles());
console.log(reservarMesa(3, "Maria Valencia","2024-11-29-8:00", "2024-11-29-9:30"))