// Generar un array de números aleatorios para ordenar
function generateRandomArray(size) {
    const arr = []; // Crear un array vacío
    for (let i = 0; i < size; i++) { // Iterar desde 0 hasta el tamaño especificado
        arr.push(Math.floor(Math.random() * 1000)); // Generar un número aleatorio entre 0 y 999 y añadirlo al array
    }
    return arr; // Devolver el array generado
}

// Algoritmo de Bubble Sort
function bubbleSort(arr) {
    const n = arr.length; // Obtener la longitud del array
    for (let i = 0; i < n - 1; i++) { // Iterar sobre el array
        for (let j = 0; j < n - i - 1; j++) { // Iterar sobre el array desde el principio hasta el último elemento no ordenado
            if (arr[j] > arr[j + 1]) { // Si el elemento actual es mayor que el siguiente
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Intercambiar los elementos
            }
        }
    }
    return arr; // Devolver el array ordenado
}

// Algoritmo de Insertion Sort
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) { // Iterar desde el segundo elemento hasta el final del array
        let key = arr[i]; // Guardar el elemento actual en una variable
        let j = i - 1; // Inicializar j con el índice del elemento anterior
        while (j >= 0 && arr[j] > key) { // Mientras j sea mayor o igual a 0 y el elemento en j sea mayor que key
            arr[j + 1] = arr[j]; // Mover el elemento en j una posición a la derecha
            j--; // Decrementar j
        }
        arr[j + 1] = key; // Insertar el elemento en su posición correcta
    }
    return arr; // Devolver el array ordenado
}

// Algoritmo de Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) return arr; // Caso base: si el array tiene 1 o menos elementos, devolverlo
    const pivot = arr[arr.length - 1]; // Elegir el último elemento como pivote
    const left = []; // Crear un array para los elementos menores que el pivote
    const right = []; // Crear un array para los elementos mayores o iguales al pivote
    for (let i = 0; i < arr.length - 1; i++) { // Iterar sobre el array excepto el pivote
        if (arr[i] < pivot) left.push(arr[i]); // Si el elemento es menor que el pivote, añadirlo al array left
        else right.push(arr[i]); // Si el elemento es mayor o igual al pivote, añadirlo al array right
    }
    return [...quickSort(left), pivot, ...quickSort(right)]; // Recursión y combinación de los arrays ordenados
}

// Función para actualizar los resultados en el HTML
function updateResults(bubbleTime, insertionTime, quickTime) {
    document.getElementById('bubbleSortTime').textContent = `Bubble Sort: ${bubbleTime} ms`; // Actualizar el tiempo de Bubble Sort
    document.getElementById('insertionSortTime').textContent = `Insertion Sort: ${insertionTime} ms`; // Actualizar el tiempo de Insertion Sort
    document.getElementById('quickSortTime').textContent = `Quick Sort: ${quickTime} ms`; // Actualizar el tiempo de Quick Sort
}

// Función principal para comparar los algoritmos
function compareSortingAlgorithms() {
    const array = generateRandomArray(1000);  // Generar un array de 1000 elementos

    // Comparar Bubble Sort
    const bubbleSortArray = [...array]; // Crear una copia del array original
    console.time("Bubble Sort"); // Iniciar el temporizador para Bubble Sort
    bubbleSort(bubbleSortArray); // Ordenar el array usando Bubble Sort
    const bubbleTime = console.timeEnd("Bubble Sort"); // Detener el temporizador y guardar el tiempo transcurrido

    // Comparar Insertion Sort
    const insertionSortArray = [...array]; // Crear una copia del array original
    console.time("Insertion Sort"); // Iniciar el temporizador para Insertion Sort
    insertionSort(insertionSortArray); // Ordenar el array usando Insertion Sort
    const insertionTime = console.timeEnd("Insertion Sort"); // Detener el temporizador y guardar el tiempo transcurrido

    // Comparar Quick Sort
    const quickSortArray = [...array]; // Crear una copia del array original
    console.time("Quick Sort"); // Iniciar el temporizador para Quick Sort
    quickSort(quickSortArray); // Ordenar el array usando Quick Sort
    const quickTime = console.timeEnd("Quick Sort"); // Detener el temporizador y guardar el tiempo transcurrido

    // Mostrar los tiempos en el HTML
    updateResults(bubbleTime, insertionTime, quickTime); // Llamar a la función para actualizar los resultados en el HTML
}

// Evento para ejecutar la comparación cuando el botón es presionado
document.getElementById('sortButton').addEventListener('click', compareSortingAlgorithms); // Añadir un evento al botón para ejecutar la comparación cuando se presiona

/*
Explicación de los Métodos y Propósito:

1. generateRandomArray(size): Genera un array de números aleatorios de tamaño `size`. Utiliza `Math.random()` para generar números aleatorios y `Math.floor()` para redondearlos.
2. bubbleSort(arr): Implementa el algoritmo de ordenación Bubble Sort. Compara y intercambia elementos adyacentes si están en el orden incorrecto.
3. insertionSort(arr): Implementa el algoritmo de ordenación Insertion Sort. Inserta cada elemento en su posición correcta en una lista ordenada.
4. quickSort(arr): Implementa el algoritmo de ordenación Quick Sort. Utiliza recursión y un pivote para dividir y ordenar el array.
5. updateResults(bubbleTime, insertionTime, quickTime): Actualiza los resultados de los tiempos de ordenación en el HTML.
6. compareSortingAlgorithms(): Función principal que genera un array aleatorio, ejecuta los algoritmos de ordenación y mide el tiempo de ejecución usando `console.time` y `console.timeEnd`.
7. document.getElementById('sortButton').addEventListener('click', compareSortingAlgorithms): Añade un evento al botón para ejecutar la comparación cuando se presiona.
*/