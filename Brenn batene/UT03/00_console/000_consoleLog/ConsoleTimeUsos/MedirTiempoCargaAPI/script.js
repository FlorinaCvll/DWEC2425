// Función para medir el tiempo de carga de datos desde una API
async function loadDataFromAPI() {
    console.time("API Load Time");  // Inicia el temporizador con la etiqueta 'API Load Time' para medir el tiempo de carga de la API

    try {
        // Realizar la solicitud a la API pública (ejemplo: JSONPlaceholder)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');  // Usa fetch para hacer una solicitud HTTP GET a la URL especificada
        const data = await response.json();  // Convierte la respuesta en formato JSON

        // Detener el temporizador y mostrar el tiempo de carga
        console.timeEnd("API Load Time");  // Detiene el temporizador y muestra el tiempo transcurrido desde que se inició

        // Mostrar el tiempo de carga en el HTML
        document.getElementById('apiResponseTime').textContent = `Tiempo de carga: ${((performance.now() - performance.timeStamp) / 1000).toFixed(2)} segundos`;  // Calcula y muestra el tiempo de carga en segundos en el elemento con id 'apiResponseTime'

        // Mostrar los datos obtenidos en el HTML
        document.getElementById('apiData').innerHTML = JSON.stringify(data.slice(0, 5), null, 2);  // Convierte los primeros 5 elementos del array de datos a una cadena JSON y los muestra en el elemento con id 'apiData'

        // Mostrar los datos en consola como tabla
        console.table(data);  // Muestra los datos en la consola del navegador en formato de tabla
    } catch (error) {
        console.error('Error al cargar los datos desde la API:', error);  // Muestra un mensaje de error en la consola si ocurre un error durante la solicitud a la API
    }
}

// Asignar el evento al botón para cargar los datos
document.getElementById('loadDataButton').addEventListener('click', loadDataFromAPI);  // Asigna un evento 'click' al botón con id 'loadDataButton' para que ejecute la función loadDataFromAPI cuando se haga clic en él

// Explicación de los métodos usados:

// 1. console.time(label): Inicia un temporizador con la etiqueta especificada para medir el tiempo transcurrido.
// 2. fetch(url): Realiza una solicitud HTTP a la URL especificada y devuelve una promesa que se resuelve con la respuesta.
// 3. response.json(): Convierte la respuesta de la solicitud en un objeto JSON.
// 4. console.timeEnd(label): Detiene el temporizador iniciado con console.time y muestra el tiempo transcurrido.
// 5. document.getElementById(id): Obtiene el elemento del DOM con el id especificado.
// 6. element.textContent: Establece o devuelve el contenido textual de un elemento.
// 7. performance.now(): Devuelve un DOMHighResTimeStamp, que es un número de precisión de milisegundos que representa el tiempo transcurrido desde que se inició la navegación.
// 8. JSON.stringify(value, replacer, space): Convierte un valor de JavaScript en una cadena JSON.
// 9. console.table(data): Muestra los datos en la consola del navegador en formato de tabla.
// 10. element.addEventListener(event, function): Asigna un evento al elemento especificado para que ejecute la función cuando ocurra el evento.
