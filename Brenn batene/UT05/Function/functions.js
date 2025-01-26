/*Declaraciones*/

// Funciuones declarativas
function saludar() {
    console.log("¡Hola!");
}

saludar();

// Funciones expresivas
const despedir = function () {
    console.log("¡Adiós!");
};

despedir();

// Funciones flecha
const sumar = (a, b) => {
    return a + b;
};

console.log(sumar(2, 3));

// Funciones flecha con un solo parámetro
const cuadrado = x => x * x;

console.log(cuadrado(5));

// Funciones flecha sin parámetros
const saludar2 = () => console.log("¡Hola de nuevo!");

saludar2();

// Funciones anonimas
setTimeout(function () {
    console.log("Esto se ejecuta después de 1 segundo");
}, 1000);

// Funciones autoejecutables
(function () {
    console.log("Esta función se ejecuta inmediatamente");
})();

// Funciones autoejecutables con flecha
(() => {
    let mensaje = "Esta es una función autoejecutable usando una función flecha";
    console.log(mensaje);
})();

// Funciones autoejecutables con parámetros
((mensaje) => {
    console.log(mensaje);
})("Esta es una función autoejecutable con parámetros");

// Funciones autoejecutables con retorno
let resultado = ((a, b) => {
    return a * b;
})(5, 10);

console.log(resultado);

// Funciones autoejecutables con retorno implícito
let resultado2 = ((a, b) => a * b)(5, 10);

console.log(resultado2);

// Funciones autoejecutables con retorno implícito y sin paréntesis
let resultado3 = (a => a * a)(5);

console.log(resultado3);

// Modulo autoejecutable
/*
* const miModulo → declara una constante quue almacena el resultado de una función autoejecutable.
*
* () => → función flecha que no recibe parámetros. Todo lo que {} es el cuerpo de la funcion
*
* let contador = 0; → declara una variable contador y la inicializa en 0. Es privada por lo que solo es accesiole dentro de la función autoejecutable.
*
* return → retorna un objeto con dos métodos publicos: incrementar y decrementar.
*
* incrementar: () => {...} → metodo incrementar como una funcion flecha, incrementa su lavor y muestra su valor en la consola
*
* decrementar: () => {...} → metodo decrementar como una funcion flecha, decrementa su lavor y muestra su valor en la consola
*
* })(); → Este bloque se ejecuta inmmediatamente después de ser definido. El valor retornado se asignas a miModulo.
* */
const miModulo = (() => {
    let contador = 0;

    return {
        incrementar: () => {
            contador++;
            console.log(contador);
        },
        decrementar: () => {
            contador--;
            console.log(contador);
        }
    };
})();

miModulo.incrementar(); // Output: 1
miModulo.decrementar(); // Output: 0
