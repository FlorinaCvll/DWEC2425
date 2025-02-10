// 1. Validación de datos de usuario
function validarUsuario(usuario) {
    // Esta función toma un objeto 'usuario' como argumento y verifica si cumple con ciertos criterios.

    if (!usuario.nombre) {
        // Si el usuario no tiene un nombre (es decir, la propiedad 'nombre' no existe o está vacía)...
        console.error("Error: El nombre es obligatorio."); // ...se muestra un mensaje de error en la consola.
        return false; // La función retorna 'false' para indicar que la validación falló.
    }

    if (!usuario.edad) {
        // Si el usuario no tiene una edad...
        console.error("Error: La edad es obligatoria."); // ...se muestra un mensaje de error.
        return false; // La función retorna 'false'.
    }

    if (usuario.edad < 0) {
        // Si la edad del usuario es negativa...
        console.error("Error: La edad no puede ser negativa."); // ...se muestra un mensaje de error.
        return false; // La función retorna 'false'.
    }

    return true; // Si todas las validaciones pasan, la función retorna 'true'.
}

// Ejemplo de uso:
let nuevoUsuario = {nombre: "Ana", edad: -5}; // Se crea un objeto 'nuevoUsuario' con un nombre y una edad negativa.

if (validarUsuario(nuevoUsuario)) {
    // Se llama a la función 'validarUsuario' con el objeto 'nuevoUsuario'.
    console.log("Usuario válido."); // Si la función retorna 'true', se muestra este mensaje.
} else {
    console.log("Usuario no válido."); // Si la función retorna 'false', se muestra este mensaje.
}

// 2. Manejo de errores en funciones
function dividir(a, b) {
    // Esta función toma dos números 'a' y 'b' como argumentos y los divide.

    if (b === 0) {
        // Si el segundo número 'b' es cero (dividir por cero no está permitido)...
        console.error("Error: No se puede dividir por cero."); // ...se muestra un mensaje de error.
        return; // La función retorna 'undefined' (no retorna ningún valor explícitamente).
        // Opcionalmente, podrías lanzar una excepción: throw new Error("No se puede dividir por cero.");
    }

    return a / b; // Si 'b' no es cero, se realiza la división y se retorna el resultado.
}

// Ejemplo de uso:
let resultado = dividir(10, 0); // Se llama a la función 'dividir' con 10 y 0.
console.log("Resultado:", resultado); // Se muestra el resultado en la consola. En este caso, imprimirá "undefined".

// 3. Errores en peticiones HTTP
fetch('https://api.ejemplo.com/datos') // Se realiza una petición HTTP a la URL especificada.
    .then(response => {
        // Esta función se ejecuta cuando se recibe una respuesta de la petición.

        if (!response.ok) {
            // Si la respuesta no es exitosa (códigos de estado HTTP 2xx)...
            console.error("Error en la petición HTTP:", response.status, response.statusText); // ...se muestra un mensaje de error con el código de estado y el texto del estado.
            return; // Se retorna para evitar continuar con el procesamiento de la respuesta.
            // Opcionalmente, podrías lanzar una excepción: throw new Error("Error en la petición HTTP");
        }

        return response.json(); // Si la respuesta es exitosa, se parsea el cuerpo de la respuesta como JSON.
    })
    .then(data => {
        // Esta función se ejecuta cuando se recibe y parsea la respuesta JSON.
        console.log("Datos recibidos:", data); // Se muestran los datos recibidos en la consola.
    })
    .catch(error => {
        // Esta función se ejecuta si ocurre un error durante la petición o el procesamiento de la respuesta.
        console.error("Error en la petición HTTP:", error); // Se muestra el error en la consola.
    });

// 4. Errores en promesas
function obtenerDatos() {
    // Esta función retorna una nueva promesa.
    return new Promise((resolve, reject) => {
        // La promesa se resuelve o rechaza asíncronamente.
        setTimeout(() => {
            reject("Error al obtener los datos."); // Se simula un error y se rechaza la promesa después de 2 segundos.
        }, 2000);
    });
}

// Ejemplo de uso:
obtenerDatos() // Se llama a la función 'obtenerDatos' para obtener la promesa.
    .then(data => {
        // Esta función se ejecuta si la promesa se resuelve.
        console.log("Datos recibidos:", data); // Se muestran los datos recibidos en la consola.
    })
    .catch(error => {
        // Esta función se ejecuta si la promesa se rechaza.
        console.error("Error en la promesa:", error); // Se muestra el error en la consola.
    });

// 5. Gestión de errores en eventos
window.addEventListener('error', (event) => {
    // Este listener de eventos se ejecuta cuando ocurre un error en la página web.
    console.error("Error en el evento:", event.message, event.filename, event.lineno); // Se muestra un mensaje de error con el mensaje, el archivo y el número de línea del error.
});

// 6. Manejo de errores en asincronía (async/await)
async function cargarDatos() {
    // Esta función asíncrona carga datos de una URL.
    try {
        // Se intenta ejecutar el siguiente código.
        let response = await fetch('https://api.ejemplo.com/datos');// Se realiza una petición HTTP y se espera la respuesta.
        if (!response.ok) {
            // Si la respuesta no es exitosa...
            throw new Error("Error en la petición HTTP: " + response.status); // ... Se lanza un error con el código de estado.
        }
        let data = await response.json(); // Se parsea la respuesta como JSON y se espera el resultado.
        console.log("Datos recibidos:", data); // Se muestran los datos recibidos.
    } catch (error) {
        // Si ocurre un error en el bloque 'try'...
        console.error("Error al cargar los datos:", error); // ... Se muestra el error en la consola.
    }
}

// Ejemplo de uso:
// Llamada a la función asíncrona 'cargarDatos' y manejo de la promesa devuelta
cargarDatos()
    .then(resultado => {
        // Esta función se ejecuta si la promesa se resuelve correctamente
        console.log("Datos recibidos:", resultado); // Muestra los datos recibidos en la consola
    })
    .catch(error => {
        // Esta función se ejecuta si la promesa se rechaza
        console.error("Error al cargar los datos:", error); // Muestra el error en la consola
    });