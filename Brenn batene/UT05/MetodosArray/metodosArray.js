let numeros = [1, 2, 3, 4, 5];

// Filtrar números pares
let pares = numeros.filter(function (num) {
    return num % 2 === 0;
});

// Calcular cuadrados de los números pares
let cuadrados = pares.map(function (num) {
    return num * num;
});

// Sumar los cuadrados
let sumaCuadrados = cuadrados.reduce(function (acumulador, num) {
    return acumulador + num;
}, 0);

console.log(sumaCuadrados); // 20 (4 + 16)
