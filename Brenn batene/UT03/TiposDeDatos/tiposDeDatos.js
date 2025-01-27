/*
let numero = 42;             // Number
let texto = "Hola, mundo!";  // String
let verdadero = true;        // Boolean
let persona = {              // Object
    nombre: "Juan",
    edad: 30
};
let numeros = [1, 2, 3, 4, 5]; // Array
let valorNulo = null;        // Null
let indefinido;              // Undefined
let simbolo = Symbol("id");  // Symbol
let numeroGrande = BigInt(9007199254740991); // BigInt

*/

let variables = [
    42,
    "Hola, mundo!",
    true,
    undefined,
    Symbol("id"),
    BigInt(9007199254740991),
    {nombre: "Juan", edad: 30},
    null,
    function () {
        return "Hola!";
    }
];

variables.forEach(variable => {
    if (typeof variable === 'symbol') {
        console.log(`${variable.toString()}: ${typeof variable}`);
    } else {
        console.log(`${variable}: ${typeof variable}`);
    }
});
