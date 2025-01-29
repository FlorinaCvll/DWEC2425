// 1. Declaración de variables y asignación de valores iniciales
let nombre = "Juan"; // Se declara la variable 'nombre' y se le asigna el valor "Juan" (string)
let edad = 30; // Se declara la variable 'edad' y se le asigna el valor 30 (number)
let esEstudiante = true; // Se declara la variable 'esEstudiante' y se le asigna el valor true (boolean)

// 2. Verificación de valores de variables
console.log("Nombre:", nombre); // Muestra el valor de la variable 'nombre' en la consola
console.log("Edad:", edad); // Muestra el valor de la variable 'edad' en la consola
console.log("¿Es estudiante?:", esEstudiante); // Muestra el valor de la variable 'esEstudiante' en la consola

// 3. Estructura condicional (if/else)
if (edad >= 18) {
    console.log(nombre + " es mayor de edad."); // Se ejecuta si la condición es verdadera
} else {
    console.log(nombre + " es menor de edad."); // Se ejecuta si la condición es falsa
}

// 4. Función para calcular el área de un rectángulo
function calcularAreaRectangulo(base, altura) {
    console.log("Calculando área de rectángulo con base", base, "y altura", altura); // Seguimiento de la función
    let area = base * altura; // Cálculo del área
    console.log("Área del rectángulo:", area); // Muestra el resultado
    return area; // Retorna el valor del área
}

// 5. Llamada a la función y verificación del resultado
let areaCalculada = calcularAreaRectangulo(10, 5);
console.log("Área calculada:", areaCalculada); // Muestra el valor retornado por la función

// 6. Manejo de errores (try/catch)
try {
    // Intentar acceder a una propiedad inexistente de un objeto
    let objeto = {};
    console.log(objeto.propiedadInexistente); // Esto generará un error
} catch (error) {
    console.error("Error capturado:", error); // Muestra el error en la consola
}

// 7. Eventos del DOM (ejemplo con un botón)
document.addEventListener('DOMContentLoaded', function () {
    console.log("El DOM ha sido cargado."); // Se ejecuta cuando el DOM está listo

    let boton = document.getElementById('miBoton'); // Obtener referencia al botón

    if (boton) { // Verificar si el botón existe
        boton.addEventListener('click', function () {
            console.log("¡Botón clickeado!"); // Se ejecuta cuando se hace clic en el botón
            // Aquí se podría agregar más lógica para manejar el evento
        });
    } else {
        console.log("No se encontró el botón con ID 'miBoton'.")
    }

});