const cuentas =[
    {id: 1, usuario: 'Juan', pin: '1234', saldo:1000},
    {id: 2, usuario: 'Ana', pin: '5678', saldo:2000}
];

let transacciones =[];

function consultarSaldo(userId, pin){
    const cuenta = cuentas.find(c => c.id === userId && c.pin === pin);
    return cuenta ? cuenta.saldo : 'Credenciales invalidas';
}

function retirar(userId, pin, monto){
    const cuenta = cuentas.find(c => c.id === userId && c.pin === pin);
    if(!cuenta) return 'Credenciales invalidas';
    if(cuenta.saldo < monto) return 'Saldo insuficiente';
    if(monto > 1000) return 'excede limite de retiro';

    cuenta.saldo -= monto;
    registrarTransaccion(userId, 'retiro', monto);
    return `Retiro exitoso. Nuevo saldo : ${cuenta.saldo}`;
}

function depositar(userId, pin, monto){
    const cuenta = cuentas.find(c => c.id === userId && c.pin === pin);
    if(!cuenta) return 'Credenciales invalidas';

    cuenta.saldo += monto;
    registrarTransaccion(userId, 'deposito', monto);
    return `Deposito exitoso. Nuevo saldo : ${cuenta.saldo}`;
}

function registrarTransaccion(userId, tipo, monto){
    transacciones.push({
        fecha: new Date().toISOString(),
        userId,
        tipo,
        monto
    });
}

console.log(consultarSaldo(1, '1234'));
console.log(retirar(1, '1234', 500));
console.log(depositar(2, '5678', 300));
console.log(transacciones);



