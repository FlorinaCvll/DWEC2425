function asignarClase() {
    let parrafo = document.getElementById("parrafo");
    parrafo.className = "remarcado";
    parrafo.classList.add("holi")
    console.log(parrafo.className);
}

window.onload = function () {
    document.getElementById("asignarClase").addEventListener("click", asignarClase);
}