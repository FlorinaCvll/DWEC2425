// Ejemplo completo de console.group en JavaScript

// 1. Agrupar mensajes de depuración relacionados con una función específica
function calcularAreaRectangulo(base, altura) {
    console.group("Depuración de calcularAreaRectangulo"); // Inicia un grupo para los mensajes de esta función.
    console.log("Base:", base); // Muestra la base del rectángulo.
    console.log("Altura:", altura); // Muestra la altura del rectángulo.
    const area = base * altura; // Calcula el área del rectángulo.
    console.log("Área:", area); // Muestra el área calculada.
    console.groupEnd(); // Finaliza el grupo.
    return area; // Devuelve el área calculada.
}

calcularAreaRectangulo(10, 5); // Llama a la función con base 10 y altura 5.

// 2. Organizar la salida de la consola en secciones para mejorar la legibilidad
console.group("Sección 1: Datos del usuario"); // Inicia un grupo para la primera sección.
console.log("Nombre:", "Juan"); // Muestra el nombre del usuario.
console.log("Edad:", 30); // Muestra la edad del usuario.
console.groupEnd(); // Finaliza el grupo.

console.group("Sección 2: Datos del producto"); // Inicia un grupo para la segunda sección.
console.log("Nombre:", "Camiseta"); // Muestra el nombre del producto.
console.log("Precio:", 20); // Muestra el precio del producto.
console.groupEnd(); // Finaliza el grupo.

// 3. Mostrar información jerárquica como la estructura de un objeto complejo
const datosComplejos = {
    usuarios: [
        {nombre: "Ana", edad: 25, ciudad: "Madrid"}, // Primer usuario.
        {nombre: "Carlos", edad: 32, ciudad: "Barcelona"} // Segundo usuario.
    ],
    productos: [
        {nombre: "Camiseta", precio: 20}, // Primer producto.
        {nombre: "Pantalón", precio: 30} // Segundo producto.
    ]
};

console.group("Datos complejos"); // Inicia un grupo para el objeto principal.

console.group("Usuarios"); // Inicia un grupo para el array de usuarios.
console.table(datosComplejos.usuarios); // Muestra la información de los usuarios en una tabla.
console.groupEnd(); // Finaliza el grupo de usuarios.

console.group("Productos"); // Inicia un grupo para el array de productos.
console.table(datosComplejos.productos); // Muestra la información de los productos en una tabla.
console.groupEnd(); // Finaliza el grupo de productos.

console.groupEnd(); // Finaliza el grupo principal.

// 4. Agrupar mensajes de error y advertencias para una revisión más fácil
function validarUsuario(usuario) {
    console.group("Validación de usuario"); // Inicia un grupo para los mensajes de validación.

    if (!usuario.nombre) { // Verifica si el nombre está presente.
        console.warn("Advertencia: El nombre es obligatorio."); // Muestra una advertencia si el nombre falta.
    }

    if (!usuario.edad) { // Verifica si la edad está presente.
        console.warn("Advertencia: La edad es obligatoria."); // Muestra una advertencia si la edad falta.
    }

    if (usuario.edad < 0) { // Verifica si la edad es negativa.
        console.error("Error: La edad no puede ser negativa."); // Muestra un error si la edad es negativa.
    }

    console.groupEnd(); // Finaliza el grupo.
}

validarUsuario({nombre: "", edad: -5}); // Llama a la función con un usuario inválido.

// 5. Documentar el flujo de ejecución del programa
function procesarDatos(datos) {
    console.group("Flujo de ejecución: procesarDatos"); // Inicia un grupo para la función principal.

    console.log("Datos recibidos:", datos); // Muestra los datos recibidos.

    const datosFiltrados = filtrarDatos(datos); // Filtra los datos.
    console.group("Filtrado de datos"); // Inicia un grupo anidado para una función secundaria.
    console.log("Datos filtrados:", datosFiltrados); // Muestra los datos filtrados.
    console.groupEnd(); // Finaliza el grupo anidado.

    const datosTransformados = transformarDatos(datosFiltrados); // Transforma los datos filtrados.
    console.log("Datos transformados:", datosTransformados); // Muestra los datos transformados.

    console.groupEnd(); // Finaliza el grupo principal.
    return datosTransformados; // Devuelve los datos transformados.
}

function filtrarDatos(datos) {
    // Filtra los datos para incluir solo aquellos con valor mayor a 10.
    return datos.filter(dato => dato.valor > 10);
}

function transformarDatos(datos) {
    // Transforma los datos multiplicando el valor por 2.
    return datos.map(dato => ({...dato, valor: dato.valor * 2}));
}

const datos = [{valor: 5}, {valor: 15}, {valor: 25}]; // Datos de ejemplo.
procesarDatos(datos); // Llama a la función con los datos de ejemplo.

// 6. Proporcionar contexto adicional en la salida de la consola
const usuario = {nombre: "Juan", edad: 30}; // Usuario de ejemplo.

console.group("Información del usuario"); // Inicia un grupo con un título descriptivo.
console.log("Nombre:", usuario.nombre); // Muestra el nombre del usuario.
console.log("Edad:", usuario.edad); // Muestra la edad del usuario.
console.log("Email:", usuario.email || "No especificado"); // Muestra un mensaje si el email no está presente.
console.groupEnd(); // Finaliza el grupo.

/*
Explicación de los Métodos y Propósito:
1.  calcularAreaRectangulo(base, altura): Calcula el área de un rectángulo y agrupa los mensajes de depuración relacionados.
2. console.group("Sección 1: Datos del usuario"): Organiza la salida de la consola en secciones para mejorar la legibilidad.
3. console.group("Datos complejos"): Muestra información jerárquica como la estructura de un objeto complejo.
4. validarUsuario(usuario): Agrupa mensajes de error y advertencias para una revisión más fácil.
5. procesarDatos(datos): Documenta el flujo de ejecución del programa, mostrando datos recibidos, filtrados y transformados.
6. console.group("Información del usuario"): Proporciona contexto adicional en la salida de la consola para mejorar la comprensión.*/
