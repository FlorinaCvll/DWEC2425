function cargarColecciones() {
    let principal = document.getElementById("principal");
    let listaUno = document.getElementsByClassName("especial");
    let listaDos = document.querySelectorAll(".especial");
    console.log("getElementsByClassName: " + listaUno.length);
    console.log("querySelectorAll: " + listaDos.length);

    principal.removeChild(principal.children[0]);
    console.log("--------------------------------");
    console.log("getElementsByClassName: " + listaUno.length);
    console.log("querySelectorAll: " + listaDos.length);
}

window.onload = function () {
    document.getElementById("cargarColecciones").addEventListener("click", cargarColecciones);
}