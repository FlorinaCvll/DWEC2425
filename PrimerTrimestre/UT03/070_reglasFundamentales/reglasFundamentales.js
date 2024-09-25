function reglas() {
    alert("Reglas fundamentales de JS");

    var x = 8;
    console.log("Esta es la variable creada: " + x)
}

window.onload = function () {
    document.getElementById("botonReglas").addEventListener("click", reglas);
}