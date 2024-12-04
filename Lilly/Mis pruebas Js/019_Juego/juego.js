function nombreDeLosJugadores() {
    let nombre1 = prompt("Dime el nombre del primer jugador:");
    document.getElementById("jugador1").textContent = nombre1;

    let nombre2 = prompt("Dime el nombre del segundo jugador:");
    document.getElementById("jugador2").textContent = nombre2;

    if (!nombre1 && !nombre2) {
        alert("Introduzca los nombres");
        nombreDeLosJugadores();
    }
}

let totalJugadores = 2;
let jugador = 1;
let celdaActual = 1;
let celdaNULL = 1;
let cartasJugador1 = [];
let cartasJugador2 = [];
let turno = 1;

function crearCarta() {
    let nombre = document.getElementById("nombre").value;
    let fuerza = parseInt(document.getElementById("fuerza").value);
    let defensa = parseInt(document.getElementById("defensa").value);
    let habilidad = parseInt(document.getElementById("habilidad").value);

    let total = fuerza + defensa + habilidad;
    if (total < 30 && nombre != "") {
        let celda = "celda" + celdaActual;
        document.getElementById(celda).querySelector('.nombre').textContent = "Nombre: " + nombre;
        document.getElementById(celda).querySelector('.fuerza').textContent = "Fuerza: " + fuerza;
        document.getElementById(celda).querySelector('.defensa').textContent = "Defensa: " + defensa;
        document.getElementById(celda).querySelector('.habilidad').textContent = "Habilidad: " + habilidad;

        document.getElementById(celda).hidden = true;

        let carta = {nombre, fuerza, defensa, habilidad};
        if (jugador == 1) {
            cartasJugador1.push(carta);
        } else {
            cartasJugador2.push(carta);
        }

        celdaActual++;
        if (celdaActual > 6) {
            celdaActual = 1;
        }
        jugador = (jugador % totalJugadores) + 1;

        document.getElementById("nombre").value = '';
        document.getElementById("fuerza").value = '';
        document.getElementById("defensa").value = '';
        document.getElementById("habilidad").value = '';
    } else {
        alert("Error. La suma de los valores fuerza + defensa + habilidad no puede ser superior a 30, o no has introducido valores.");
    }
}


function elegir1() {
    for (let i = 1; i < 4; i++) {
        let celda = "celda" + i;
        document.getElementById(celda).hidden = false;

    }
}

function elegir2() {
    for (let i = 4; i < 7; i++) {
        let celda = "celda" + i;
        document.getElementById(celda).hidden = false;

    }
}

function mostrarGeneral() {
    for (let i = 1; i <= 6; i++) {
        let celda = "celda" + i;
        document.getElementById(celda).hidden = false;
    }
}

function ocultarGeneral() {
    for (let i = 1; i <= 6; i++) {
        let celda = "celda" + i;
        document.getElementById(celda).hidden = true;
    }
}

function jugar(celda) {
    if (celdaNULL > 2) return;

    let celdasNULL = "celdaNULL" + celdaNULL;
    let elem = document.getElementById(celdasNULL);

    if (elem) {
        elem.innerHTML = celda.innerHTML;
        elem.hidden = false;
        celda.hidden = true;
        ocultarGeneral();
        celdaNULL++;
    } else {
        alert("ERROR");
    }
}

function obtenerCartas(celdaId) {
    let nombre = document.getElementById(celdaId).querySelector('.nombre').textContent.split(': ')[1];
    let fuerza = document.getElementById(celdaId).querySelector('.fuerza').textContent.split(': ')[1];
    let defensa = document.getElementById(celdaId).querySelector('.defensa').textContent.split(': ')[1];
    let habilidad = document.getElementById(celdaId).querySelector('.habilidad').textContent.split(': ')[1];

    return {nombre, fuerza, defensa, habilidad};
}

