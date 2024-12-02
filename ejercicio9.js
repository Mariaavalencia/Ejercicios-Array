const doctores = [
    {id: 1, nombre: 'Dr. Valencia', especialidad: 'Cirujano plastico'},
    {id: 2, nombre:'Dr. Arias', especialidad: 'Odontologia'}
];

let citas =[];

function agendarCita(paciente, doctorId, fecha, hora){
    const doctor = doctores.find(d => d.id === doctorId);
    if (!doctor){
        return 'Doctor no encontrado';
    }
    
    if(citaExiste(fecha, hora, doctorId)) {
        return 'Horario no disponible';
    }
    const nuevaCita ={
        id: citas.length + 1, paciente,
        doctor: doctor.nombre, fecha, hora
    };
   
    citas.push(nuevaCita);
    return `Cita agendada para ${paciente} con ${doctor.nombre}`;
}

function citaExiste(fecha, hora, doctorId){
    return citas.some(c => 
        c.fecha === fecha &&
        c.hora === hora &&
        doctores.find(d => d.nombre === c.doctor)?.id === doctorId
        );
}

function verCitasPaciente(paciente){
    return citas.filter(c => c.paciente === paciente);
}

function cancelarCita(citaId){
    const index = citas.findIndex(c => c.id === citaId);
    if(index === -1) return 'Cita no encontrada';

    citas.splice(index, 1);
    return 'Cita cancelada exitosamente'
}

console.log(agendarCita('Sofia Suarez', 1, '2024-12-02','08:00'));
console.log(agendarCita('Felipe Gaitan', 2, '202-12-08', '2:00'));
console.log(verCitasPaciente('Sofia Suarez'));
console.log(verCitasPaciente('Felipe Gaitan'));
console.log(cancelarCita(1));