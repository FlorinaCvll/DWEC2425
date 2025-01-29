// 1. Almacenar y manipular datos de formularios
const formulario = document.getElementById("miFormulario"); // Obtiene el elemento del formulario con el ID "miFormulario".

if (formulario) { // Verifica si el formulario existe.
    formulario.addEventListener("submit", function (evento) { // Agrega un evento de escucha para el evento "submit" del formulario.
        evento.preventDefault(); // Evita que el formulario se envíe de forma predeterminada.

        const nombre = this.nombre.value; // Obtiene el valor del campo de entrada "nombre".
        const edad = parseInt(this.edad.value); // Obtiene el valor del campo de entrada "edad" y lo convierte a un número entero.
        const email = this.email.value; // Obtiene el valor del campo de entrada "email".
        const aceptoTerminos = this.terminos.checked; // Obtiene el valor del checkbox "terminos" (true si está marcado, false si no).

        console.log("Nombre:", nombre, typeof nombre); // Muestra el nombre y su tipo de dato (string).
        console.log("Edad:", edad, typeof edad); // Muestra la edad y su tipo de dato (number).
        console.log("Email:", email, typeof email); // Muestra el email y su tipo de dato (string).
        console.log("Acepta términos:", aceptoTerminos, typeof aceptoTerminos); // Muestra si aceptó los términos y su tipo de dato (boolean).

        // ... Aquí podrías continuar con la lógica para procesar los datos del formulario ...
    });
} else {
    console.warn("Advertencia: No se encontró el formulario con ID 'miFormulario'."); // Muestra una advertencia si no se encuentra el formulario.
}

// 2. Realizar cálculos y mostrar resultados al usuario
function calcularAreaRectangulo(base, altura) { // Define una función para calcular el área de un rectángulo.
    console.log("Base:", base, typeof base); // Muestra la base y su tipo de dato (number).
    console.log("Altura:", altura, typeof altura); // Muestra la altura y su tipo de dato (number).

    const area = base * altura; // Calcula el área multiplicando la base por la altura.
    console.log("Área:", area, typeof area); // Muestra el área calculada y su tipo de dato (number).

    return area; // Retorna el área calculada.
}

const areaCalculada = calcularAreaRectangulo(10, 5); // Llama a la función con base 10 y altura 5, y almacena el resultado en "areaCalculada".
console.log("El área calculada es:", areaCalculada); // Muestra el área calculada.

// 3. Manejar respuestas de APIs
fetch('https://rickandmortyapi.com/api/character') // Realiza una petición HTTP GET a la API de Rick and Morty.
    .then(response => response.json()) // Convierte la respuesta a formato JSON.
    .then(data => { // Maneja los datos recibidos de la API.
        console.log("Datos de la API:", data, typeof data); // Muestra los datos y su tipo de dato (object).
        console.log("Primer personaje:", data.results[0], typeof data.results[0]); // Muestra el primer personaje y su tipo de dato (object).
    });

// 4. Implementar lógica de control de flujo en app web
function mostrarMensaje(usuarioLogueado) { // Define una función para mostrar un mensaje basado en el estado de inicio de sesión del usuario.
    console.log("Usuario logueado:", usuarioLogueado, typeof usuarioLogueado); // Muestra si el usuario está logueado y su tipo de dato (boolean).

    if (usuarioLogueado) { // Verifica si el usuario está logueado.
        console.log("Bienvenido, usuario."); // Muestra un mensaje de bienvenida si el usuario está logueado.
    } else {
        console.log("Por favor, inicia sesión."); // Muestra un mensaje solicitando iniciar sesión si el usuario no está logueado.
    }
}

mostrarMensaje(true); // Llama a la función con el valor true, indicando que el usuario está logueado.

// 5. Almacenar y manipular datos en arrays y objetos
const productos = [ // Define un array de objetos, cada uno representando un producto.
    {nombre: "Camiseta", precio: 20}, // Primer producto con nombre "Camiseta" y precio 20.
    {nombre: "Pantalón", precio: 30} // Segundo producto con nombre "Pantalón" y precio 30.
];

console.log("Array de productos:", productos, typeof productos); // Muestra el array de productos y su tipo de dato (object).
console.log("Primer producto:", productos[0], typeof productos[0]); // Muestra el primer producto y su tipo de dato (object).

// 6. Crear y utilizar fechas para aplicaciones de calendario
const fechaActual = new Date(); // Crea un objeto de fecha con la fecha y hora actuales.

console.log("Fecha actual:", fechaActual, typeof fechaActual); // Muestra la fecha actual y su tipo de dato (object).
console.log("Año:", fechaActual.getFullYear(), typeof fechaActual.getFullYear()); // Muestra el año actual y su tipo de dato (number).
console.log("Mes:", fechaActual.getMonth() + 1, typeof fechaActual.getMonth()); // Muestra el mes actual (0-11) y su tipo de dato (number).
console.log("Día:", fechaActual.getDate(), typeof fechaActual.getDate()); // Muestra el día actual y su tipo de dato (number).