function comparar() {
    let comparar = prompt("¿Qué valor quieres atacar Jugador" + turno + "? (fuerza, defensa, habilidad)").toLowerCase();

    document.getElementById("celdaNULL1").classList.remove("colorAcierto", "colorError", "colorEmpate");
    document.getElementById("celdaNULL2").classList.remove("colorAcierto", "colorError", "colorEmpate");

    let cart1 = obtenerCartas("celdaNULL1");
    let cart2 = obtenerCartas("celdaNULL2");

    if (comparar == 'fuerza') {
        if (cart1.fuerza > cart2.defensa) {
            document.getElementById("celdaNULL1").classList.add("colorAcierto");
            document.getElementById("celdaNULL2").classList.add("colorError");
            //alert("Ganador jugador1");
        } else if (cart1.fuerza < cart2.defensa) {
            document.getElementById("celdaNULL2").classList.add("colorAcierto");
            document.getElementById("celdaNULL1").classList.add("colorError");
            //alert("Ganador jugador2");
        } else {
            document.getElementById("celdaNULL2").classList.add("colorEmpate");
            document.getElementById("celdaNULL1").classList.add("colorEmpate");
            //alert("Empate");
        }
    } else if (comparar == 'defensa') {
        if (cart1.defensa > cart2.fuerza) {
            document.getElementById("celdaNULL1").classList.add("colorAcierto");
            document.getElementById("celdaNULL2").classList.add("colorError");
            // alert("Ganador jugador1");
        } else if (cart1.defensa < cart2.fuerza) {
            document.getElementById("celdaNULL2").classList.add("colorAcierto");
            document.getElementById("celdaNULL1").classList.add("colorError");
            //alert("Ganador jugador2");
        } else {
            document.getElementById("celdaNULL2").classList.add("colorEmpate");
            document.getElementById("celdaNULL1").classList.add("colorEmpate");
            //alert("Empate");
        }
    } else if (comparar == 'habilidad') {
        if (cart1.habilidad > cart2.habilidad) {
            document.getElementById("celdaNULL1").classList.add("colorAcierto");
            document.getElementById("celdaNULL2").classList.add("colorError");
            // alert("Ganador jugador1");
        } else if (cart1.habilidad < cart2.habilidad) {
            document.getElementById("celdaNULL2").classList.add("colorAcierto");
            document.getElementById("celdaNULL1").classList.add("colorError");
            //alert("Ganador jugador2");
        } else {
            document.getElementById("celdaNULL2").classList.add("colorEmpate");
            document.getElementById("celdaNULL1").classList.add("colorEmpate");
            //alert("Empate");
        }
    } else {
        alert("Error");
    }
    turno = turno === 1 ? 2 : 1;

    setTimeout(limpiar, 2000);
}

function limpiar() {
    for (let i = 1; i <= 2; i++) {
        let celda = document.getElementById("celdaNULL" + i);
        celda.innerHTML = "";
        celda.classList.remove("colorAcierto", "colorError", "colorEmpate");
        celda.hidden = true;
    }
    celdaNULL = 1;
    alert("Vuelve a elegir carta ahora otro jugador distinto");

}

function normas() {
    alert("Las normas del Juego: Tiene que haber dos jugadores, se rellenan los huecos sin superar 30 puntos, primero el jugador 1 y luego el jugador2, una vez rellenadas empieza el 1 jugador a elegir y luego el 2 según los valores que se haya introducido, una ver terminada la ronda se borra y empieza el jugador 2 a elegir carta y valor, apartir de aqui se puede jugar como se quiera es libre.");
}

window.onload = function () {
    nombreDeLosJugadores();
    normas();
    document.getElementById("crear").addEventListener("click", crearCarta);
    document.getElementById("elegir1").addEventListener("click", elegir1);
    document.getElementById("elegir2").addEventListener("click", elegir2);
    document.getElementById("ocultarGeneral").addEventListener("click", ocultarGeneral);
    document.getElementById("mostrarGeneral").addEventListener("click", mostrarGeneral);
    document.getElementById("comparar").addEventListener("click", comparar);

}
