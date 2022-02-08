// tipo de dado
// booleano

// conversão implícita

const numero = 456;
const numeroString = "456";

console.log(numero == numeroString);

console.log(numero + numeroString);

// conversão explícita

console.log(numero + Number(numeroString));
console.log(String(numero) === numeroString);