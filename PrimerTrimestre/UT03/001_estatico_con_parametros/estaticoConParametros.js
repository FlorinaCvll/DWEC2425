function cambiarColorBarraLarga() {
    alert("...Cambiamos el color de la barra larga");

    document.getElementById("barraLarga").classList.toggle("colorMarronBarraLarga");
}

function cambiarColorCuadrado(id) {
    alert("...Cambiamos el color de la cuadrado" + id);
    document.getElementById("cuadrado" + id).classList.toggle("cuadradoColorAmarillo");
}

window.onload = function () {
    document.getElementById("barraLarga").addEventListener("click", cambiarColorBarraLarga);
    document.getElementById("cuadrado1").addEventListener("click", function () {
        cambiarColorCuadrado("1")
    });
    document.getElementById("cuadrado2").addEventListener("click", function () {
        cambiarColorCuadrado("2")
    });
}