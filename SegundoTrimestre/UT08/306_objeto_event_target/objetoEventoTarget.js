function escribeContenido(evento) {
    console.log("Contenido" + evento.target.textContent + "ID: " + evento.target.id);
}

function realizarAccion(tipoAccion) {
    let accionRealizar = tipoAccion.target.id;
    if (accionRealizar === "agnade") {
        console.log("Añadir");
    } else if (accionRealizar === "modifica") {
        console.log("Modificar");
    } else if (accionRealizar === "elimina") {
        console.log("Eliminar");
    }
}

window.onload = function () {
    let parrafos = document.getElementsByTagName("p");
    for (const parrafo of parrafos) {
        parrafo.addEventListener("click", escribeContenido);
    }
    let botones = document.querySelectorAll(".botones");
    for (const boton of botones) {
        boton.addEventListener("click", realizarAccion);
    }
}