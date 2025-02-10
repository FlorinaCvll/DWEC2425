// 1. Medir el tiempo de carga de datos desde una API

// Inicia el temporizador con la etiqueta 'Tiempo de carga de API' para medir el tiempo que tarda en completarse la solicitud a la API.
console.time('Tiempo de carga de API');

// Realiza una solicitud HTTP GET a la URL especificada para obtener datos de la API de Rick and Morty.
fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json()) // Convierte la respuesta en formato JSON para poder trabajar con los datos de manera más sencilla.
    .then(data => { // Maneja los datos recibidos de la API.
        // Detiene el temporizador y muestra el tiempo transcurrido desde que se inició la solicitud a la API.
        console.timeEnd('Tiempo de carga de API');
        // Muestra los datos de la API en la consola para verificar que se han recibido correctamente.
        console.log('Datos de la API:', data);
    });


// 2. Comparar el rendimiento de diferentes algoritmos de ordenación

// Declara un array de números desordenados que se utilizará para comparar el rendimiento de diferentes algoritmos de ordenación.
const arrayDesordenado = [5, 2, 8, 1, 9, 4, 7, 3, 6, 10];

// Algoritmo de ordenación burbuja
// Inicia el temporizador con la etiqueta 'Tiempo de ordenación burbuja' para medir el tiempo que tarda en completarse el algoritmo de ordenación burbuja.
console.time('Tiempo de ordenación burbuja');
// Crea una copia del array original para no modificarlo directamente y poder reutilizarlo en otros algoritmos.
const arrayBurbuja = [...arrayDesordenado];
// Bucle externo que recorre el array desde el primer hasta el penúltimo elemento.
for (let i = 0; i < arrayBurbuja.length - 1; i++) {
    // Bucle interno que recorre el array desde el primer elemento hasta el elemento no ordenado.
    for (let j = 0; j < arrayBurbuja.length - i - 1; j++) {
        // Compara dos elementos adyacentes y los intercambia si están en el orden incorrecto.
        if (arrayBurbuja[j] > arrayBurbuja[j + 1]) {
            [arrayBurbuja[j], arrayBurbuja[j + 1]] = [arrayBurbuja[j + 1], arrayBurbuja[j]];
        }
    }
}
// Detiene el temporizador y muestra el tiempo transcurrido desde que se inició el algoritmo de ordenación burbuja.
console.timeEnd('Tiempo de ordenación burbuja');

// Algoritmo de ordenación rápido (quicksort)
// Inicia el temporizador con la etiqueta 'Tiempo de ordenación rápida' para medir el tiempo que tarda en completarse el algoritmo de ordenación rápida.
console.time('Tiempo de ordenación rápida');
// Crea otra copia del array original para no modificarlo directamente y poder reutilizarlo en otros algoritmos.
const arrayRapido = [...arrayDesordenado];

// Define la función de ordenación rápida (quicksort) que ordena un array de manera recursiva.
function quickSort(array) {
    // Caso base: si el array tiene 1 o 0 elementos, ya está ordenado y se retorna tal cual.
    if (array.length <= 1) {
        return array;
    }
    // Selecciona el primer elemento del array como pivote.
    const pivot = array[0];
    // Declara dos arrays vacíos para los elementos menores y mayores o iguales que el pivote.
    const izquierda = [];
    const derecha = [];
    // Recorre el array desde el segundo elemento hasta el final.
    for (let i = 1; i < array.length; i++) {
        // Si el elemento es menor que el pivote, se añade al array de la izquierda.
        if (array[i] < pivot) {
            izquierda.push(array[i]);
        } else { // Si el elemento es mayor o igual que el pivote, se añade al array de la derecha.
            derecha.push(array[i]);
        }
    }
    // Ordena recursivamente los subarrays de la izquierda y la derecha, y los concatena con el pivote en el medio.
    return quickSort(izquierda).concat(pivot, quickSort(derecha));
}

// Llama a la función de ordenación rápida con el array copiado y lo ordena.
quickSort(arrayRapido);
// Detiene el temporizador y muestra el tiempo transcurrido desde que se inició el algoritmo de ordenación rápida.
console.timeEnd('Tiempo de ordenación rápida');


// 3. Optimizar bucles y operaciones iterativas

// Crea un array con 1 millón de números del 1 al 1,000,000 utilizando el método Array.from.
const arrayNumeros = Array.from({length: 1000000}, (_, i) => i + 1);

