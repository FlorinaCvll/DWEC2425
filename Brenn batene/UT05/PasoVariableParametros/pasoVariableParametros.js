// Parametros REST

function sumar(...numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

console.log(sumar(1, 2, 3)); // Muestra 6
console.log(sumar(10, 20, 30, 40)); // Muestra 100

// Define una función que acepta un número indefinido de argumentos
function sumar2(...numeros) {
    // Utiliza el método reduce para sumar todos los elementos del array
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

// Llama a la función sumar con tres argumentos
console.log(sumar2(1, 2, 3)); // Muestra 6

// Llama a la función sumar con cuatro argumentos
console.log(sumar2(10, 20, 30, 40)); // Muestra 100


// Función que encuentra el máximo de un número indefinido de argumentos
function encontrarMaximo(...numeros) {
    return Math.max(...numeros);
}

console.log(encontrarMaximo(1, 2, 3, 4)); // Muestra 4
console.log(encontrarMaximo(10, 5, 8));   // Muestra 10


// Parametros SPREAD

function maximo(a, b, c) {
    return Math.max(a, b, c);
}

let numeros = [1, 2, 3];
console.log(maximo(...numeros)); // Muestra 3


// Combinar dos arrays usando el operador spread
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let arrayCombinado = [...array1, ...array2];

console.log(arrayCombinado); // Muestra [1, 2, 3, 4, 5, 6]

// Clonar un objeto usando el operador spread
let objetoOriginal = {a: 1, b: 2};
let objetoClonado = {...objetoOriginal, c: 3};

console.log(objetoClonado); // Muestra { a: 1, b: 2, c: 3 }
