let tablero = [undefined, "android", "fuchsia", "ios"];
let vidas = 1;
let imgUNo = "";
let imgUDos = "";

function comprobarColocados() {
    let colocados = true;
    for (let i = 1; i <= 9; i++) {
        let alt = document.getElementById("img" + i).getAttribute("alt");
        let src = document.getElementById("img" + i).getAttribute("src");
        if (alt !== src) {
            return false;
        }
    }
    if (colocados) {
        alert("¡Enhorabuena! Has completado el puzzle");
        let imgs = document.getElementsByClassName("img");
        for (let i = 1; i <= imgs.length; i++) {
            document.getElementById("img" + 1).classList.add("completado");
        }
    }
}

function comprobarVidas(imgUnoLocal, imgDosLocal) {
    let pierdeVida = true;
    let altUno = document.getElementById(imgUnoLocal).getAttribute("alt");
    let srcUno = document.getElementById(imgUnoLocal).getAttribute("src");
    let altDos = document.getElementById(imgDosLocal).getAttribute("alt");
    let srcDos = document.getElementById(imgDosLocal).getAttribute("src");
}

function cambiarIMGs(elemento) {
    // let valorRecuperado = elemento.target.id;
    /*alert("Has pulsado la imagen con id: " + valorRecuperado);*/
    if (imgUNo === "") {
        imgUNo = elemento.target.id;
    } else {
        imgUDos = elemento.target.id;
        let rutaIMGUno = document.getElementById(imgUNo).getAttribute("src");
        let rutaIMGDos = document.getElementById(imgUDos).getAttribute("src");
        document.getElementById(imgUNo).setAttribute("src", rutaIMGDos);
        document.getElementById(imgUDos).setAttribute("src", rutaIMGUno);
        comprobarVidas(imgUNo, imgUDos);
        imgUNo = ""; /* se tiene que quedar vacío */
        imgUDos = ""; /* se tiene que quedar vacío */
        comprobarColocados();
    }
}

function devolverNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function cargarIMGs() {
    let numIMG = devolverNum(1, 3);
    let img = document.getElementsByClassName("img");
    for (let i = 1; i <= img.length; i++) {
        let valorIMG = "./Z_imagenes_ENTREGAR/" + tablero[numIMG] + "_" + i + ".png";
        document.getElementById("img" + i).setAttribute("src", valorIMG);
        document.getElementById("img" + i).setAttribute("alt", valorIMG);
    }
}

function descolocarIMG() {
    for (let i = 1; i <= 100; i++) {
        let imagenUNODescolocada = "img" + devolverNum(1, 9);
        let imagenDOSDescolocada = "img" + devolverNum(1, 9);
        let rutaIMGUno = document.getElementById(imagenUNODescolocada).getAttribute("src");
        let rutaIMGDos = document.getElementById(imagenDOSDescolocada).getAttribute("src")
        document.getElementById(imagenUNODescolocada).setAttribute("src", rutaIMGDos);
        document.getElementById(imagenDOSDescolocada).setAttribute("src", rutaIMGUno);
    }
}

window.onload = function () {
    let imgs = document.getElementsByClassName("img");
    for (let i = 1; i <= imgs.length; i++) {
        let idIMG = "img" + i;
        document.getElementById(idIMG).addEventListener("click", cambiarIMGs);
    }
    cargarIMGs();
    descolocarIMG();
}