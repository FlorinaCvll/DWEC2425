// Comapracion simple
let cadena1 = "hola";
let cadena2 = "Hola";

console.log(cadena1.localeCompare(cadena2)); // Dependiendo de la localización, puede ser 0, -1 o 1

// Comparación con Especficacion de localización
let cadena3 = "straße";
let cadena4 = "strasse";
console.log(cadena3.localeCompare(cadena4, 'de-DE')); // En alemán, puede considerar "ß" y "ss" como iguales.

// Comparacion con opciones
let cadena5 = "hello";
let cadena6 = "HELLO";
// Comparación que ignora mayúsculas y minúsculas
console.log(cadena5.localeCompare(cadena6, undefined, {sensitivity: 'base'})); // 0

// Ordenar un Array dce cadenas
let frutas = ["plátano", "manzana", "naranja"];
frutas.sort((a, b) => a.localeCompare(b));
console.log(frutas); // ["manzana", "naranja", "plátano"]

// Ejemplo completo con localizacion y opciones
let palabras = ["café", "cafÉ", "cafe", "CAFÉ"];
palabras.sort((a, b) => a.localeCompare(b, 'es', {sensitivity: 'accent'}));
console.log(palabras); // ["CAFÉ", "cafÉ", "café", "cafe"]
