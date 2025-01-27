/*Alcance de funcion*/
function ejemploVar() {
    var mensaje = "Hola desde var";
    console.log(mensaje); // "Hola desde var"
}

console.log(mensaje); // Error: mensaje is not defined

/*Hoisting*/
console.log(mensaje); // undefined
var mensaje = "Hola!";
console.log(mensaje); // "Hola!"


/*Alcance de bloque*/
if (true) {
    let saludo = "Hola desde let";
    console.log(saludo); // "Hola desde let"
}
console.log(saludo); // Error: saludo is not defined
/*Hoisting*/
console.log(mensaje); // Error: Cannot access 'mensaje' before initialization
let mensaje = "Hola!";
console.log(mensaje); // "Hola!"


// Comparacion Practica
/* Declaracion en ciclos*/
for (var i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
console.log(i); // 3 (i es accesible fuera del ciclo)

for (let j = 0; j < 3; j++) {
    console.log(j); // 0, 1, 2
}
console.log(j); // Error: j is not defined

/*Reasignacion y redeclaracion*/
var mensaje = "Hola!";
var mensaje = "Adiós!"; // No hay error, puede redeclararse
console.log(mensaje); // "Adiós!"

let saludo = "Hola!";
let saludo = "Adiós!"; // Error: Identifier 'saludo' has already been declared
console.log(saludo);

