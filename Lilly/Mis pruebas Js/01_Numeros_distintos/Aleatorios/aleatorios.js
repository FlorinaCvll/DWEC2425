function botonUno() {
    for (let i = 0; i < 11; i++) {
        let num = Math.floor(Math.random() * 11);
        document.getElementById("resultado1").textContent = num;
        console.log(num);

    }
}

function botonDos() {
    let array = [];
    let num = Math.floor(Math.random() * 11);
    for (let i = 0; i < 11; i++) {
        array.push(num);
    }
    document.getElementById("resultado2").textContent = array.join("->");

}


window.onload = function () {
    document.getElementById("boton1").addEventListener("click", botonUno);
    document.getElementById("boton2").addEventListener("click", botonDos);
}