// Bucle 'for' tradicional
// Inicia el temporizador con la etiqueta 'Tiempo de bucle for tradicional' para medir el tiempo que tarda en completarse el bucle for tradicional.
console.time('Tiempo de bucle for tradicional');
// Inicializa la variable sumaFor a 0 para almacenar la suma de los elementos del array.
let sumaFor = 0;
// Recorre el array con un bucle for tradicional desde el primer hasta el último elemento.
for (let i = 0; i < arrayNumeros.length; i++) {
    // Suma cada elemento del array a la variable sumaFor.
    sumaFor += arrayNumeros[i];
}
// Detiene el temporizador y muestra el tiempo transcurrido desde que se inició el bucle for tradicional.
console.timeEnd('Tiempo de bucle for tradicional');

// Método 'forEach'
// Inicia el temporizador con la etiqueta 'Tiempo de forEach' para medir el tiempo que tarda en completarse el método forEach.
console.time('Tiempo de forEach');
// Inicializa la variable sumaForEach a 0 para almacenar la suma de los elementos del array.
let sumaForEach = 0;
// Recorre el array con el método forEach y suma cada elemento a la variable sumaForEach.
arrayNumeros.forEach(numero => sumaForEach += numero);
// Detiene el temporizador y muestra el tiempo transcurrido desde que se inició el método forEach.
console.timeEnd('Tiempo de forEach');

// Método 'reduce'
// Inicia el temporizador con la etiqueta 'Tiempo de reduce' para medir el tiempo que tarda en completarse el método reduce.
console.time('Tiempo de reduce');
// Usa el método reduce para sumar todos los elementos del array y almacena el resultado en la variable sumaReduce.
const sumaReduce = arrayNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
// Detiene el temporizador y muestra el tiempo transcurrido desde que se inició el método reduce.
console.timeEnd('Tiempo de reduce');


// 4. Medir la latencia de operaciones de entrada y salida

// Simulación de una operación de lectura de un archivo
// Inicia el temporizador con la etiqueta 'Tiempo de lectura de archivo' para medir el tiempo que tarda en completarse la operación de lectura de archivo simulada.
console.time('Tiempo de lectura de archivo');
// Usa setTimeout para simular una operación de lectura de archivo con un tiempo de espera de 100 milisegundos.
setTimeout(() => {
    // Detiene el temporizador y muestra el tiempo transcurrido desde que se inició la simulación de la operación de lectura de archivo.
    console.timeEnd('Tiempo de lectura de archivo');
}, 100);


// 5. Evaluar el tiempo de respuesta de funciones complejas

// Define la función recursiva para calcular el factorial de un número.
function calcularFactorial(n) {
    // Caso base: si n es 0, retorna 1 porque el factorial de 0 es 1.
    if (n === 0) {
        return 1;
    }
    // Llama recursivamente a la función con n-1 y multiplica el resultado por n.
    return n * calcularFactorial(n - 1);
}

// Inicia el temporizador con la etiqueta 'Tiempo de cálculo de factorial' para medir el tiempo que tarda en completarse el cálculo del factorial.
console.time('Tiempo de cálculo de factorial');
// Llama a la función calcularFactorial con el número 20 y almacena el resultado en la variable factorial.
const factorial = calcularFactorial(20);
// Detiene el temporizador y muestra el tiempo transcurrido desde que se inició el cálculo del factorial.
console.timeEnd('Tiempo de cálculo de factorial');


// A partir de aqui no hacer mucho caso, que lo puse porque me cabreaba ver el codigo con la idea de crear el componente, es solo un ejemplo de como se haría
// pero no hace falta verlo, es solo para que no me deje el codigo sin cerrar

// 6. Analizar y mejorar el rendimiento de componentes de una app web

// Ejemplo simulado de un componente de React
// Define una clase simulada de un componente de React que extiende de React.Component.
class MiComponente extends React.Component {
    // ... código del componente ...

    // Define el método render del componente que se encarga de renderizar el contenido del componente.
    render() {
        // Inicia el temporizador con la etiqueta 'Tiempo de renderizado del componente' para medir el tiempo que tarda en completarse el renderizado del componente.
        console.time('Tiempo de renderizado del componente');
        // ... lógica de renderizado del componente ...
        // Detiene el temporizador y muestra el tiempo transcurrido desde que se inició el renderizado del componente.
        console.timeEnd('Tiempo de renderizado del componente');
        // Retorna el JSX del componente que define la estructura y el contenido visual del componente.
        return (
            <div> {/* Añadido JSX válido para corregir el error */}
                <h1>Hola, mundo!</h1> {/* Ejemplo de contenido JSX */}
            </div>
        );
    }
}

// Creación y montaje del componente
// Obtiene el elemento con id 'root' del DOM donde se montará el componente.
const rootElement = document.getElementById('root');
// Renderiza el componente MiComponente en el elemento root utilizando ReactDOM.render.
ReactDOM.render(<MiComponente/>, rootElement);