//7.1
function mensajes() {
    const mensaje = prompt("¿Que mensaje quieres dar?");

    const mostrar = (callback) => {
        callback(mensaje);
    }


    const respuesta = prompt("En que formato lo quieres expresar (log, error, alert, confirm, prompt):");

    switch (respuesta) {
        case "log":
            const logMen = (mensaje) => console.log(mensaje);
            mostrar(logMen);
            break;
        case "error":
            const errorMen = (mensaje) => console.error(mensaje);
            mostrar(errorMen);
            break;
        case "alert":
            const alertMen = (mensaje) => alert(mensaje);
            mostrar(alertMen);
            break;
        case "prompt":
            const promptMen = (mensaje) => prompt(mensaje);
            mostrar(promptMen);
            break;
        case "confirm":
            const confirmMen = (mensaje) => confirm(mensaje);
            mostrar(confirmMen);
            break;
        default :
            alert("No has introducido lo correcto");
            break;
    }
}

// 7.2
function cuentas() {

    const a = parseFloat(prompt("Escribe un valor:"));
    const b = parseFloat(prompt("Escribe otro valor:"));


    function suma(a, b) {
        return a + b;
    }

    function resta(a, b) {
        return a - b;
    }

    function multiplicacion(a, b) {
        return a * b;
    }

    function division(a, b) {
        return a / b;
    }

    const opcion = prompt("Escribe la opcion(suma, resta , division, multiiplicacion):");


    switch (opcion) {
        case "suma":
            console.log("Suma: " + suma(a, b));
            break;
        case "resta":
            console.log("Resta: " + resta(a, b));
            break;
        case "multiplicacion":
            console.log("Multiplicacion : " + multiplicacion(a, b));
            break;
        case "division":
            console.log("Division: " + division(a, b));
            break;
        default:
            console.log("Error");
    }
}

window.onload = function () {
    document.getElementById("mensajes").addEventListener("click", mensajes);
    document.getElementById("cuentas").addEventListener("click", cuentas);
}
