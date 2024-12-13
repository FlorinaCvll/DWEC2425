function cargarHijos() {
    let capa = document.getElementById("principal");
    let hijos = capa.children;
    console.log("Número de hijos: " + hijos.length);

    let nuevoP = document.createElement("p");
    nuevoP.textContent = "Soy el nuevo párrafo";
    capa.appendChild(nuevoP);
    console.log("Número de hijos: " + hijos.length);
}


window.onload = function () {
    document.getElementById("cargarHijos").addEventListener("click", cargarHijos);
}