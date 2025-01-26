// Recursividad Básica: Factorial
function factorial(n) {
    if (n === 0) {
        return 1; // Condición base
    } else {
        return n * factorial(n - 1); // Llamada recursiva
    }
}

console.log(factorial(5)); // Output: 120

// Recursividad Avanzada: Factorial con Recursividad de Cola
function factorialTail(n, acumulador = 1) {
    if (n === 0) {
        return acumulador; // Condición base
    } else {
        return factorialTail(n - 1, n * acumulador); // Llamada recursiva de cola
    }
}

console.log(factorialTail(5)); // Output: 120

// Memoización: Fibonacci
function fibonacci(n, memo = {}) {
    if (n in memo) {
        return memo[n]; // Devuelve resultado almacenado si existe
    }
    if (n <= 1) {
        return n; // Condición base
    }
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo); // Almacena el resultado
    return memo[n];
}

console.log(fibonacci(10)); // Output: 55

// Recursividad Mutua: EsPar y EsImpar
function esPar(n) {
    if (n === 0) {
        return true; // Condición base
    } else {
        return esImpar(n - 1); // Llamada a esImpar
    }
}

function esImpar(n) {
    if (n === 0) {
        return false; // Condición base
    } else {
        return esPar(n - 1); // Llamada a esPar
    }
}

console.log(esPar(4)); // Output: true
console.log(esImpar(5)); // Output: true
