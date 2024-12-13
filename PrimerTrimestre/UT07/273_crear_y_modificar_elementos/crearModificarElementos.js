function aniadirHijo() {
    let capa = document.getElementById("principal");
    let nuevoP = document.createElement("p");
    let contenido = document.createTextNode("Soy el nuevo párrafo");
    nuevoP.appendChild(contenido);
    capa.appendChild(nuevoP);
}

function anidirPosicion() {
    let capa = document.getElementById("principal");
    let nuevoP = document.createElement("p");
    let contenido = document.createTextNode("Soy el nuevo párrafo");
    nuevoP.appendChild(contenido);
    let pPosterior = document.querySelector("#principal p:nth-of-type(2)")[0];
    capa.insertBefore(nuevoP, pPosterior);
}


window.onload = function () {
    document.getElementById("anidirHijo").addEventListener("click", aniadirHijo);
    document.getElementById("anidirPosicion").addEventListener("click", anidirPosicion);
    document.getElementById("reemplazarElemento").addEventListener("click", reemplazarElemento);
    document.getElementById("eliminarElemento").addEventListener("click", eliminarElemento);
}