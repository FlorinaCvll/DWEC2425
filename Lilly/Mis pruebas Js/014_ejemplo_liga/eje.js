let select = ["Barça", "Madrid", "Atleti", "Girona"];
//let select = [];
let contador = 0;
let al = 1;

function nuevo() {
    let array = ["Barça", "Madrid", "Atleti", "Girona"];

    while (select.length < al) {
        let aleatorio = array;
        select.push(aleatorio);

    }
    //document.getElementById("similar").textContent = select.join(" + ").toUpperCase();

}

function nuevo2() {
    al = 1;
    contador = 0;
    select = ["Barça", "Madrid", "Atleti", "Girona"];
    nuevo();
}

function colores() {
    nuevo();

    document.getElementById("Barça").addEventListener("click", function () {
        pinchaColor("Barça");
    });
    document.getElementById("Madrid").addEventListener("click", function () {
        pinchaColor("Madrid");
    });
    document.getElementById("Atleti").addEventListener("click", function () {
        pinchaColor("Atleti");
    });
    document.getElementById("Girona").addEventListener("click", function () {
        pinchaColor("Girona");
    });
}

function pinchaColor(color) {

    if (color == select[contador]) {
        contador++;
    } else {
        alert("HAS FALLADO");
        nuevo2();
    }

    if (contador == select.length) {
        alert("TODO CORRECTO");
        al++;
        nuevo();
        contador = 0;
    }

}

window.onload = function () {
    colores();
}