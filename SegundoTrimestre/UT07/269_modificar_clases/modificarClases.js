function aniadir() {
    document.getElementById("destinoCambios").classList.add("rojo");
}

function borrar() {
    document.getElementById("destinoCambios").classList.remove("rojo");
}

function compruebaContiene() {
    let valor = document.getElementById("destinoCambios").classList.contains("azul");
    console.log(valor);
}

function reemplaza() {
    document.getElementById("destinoCambios").classList.replace("azul", "rojo");
}

function cambiar() {
    document.getElementById("destinoCambios").classList.toggle("rojo");
    document.getElementById("destinoDos").classList.toggle("azulDos");
}

window.onload = function () {
    document.getElementById("aniadir").addEventListener("click", aniadir);
    document.getElementById("borrar").addEventListener("click", borrar);
    document.getElementById("cambiar").addEventListener("click", cambiar);
    document.getElementById("compruebaContiene").addEventListener("click", compruebaContiene);
    document.getElementById("reemplaza").addEventListener("click", reemplaza);
}