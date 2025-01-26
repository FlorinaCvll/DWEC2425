// Añade o actualizar un par clave-valor
let miMapa = new Map();
miMapa.set("nombre", "Juan");
miMapa.set("edad", 30);

// Obtiene un valor a partir de una clave
console.log(miMapa.get("nombre")); // "Juan"

// Comprueba si una clave existe
console.log(miMapa.has("edad")); // true

// Elimina un par clave-valor
miMapa.delete("edad");
console.log(miMapa); // Map { "nombre" => "Juan" }

// Elimina todos los pares clave-valor
miMapa.clear();
console.log(miMapa); // Map(0) {}

// Tamaño del mapa
let miMapa2 = new Map([
    ["nombre", "Juan"],
    ["edad", 30]
]);
console.log(miMapa2.size); // 2

// Convertir mapa a array
// Array de pares clave-valor
let arrayDePares = Array.from(miMapa2);
console.log(arrayDePares); // [["nombre", "Juan"], ["edad", 30]]
// Array de claves
let claves = Array.from(miMapa2.keys());
console.log(claves); // ["nombre", "edad"]
// Array de valores
let valores = Array.from(miMapa2.values());
console.log(valores); // ["Juan", 30]

let miMapa3 = new Map([
    ["nombre", "Juan"],
    ["edad", 30],
    ["profesion", "Desarrollador"]
]);

// Añadir o actualizar valores
miMapa3.set("pais", "España");

// Obtener valor por clave
console.log(miMapa3.get("nombre")); // "Juan"

// Comprobar si una clave existe
console.log(miMapa3.has("edad")); // true

// Eliminar un par clave-valor
miMapa3.delete("profesion");
console.log(miMapa3.size); // 3

// Convertir Map en Array de pares clave-valor
let arrayDePares2 = Array.from(miMapa3);
console.log(arrayDePares2); // [["nombre", "Juan"], ["edad", 30], ["pais", "España"]]

// Convertir solo las claves del Map en Array
let claves2 = Array.from(miMapa3.keys());
console.log(claves2); // ["nombre", "edad", "pais"]

// Convertir solo los valores del Map en Array
let valores2 = Array.from(miMapa3.values());
console.log(valores2); // ["Juan", 30, "España"]

// Limpiar todos los pares clave-valor del Map
miMapa.clear();
console.log(miMapa); // Map(0) {}

