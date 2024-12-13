function uno() {
    document.body.style.backgroundColor = "antiquewhite";
}

function dos() {
    document.body.style.backgroundColor = "plum";
}

function tres() {

    document.body.style.backgroundColor = "yellowgreen";
}

function cuatro() {

    document.body.style.backgroundColor = "yellow";
}

function cinco() {
    document.body.style.backgroundColor = "greenyellow";
}

function seis() {
    document.body.style.backgroundColor = "blue";
}

function siete() {
    document.body.style.backgroundColor = "red";
}

function ocho() {
    document.body.style.backgroundColor = "orange";
}

function nueve() {
    document.body.style.backgroundColor = "palevioletred";
}

window.onload = function () {
    document.getElementById("uno").addEventListener("mouseover", uno);
    document.getElementById("dos").addEventListener("mouseover", dos);
    document.getElementById("tres").addEventListener("mouseover", tres);
    document.getElementById("cuatro").addEventListener("mouseover", cuatro);
    document.getElementById("cinco").addEventListener("mouseover", cinco);
    document.getElementById("seis").addEventListener("mouseover", seis);
    document.getElementById("siete").addEventListener("mouseover", siete);
    document.getElementById("ocho").addEventListener("mouseover", ocho);
    document.getElementById("nueve").addEventListener("mouseover", nueve);

    document.body.addEventListener("mouseout", function () {
        document.body.style.backgroundColor = "white";
    });
}