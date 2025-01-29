// Array de números a ordenar
let array = [50, 20, 90, 40, 60, 10, 30, 80, 70]; // Declaración de un array con números desordenados.

// Función para generar y mostrar las barras en pantalla
function displayArray(arr) {
    const container = document.getElementById('array-container'); // Obtiene el elemento con id 'array-container'.
    container.innerHTML = ''; // Limpia el contenido del contenedor antes de redibujar.
    arr.forEach(value => {
        const bar = document.createElement('div'); // Crea un nuevo elemento 'div' para cada valor del array.
        bar.classList.add('bar'); // Añade la clase 'bar' al elemento 'div'.
        bar.style.height = `${value}px`; // Establece la altura de la barra según el valor del array.
        container.appendChild(bar); // Añade la barra al contenedor.
    });

    // Mostrar el array en consola como tabla
    console.table(arr); // Muestra el array en la consola en formato de tabla.
}

// Función para realizar el algoritmo de ordenamiento de burbuja
function bubbleSort(arr) {
    let n = arr.length; // Obtiene la longitud del array.
    let i = 0; // Inicializa el índice i a 0.
    let j = 0; // Inicializa el índice j a 0.
    let interval = setInterval(() => { // Establece un intervalo para ejecutar el código repetidamente.
        if (i < n) { // Verifica si i es menor que la longitud del array.
            if (j < n - i - 1) { // Verifica si j es menor que n - i - 1.
                // Comparar dos elementos adyacentes
                if (arr[j] > arr[j + 1]) { // Compara dos elementos adyacentes.
                    // Intercambiar si están en el orden incorrecto
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Intercambia los elementos si están en el orden incorrecto.
                }
                // Actualizar la visualización después de cada comparación
                displayArray(arr); // Actualiza la visualización del array.
                j++; // Incrementa el índice j.
            } else {
                i++; // Incrementa el índice i.
                j = 0; // Reinicia el índice j a 0.
            }
        } else {
            clearInterval(interval); // Detiene el intervalo cuando termina el ordenamiento.
        }
    }, 500); // 500ms de intervalo para hacer visible el proceso.
}

// Mostrar el array inicial
displayArray(array); // Muestra el array inicial en la pantalla.

// Asignar el evento al botón para iniciar el ordenamiento
document.getElementById('startButton').addEventListener('click', () => {
    bubbleSort(array); // Llama a la función bubbleSort cuando se hace clic en el botón.
});