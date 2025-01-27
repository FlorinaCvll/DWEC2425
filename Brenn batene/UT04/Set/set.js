// Crear set
let setVacio = new Set();
let setConValores = new Set([1, 2, 3, 4, 5]);
console.log(setVacio); // Set(0) {}
console.log(setConValores); // Set(5) { 1, 2, 3, 4, 5 }

// Añadir elementos
let miSet = new Set();
miSet.add(1);
miSet.add(2);
miSet.add(2); // Este valor no se añade ya que 2 ya existe
console.log(miSet); // Set { 1, 2 }

// Eliminar elementos
miSet.delete(1);
console.log(miSet); // Set { 2 }

// Comprobar si un elemento existe
console.log(miSet.has(2)); // true
console.log(miSet.has(3)); // false

// Tamaño del set
console.log(miSet.size); // 1

// Vaciar el set
miSet.clear();
console.log(miSet); // Set {}

// Set a array
let miSetY = new Set([1, 2, 3, 4]);
let array = [...miSetY];
console.log(array); // [1, 2, 3, 4]

let miSetZ = new Set([1, 2, 3, 4]);
let arrayZ = Array.from(miSetZ);
console.log(arrayZ); // [1, 2, 3, 4]

/*
* Cuándo Usarlo:
Cuando necesitas usar métodos específicos de los arrays que no están disponibles en los sets, como map(), filter(), o reduce().
Para manipular los datos del Set en una estructura de array.
*
Cuándo Evitarlo:
Si no necesitas usar métodos de array adicionales, ya que Set ya proporciona métodos eficientes para la mayoría de las operaciones.
* */

// Iteracion sobre un set
// for...of
let miSetX = new Set([1, 2, 3]);
for (let valor of miSetX) {
    console.log(valor);
}
// Output: 1, 2, 3

//forEach
miSet.forEach(valor => {
    console.log(valor);
});


let setDeEjemplo = new Set(["a", "b", "c", "a"]);
console.log(setDeEjemplo); // Set { "a", "b", "c" }

setDeEjemplo.add("d");
console.log(setDeEjemplo.has("d")); // true

setDeEjemplo.delete("a");
console.log(setDeEjemplo.size); // 3

setDeEjemplo.forEach(valor => {
    console.log(valor);
});
// Output: "b", "c", "d"

