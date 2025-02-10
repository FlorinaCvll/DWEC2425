// 1. Ordenación Alfabética de Listas

const nombres = ["Sofía", "Carlos", "Ana", "Pedro", "Isabel"]; // Declara un array de nombres.

nombres.sort(); // Ordena el array de nombres alfabéticamente por defecto.
console.log(nombres); // Muestra el array ordenado en la consola.

// 2. Ordenación Multilingüe

const palabras = ["árbol", "zorro", "caña", "ñandú", "águila"]; // Declara un array de palabras con caracteres especiales.

palabras.sort((a, b) => a.localeCompare(b)); // Ordena el array de palabras usando localeCompare para una comparación sensible a las reglas de cada idioma.
console.log(palabras); // Muestra el array ordenado en la consola.

// 3. Comparación Sensible a Mayúsculas y Minúsculas

const frutas = ["manzana", "Banana", "naranja", "uva"]; // Declara un array de nombres de frutas con diferentes capitalizaciones.

frutas.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())); // Ordena el array de frutas de manera insensible a mayúsculas y minúsculas convirtiendo cada elemento a minúsculas antes de comparar.
console.log(frutas); // Muestra el array ordenado en la consola.

// 4. Ordenación Personalizada de Objetos

const personas = [
    {nombre: "Juan", edad: 30},
    {nombre: "María", edad: 25},
    {nombre: "Pedro", edad: 40}
]; // Declara un array de objetos, cada uno representando una persona con nombre y edad.

personas.sort((a, b) => a.edad - b.edad); // Ordena el array de objetos por la propiedad 'edad' de cada objeto.
console.log(personas); // Muestra el array ordenado en la consola.

// 5. Comparación de Cadenas en Formularios

const input1 = "10"; // Declara una cadena representando un número.
const input2 = "2"; // Declara otra cadena representando un número.

const num1 = Number(input1); // Convierte la cadena 'input1' a un número.
const num2 = Number(input2); // Convierte la cadena 'input2' a un número.
console.log(num1 > num2); // Compara los dos números y muestra el resultado en la consola.

// 6. Ordenación por Longitud de Cadenas

const cadenas = ["hola", "mundo", "javascript", "ordenación"]; // Declara un array de cadenas de diferentes longitudes.

cadenas.sort((a, b) => a.length - b.length); // Ordena el array de cadenas por la longitud de cada cadena.
console.log(cadenas); // Muestra el array ordenado en la consola.


/*
Explicación de los métodos utilizados:
    sort():
Qué hace: Ordena los elementos de un array en su lugar y devuelve el array.
    Por qué se usa: Para ordenar arrays de cadenas o números.
    Uso en el código: Se usa para ordenar los arrays nombres, palabras, frutas, personas, y cadenas.
localeCompare():
Qué hace: Compara dos cadenas en una forma específica del idioma, devolviendo un número que indica si la cadena de referencia viene antes, después o es igual a la cadena comparada.
    Por qué se usa: Para realizar comparaciones de cadenas que respeten las reglas de ordenación de diferentes idiomas.
    Uso en el código: Se usa en la ordenación de palabras y frutas para asegurar una comparación correcta según las reglas del idioma.
toLowerCase():
Qué hace: Convierte una cadena a minúsculas.
    Por qué se usa: Para realizar comparaciones insensibles a mayúsculas y minúsculas.
    Uso en el código: Se usa en la ordenación de frutas para comparar las cadenas en minúsculas.
Number():
Qué hace: Convierte un valor a un número.
    Por qué se usa: Para convertir cadenas que representan números a valores numéricos reales para comparaciones numéricas precisas.
    Uso en el código: Se usa para convertir input1 y input2 a números antes de compararlos.*/
