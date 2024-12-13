function modificarAtributo() {
    let primerLi = document.querySelectorAll("li:first-of-type");
    primerLi[0].setAttribute("class", "fondo");

}

window.onload = function () {
    document.getElementById("modificarAtributo").addEventListener("click", modificarAtributo);
}