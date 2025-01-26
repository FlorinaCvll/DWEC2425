let frutas = ["manzana", "banana", "cereza"];

// Añadir y eliminar elementos
// Añadir
frutas.push("naranja");
// Eliminar primer elemento
frutas.shift();
// Eliminar último elemento
frutas.pop();

//Añadir al principio
frutas.unshift("pera");
console.log(frutas); // ["pera", "banana", "cereza"]

// Encontrar la longitud del array
console.log(frutas.length); // 3

// Buscar el índice de un elemento
console.log(frutas.indexOf("cereza")); // 2

//Añadir, eliminar y reemplazar elementos
frutas.splice(1, 1); // Elimina un elemento en el índice 1
console.log(frutas); // ["pera", "cereza"]
frutas.splice(1, 0, "banana");
console.log(frutas); // ["pera", "banana", "cereza"]
frutas.splice(1, 1, "naranja");
console.log(frutas); // ["pera", "naranja", "cereza"]


// Crear un nuevo array a partir de una porción
let nuevasFrutas = frutas.slice(1, 3);
console.log(nuevasFrutas); // ["banana", "cereza"]

// Filtrar elementos
let frutasConA = frutas.filter(fruta => fruta.includes("a"));
console.log(frutasConA); // ["manzana", "banana"]

/*Concat: Combina dos o más arrays y devuelve un nuevo array sin modificar los arrays originales.*/
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concatenado = array1.concat(array2);
console.log(concatenado); // [1, 2, 3, 4, 5, 6]


/*Join: Une todos los elementos de un array en una cadena de texto, usando un separador especificado (por defecto es una coma).*/
let elementos = ["aire", "fuego", "agua"];
let cadena = elementos.join(", ");
console.log(cadena); // "aire, fuego, agua"

/*lastIndexOf(): Devuelve el último índice en el que un cierto elemento puede encontrarse en el array, o -1 si el elemento no está presente. */
let array = [1, 2, 3, 1, 2, 3];
let indice = array.lastIndexOf(2);
console.log(indice); // 4

/*includes(): Determina si un array incluye un determinado elemento, devolviendo true o false.*/
let arrayX = [1, 2, 3];
let tieneDos = arrayX.includes(2);
console.log(tieneDos); // true

/*Reverse(): Invierte el orden de los elementos en el array, modificando el array original.*/
let arrayY = [1, 2, 3];
arrayY.reverse();
console.log(arrayY); // [3, 2, 1]

/*Sort(): Ordena los elementos del array en su lugar y devuelve el array. Por defecto, convierte los elementos a cadenas y los ordena lexicográficamente.*/
let arrayZ = [3, 1, 4, 1, 5, 9];
arrayZ.sort();
console.log(arrayZ); // [1, 1, 3, 4, 5, 9]
// Para ordenar numéricamente
arrayZ.sort((a, b) => a - b);
console.log(array); // [1, 1, 3, 4, 5, 9]

/*Desestructuracion: sintaxis especial que permite "desempaquetar" valores de arrays o propiedades de objetos en variables distintas.*/
let arrayT = [1, 2, 3, 4, 5];

let [primero, segundo, ...resto] = arrayT;

console.log(primero); // 1
console.log(segundo); // 2
console.log(resto);   // [3, 4, 5]
