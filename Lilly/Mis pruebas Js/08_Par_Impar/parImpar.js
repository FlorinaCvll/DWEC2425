function boton() {
    let pregunta = prompt("¿Teclea un número del 0 al 100?");

    if (pregunta % 2 == 0) {
        document.getElementById("resultado").textContent = "El número " + pregunta + " es par";
    } else {
        document.getElementById("resultado").textContent = "El número " + pregunta + " es impar";
    }
}


window.onload = function () {
    document.getElementById("boton").addEventListener("click", boton);
}