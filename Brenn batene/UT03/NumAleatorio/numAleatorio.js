// Numero decimal aleatorio entre 0 y 1
let numeroAleatorio = Math.random();
console.log("Numero aleatorio entre 0 y 1" + numeroAleatorio); // Por ejemplo: 0.7353916445709425


// Numero entero aleatorio entre rango (min incluido, max excluido)
function getNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log("Numero entero aleatorio entre rango " + getNumeroAleatorio(1, 10)); // Por ejemplo: 3


//Numero entero aleatorio entre rango (min incluido, max incluido)
function getNumeroAleatorioIncluido(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Numero entero aleatorio entre rango (min incluido, max incluido)" + getNumeroAleatorioIncluido(1, 10)); // Por ejemplo: 7

// Generar un Número Entero Aleatorio entre 1 y 100
let numeroAleatorio2 = Math.floor(Math.random() * 100) + 1;
console.log("Generar un Número Entero Aleatorio entre 1 y 100" + numeroAleatorio2); // Por ejemplo: 42

//Seleccionar un Elemento Aleatorio de un Array:
let colores = ["rojo", "verde", "azul", "amarillo"];
let indiceAleatorio = Math.floor(Math.random() * colores.length);
console.log("Seleccionar un Elemento Aleatorio de un Array " + colores[indiceAleatorio]); // Por ejemplo: "azul"

//Simular el Lanzamiento de un Dado (1-6)
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

console.log("Simular lanzmaiento de un dado" + lanzarDado()); // Por ejemplo: 4
