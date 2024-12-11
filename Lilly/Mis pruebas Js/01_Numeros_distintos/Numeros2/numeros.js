function botonUno() {
    let a = [];
    for (let i = 1; i <= 10; i++) {
        a.push(i);
    }
    document.getElementById("resultado1").textContent = a.join("--");

}

function botonDos() {
    let b = [];
    for (let j = 10; j >= 1; j--) {
        b.push(j);
    }
    document.getElementById("resultado2").textContent = b.join("--");

}


window.onload = function () {
    document.getElementById("boton1").addEventListener("click", botonUno);
    document.getElementById("boton2").addEventListener("click", botonDos);

}