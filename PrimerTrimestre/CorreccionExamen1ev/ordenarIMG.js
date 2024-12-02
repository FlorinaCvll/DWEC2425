let tablero = [undefined, "android", "fuchsia", "ios"];
let vidas = 1;
let imgUNo = "";
let imgUDos = "";


function cambiarIMGs(elemento) {
    let valorRecuperado = elemento.target.id;
    alert("Has pulsado la imagen con id: " + valorRecuperado);
}

window.onload = function () {
    let imgs = document.getElementsByClassName("img");
    for (let i = 1; i <= imgs.length; i++) {
        let idIMG = "img" + i;
        document.getElementById(idIMG).addEventListener("click", cambiarIMGs)
    }
}