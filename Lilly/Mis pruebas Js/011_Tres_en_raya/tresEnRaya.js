let jugador1;
let jugador2;
let turno = jugador1;
let inicio = true;
let combinacion = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function poner(i) {
    if (!inicio) return;
    let cell = i.target;
    if (cell.textContent === "") {
        cell.textContent = turno;

        let id = document.getElementsByClassName("tre");
        if (!verificar(id)) {
            turno = turno === jugador1 ? jugador2 : jugador1;
        }
    }
}

function iniciar(id) {
    for (let i = 0; i < id.length; i++) {
        id[i].textContent = "";
    }
    inicio = true;
    turno = jugador1;
}

function verificar(id) {
    for (let combo of combinacion) {
        let [a, b, c] = combo;
        if (id[a].textContent && id[a].textContent === id[b].textContent && id[a].textContent === id[c].textContent) {
            id[a].classList.add("color");
            id[b].classList.add("color");
            id[c].classList.add("color");
            alert(`¡El jugador ${id[a].textContent} ha ganado!`);
            inicio = false;
            return true;
        }
    }
    return false;
}

function jugar() {
    let ju = document.getElementsByClassName("tre");
    for (let i = 0; i < ju.length; i++) {
        ju[i].addEventListener("click", poner);

    }
}

function preguntar() {
    let j = prompt("Jugador 1 que icono prefieres X - O:");
    if (j == "") {
        jugador1 = "X";
    } else {
        jugador1 = j;
    }
    let ju = prompt("Jugador 2 que icono prefieres X - O:");
    if (ju == "") {
        jugador2 = "O";
    } else {
        jugador2 = ju;
    }
    document.getElementById("icono").textContent = jugador1;
    document.getElementById("icono2").textContent = jugador2;
}

window.onload = function () {
    preguntar();
    jugar();
}