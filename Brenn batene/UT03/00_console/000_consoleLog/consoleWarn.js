// 1. Validación de datos de usuario
function validarUsuario(usuario) {
    // Esta función verifica si los datos del usuario cumplen con ciertos criterios.

    if (!usuario.nombre) {
        console.warn("Advertencia: El nombre es obligatorio.");
    }

    if (!usuario.edad) {
        console.warn("Advertencia: La edad es obligatoria.");
    }

    if (usuario.edad < 0) {
        console.warn("Advertencia: La edad no puede ser negativa.");
    }

    if (usuario.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario.email)) {
        console.warn("Advertencia: El formato del email no es válido.");
    }

    return true; // Si todas las validaciones opcionales pasan, se retorna 'true'.
}

// Ejemplo de uso:
let nuevoUsuario = {nombre: "Juan", edad: -5, email: "juan.perez@"};
validarUsuario(nuevoUsuario);

// 2. Advertencias sobre deprecaciones
function funcionAntigua() {
    console.warn("Advertencia: Esta función está en desuso y podría eliminarse en futuras versiones. Utilice 'funcionNueva()' en su lugar.");
    // ... código de la función ...
}

funcionAntigua();

// 3. Validaciones de formularios
const formulario = document.getElementById("miFormulario");

if (formulario) { // Verifica si el formulario existe en el DOM
    formulario.addEventListener("submit", function (evento) {
        if (!this.nombre.value) {
            console.warn("Advertencia: El campo nombre es obligatorio.");
            evento.preventDefault(); // Evita que se envíe el formulario.
        }

        if (!this.terminos.checked) {
            console.warn("Advertencia: Debe aceptar los términos y condiciones.");
            evento.preventDefault();
        }
    });
} else {
    console.warn("Advertencia: No se encontró el formulario con ID 'miFormulario'.");
}


// 4. Condiciones lógicas
let usuarioLogueado = false;
let nivelAcceso = "invitado";

if (!usuarioLogueado) {
    console.warn("Advertencia: El usuario no está logueado. Algunas funciones pueden estar limitadas.");
}

if (nivelAcceso === "invitado") {
    console.warn("Advertencia: El usuario tiene nivel de acceso 'invitado'. Algunas funcionalidades avanzadas no están disponibles.");
}


// 5. Seguimiento de eventos
const boton = document.getElementById("miBoton");

if (boton) {
    boton.addEventListener("click", function () {
        console.warn("Evento: Se ha hecho clic en el botón.");
    });
} else {
    console.warn("Advertencia: No se encontró el botón con ID 'miBoton'.");
}


// 6. Revisiones de seguridad
const sitioWebSeguro = false; // Simula una comprobación de seguridad

if (!sitioWebSeguro) {
    console.warn("Advertencia de seguridad: El sitio web no es seguro. Podría haber riesgos.");
}



