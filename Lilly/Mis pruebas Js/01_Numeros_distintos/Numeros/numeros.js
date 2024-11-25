function botonUno() {
    document.getElementById("resultado1").textContent = "Resultado en el log";
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function botonDos() {
    document.getElementById("resultado2").textContent = "Resultado en el log";
    for (let j = 10; j >= 1; j--) {
        console.log(j);
    }
}

window.onload = function () {
    document.getElementById("boton1").addEventListener("click", botonUno);
    document.getElementById("boton2").addEventListener("click", botonDos);

}