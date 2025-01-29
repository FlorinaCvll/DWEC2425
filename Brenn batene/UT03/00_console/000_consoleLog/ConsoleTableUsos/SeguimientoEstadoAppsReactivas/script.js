// Estado inicial
let count = 0; // Declara una variable llamada `count` y la inicializa con el valor 0.

// Mostrar el estado inicial en la consola como tabla
console.table({count}); // Muestra el valor inicial de `count` en la consola del navegador en formato de tabla.

// Función para incrementar el contador
function increment() { // Declara una función llamada `increment` que no recibe parámetros.
    count += 1; // Incrementa el valor de `count` en 1.
    console.table({count});  // Muestra el valor actualizado de `count` en la consola del navegador en formato de tabla.
    document.getElementById('counter').textContent = `Contador: ${count}`;
    // Actualiza el contenido de texto del elemento HTML con id `counter` para mostrar el valor actualizado de `count`.
}

// Añadir un evento de clic al botón de incremento
document.getElementById('incrementButton').addEventListener('click', increment);
// Selecciona el elemento HTML con id `incrementButton`
//y añade un evento de escucha para el evento `click`,
// que ejecuta la función `increment` cuando se hace clic en el botón.