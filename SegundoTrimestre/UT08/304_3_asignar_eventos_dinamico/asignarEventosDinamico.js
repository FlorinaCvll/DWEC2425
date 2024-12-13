function asignarEventosDinamico() {
    let parrafos = document.querySelectorAll("p");
    for (const parrafo of parrafos) {
        parrafo.addEventListener("click", () => {
            alert(parrafo.textContent)
        });
    }
}

function crearElemento() {
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Cinco";
    document.body.appendChild(nuevoParrafo);
}

window.onload = function () {
    document.getElementById("asignarEventosDinamico").addEventListener("click", asignarEventosDinamico);
    document.getElementById("crearElemento").addEventListener("click", crearElemento);
}