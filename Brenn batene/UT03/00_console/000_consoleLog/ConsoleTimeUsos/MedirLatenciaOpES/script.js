// Función para simular una solicitud de red (E/S)
function simulateNetworkRequest() {
    console.time("NetworkRequest");  // Comienza a medir el tiempo de la solicitud

    // Simulando una solicitud con un retraso artificial (como si fuera una llamada HTTP)
    setTimeout(() => {
        console.timeEnd("NetworkRequest");  // Termina la medición del tiempo de la solicitud

        // Mostrar el resultado de latencia en la interfaz de usuario
        document.getElementById('latencyTime').textContent = `Latencia: La solicitud tomó aproximadamente X milisegundos`;
    }, Math.random() * 2000);  // Simula un tiempo de respuesta aleatorio (hasta 2 segundos)
}

// Evento para ejecutar la simulación cuando el botón es presionado
document.getElementById('simulateRequestButton').addEventListener('click', simulateNetworkRequest);


/* Métodos usados y su propósito
1. console.time(label) y console.timeEnd(label): Estos métodos se utilizan para medir el tiempo transcurrido entre dos puntos en el código. console.time inicia el temporizador y console.timeEnd lo detiene y muestra el tiempo transcurrido en la consola. Son útiles para medir el rendimiento de bloques de código.
2. setTimeout(function, delay): Este método ejecuta una función después de un retraso especificado en milisegundos. En este caso, se usa para simular una solicitud de red con un tiempo de respuesta aleatorio.
3. Math.random(): Genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo). Multiplicado por 2000, proporciona un retraso aleatorio entre 0 y 2000 milisegundos.
4. document.getElementById(id): Devuelve una referencia al primer objeto con el valor del atributo id especificado. Se usa para acceder y manipular elementos del DOM.
5. addEventListener(event, function):Añade un evento de escucha a un elemento, en este caso, para ejecutar una función cuando se hace clic en un botón.
*
* */