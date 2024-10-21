function llamadaConLog() {
    escribe("Ik", "log");
}

function llamadaConError() {
    escribe("Hou", "error");
}

function llamadaConAlert() {
    escribe("Van", "alert");
}

function llamadaParametroNo() {
    escribe("Je", "cualquier");
}

function escribe(dato, opcion) {
    if (opcion == "log") {
        console.log(dato);
    } else if (opcion == "error") {
        console.error(dato);
    } else if (opcion == "alert") {
        alert(dato);
    } else {
        alert("ERROR: el parámetro introducido no es válido");
    }
}


window.onload = function () {
    document.getElementById("llamarLog").addEventListener("click", llamadaConLog);
    document.getElementById("llamarError").addEventListener("click", llamadaConError);
    document.getElementById("llamarAlert").addEventListener("click", llamadaConAlert);
    document.getElementById("llamarParametroNo").addEventListener("click", llamadaParametroNo);
}