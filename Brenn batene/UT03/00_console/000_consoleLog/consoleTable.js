// 1. Visualización de datos de APIs
fetch('https://rickandmortyapi.com/api/character') // Realiza una petición a la API de Rick and Morty para obtener personajes.
    .then(response => response.json()) // Convierte la respuesta del servidor a formato JSON (JavaScript Object Notation).
    .then(data => { // Cuando los datos JSON están disponibles...
        console.table(data.results); // ...muestra la información de los personajes en una tabla en la consola.
    });

// 2. Depuración de arrays de objetos
const productos = [ // Define un array de objetos, donde cada objeto representa un producto.
    {id: 1, nombre: 'Camiseta', precio: 20},
    {id: 2, nombre: 'Pantalón', precio: 30},
    {id: 3, nombre: 'Zapatos', precio: 50}
];

console.table(productos); // Muestra la información de los productos en una tabla en la consola.

// 3. Comparación de datos
const datosAntiguos = [ // Define un array de objetos con datos antiguos.
    {id: 1, valor: 10},
    {id: 2, valor: 20}
];

const datosNuevos = [ // Define un array de objetos con datos nuevos.
    {id: 1, valor: 15},
    {id: 2, valor: 20}
];

console.table({datosAntiguos, datosNuevos}); // Muestra ambos arrays de objetos en una tabla para comparar sus valores.

// 4. Seguimiento de estados en Aplicaciones Reactivas
// Ejemplo simulado de un componente de React
class MiComponente {
    constructor() {
        this.state = { // Define el estado inicial del componente.
            nombre: 'Juan',
            edad: 30,
            email: 'juan.perez@example.com'
        };
    }

    actualizarNombre(nuevoNombre) { // Método para actualizar el nombre en el estado del componente.
        this.state = {...this.state, nombre: nuevoNombre}; // Crea una copia del estado anterior y modifica el nombre.
        console.table(this.state); // Muestra el estado actualizado del componente en una tabla.
    }
}

const componente = new MiComponente(); // Crea una instancia del componente.
componente.actualizarNombre('Pedro'); // Llama al método para actualizar el nombre.

// 5. Validación de estructuras de datos complejos
const datosComplejos = { // Define un objeto con estructuras de datos complejas (arrays de objetos anidados).
    usuarios: [
        {nombre: 'Ana', edad: 25, ciudad: 'Madrid'},
        {nombre: 'Carlos', edad: 32, ciudad: 'Barcelona'}
    ],
    productos: [
        {nombre: 'Camiseta', precio: 20},
        {nombre: 'Pantalón', precio: 30}
    ]
};

console.table(datosComplejos.usuarios); // Muestra la información de los usuarios en una tabla.
console.table(datosComplejos.productos); // Muestra la información de los productos en una tabla.

// 6. Validación de resultados de algoritmos
function ordenarArray(array) { // Función para ordenar un array numérico.
    // ... algoritmo de ordenamiento ...
    const arrayOrdenado = array.sort((a, b) => a - b); // Simula el ordenamiento (ordena de menor a mayor).
    console.table({arrayOriginal: array, arrayOrdenado: arrayOrdenado}); // Muestra el array original y el array ordenado en una tabla para verificar el resultado.
    return arrayOrdenado; // Retorna el array ordenado.
}

const numeros = [5, 2, 8, 1, 9]; // Define un array de números.
ordenarArray(numeros); // Llama a la función para ordenar el array.