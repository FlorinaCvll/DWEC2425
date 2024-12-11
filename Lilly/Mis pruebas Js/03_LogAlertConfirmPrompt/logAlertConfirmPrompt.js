function log() {
    console.log("El FCB BARCELONA es el mejor equipo del mundo");
}

function alert2() {
    alert("VISCA EL BARCA SIEMPRE");
}

function confirm2() {
    let resultado = confirm("¿Eres del FC BARCELONA ?");
    if (resultado == true) {
        alert("¡QUE BUENO ERES ELIGIENDO!");
    } else {
        alert("¡PUES ESTAS APAÑADO CON KYLIAN!");
    }
}

function prompt2() {
    let jugador = prompt("¿Dime un jugador del FC BARCELONA?");
    alert(jugador);
}

window.onload = function () {
    document.getElementById("log").addEventListener("click", log);
    document.getElementById("alert").addEventListener("click", alert2);
    document.getElementById("confirm").addEventListener("click", confirm2);
    document.getElementById("prompt").addEventListener("click", prompt2);
}