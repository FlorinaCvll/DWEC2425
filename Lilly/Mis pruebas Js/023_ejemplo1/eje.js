let select = [];
let contador = 0;
let al = 1;
let res1;
let res2;
let res3;
let res4;

function nuevo() {
    res1 = document.getElementById("respuesta1").value;
    res2 = document.getElementById("respuesta2").value;
    res3 = document.getElementById("respuesta3").value;
    res4 = document.getElementById("respuesta4").value;

    document.getElementById("Barça").textContent = res1;
    document.getElementById("Madrid").textContent = res2;
    document.getElementById("Atleti").textContent = res3;
    document.getElementById("Girona").textContent = res4;
    res1.split('');
    res2.split('');
    res3.split('');
    res4.split('');

    let array = [res1, res2, res3, res4];

    while (select.length < al) {
        let aleatorio = array[Math.floor(Math.random() * array.length)];
        select.push(aleatorio);


    }
    document.getElementById("similar").textContent = select.join(" , ").toUpperCase();

}

function nuevo2() {
    al = 1;
    contador = 0;
    select = [];
    nuevo();
}

function colores() {
    nuevo();

    document.getElementById("Barça").addEventListener("click", function () {
        pinchaColor(res1);
    });
    document.getElementById("Madrid").addEventListener("click", function () {
        pinchaColor(res2);
    });
    document.getElementById("Atleti").addEventListener("click", function () {
        pinchaColor(res3);
    });
    document.getElementById("Girona").addEventListener("click", function () {
        pinchaColor(res4);
    });
}

function pinchaColor(color) {

    if (color == select[contador]) {
        contador++;
    } else {
        nuevo2();
    }

    if (contador == select.length) {
        al++;
        nuevo();
        contador = 0;
    }

}

window.onload = function () {
    document.getElementById("general").style.display = "none";
    document.getElementById("enviar").addEventListener("click", function () {
        document.getElementById("form").style.display = "none";
        document.getElementById("general").style.display = "";
        colores();
    });
}