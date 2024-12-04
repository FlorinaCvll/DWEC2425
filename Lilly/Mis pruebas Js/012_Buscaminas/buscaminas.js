let tablero = [];
let valorNum = 5;
let g = 0; // bombas a colocar
let bomba = "💣";
let v = 0; // agua numeros
function devolverNumero(minimo, maximo) {
    minimo = parseInt(minimo);
    maximo = parseInt(maximo);
    return parseInt(Math.random() * ((maximo + 1) - minimo) + minimo);
}

function construir() {
    for (let i = 0; i < valorNum; i++) {
        for (let j = 0; j <= valorNum; j++) {
            let div = document.getElementById("ba" + (i + 1) + "_" + j);
            div.textContent = "";
            div.addEventListener("click", function () {
                descubrir(i, j);
            });

        }
    }
}

function ini() {
    for (let i = 0; i < valorNum; i++) {
        tablero[i] = new Array(valorNum);
        for (let j = 0; j <= valorNum; j++) {
            tablero[i][j] = v;
        }
    }
}

function descubrir(i, j) {
    let cell = document.getElementById("ba" + (i + 1) + "_" + j);

    if (tablero[i][j] == v) {
        cell.textContent = v;
    } else if (tablero[i][j] == bomba) {
        cell.textContent = bomba;
        /* alert("El juego se ha termina al descubrir la bomba");
         location.reload();*/
    }

}

function rellenar(n) {
    let colocar = 0;


    while (colocar < n) {
        let posHor = devolverNumero(0, valorNum - 1);
        let posVert = devolverNumero(0, valorNum - 1);
        if (tablero[posVert][posHor] !== bomba) {
            tablero[posVert][posHor] = bomba;
            colocar++;
        }
    }

}

function relleno() {
    rellenar(g);
}

function preg() {
    let h = prompt("¿Cuántas bombas quieres introducir en tu tablero?");
    g = parseInt(h);
    let j = prompt("¿Dime un número que te guste del 1 al 10?");
    v = parseInt(j);

}

window.onload = function () {
    preg();
    ini();
    construir();
    relleno();
}