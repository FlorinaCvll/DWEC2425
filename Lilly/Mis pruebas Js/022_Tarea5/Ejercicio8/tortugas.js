async function numAleatorio(min, max) {
    let numero = Math.floor(Math.random() * (max - min + 1)) + min;
    return numero;
}

function calcularVelocidad() {
    return numAleatorio(1, 10);
}

function calcularTiempoSalida() {
    return numAleatorio(1, 3);
}

function sleep(seconds) {
    return new Promise(resolver => setTimeout(resolver, seconds * 1000));
}

async function mover(tortuga, meta) {
    const final = 1400;
    let posicion = 0;

    tortuga.style.left = '0px';

    const velo = await calcularVelocidad();
    const tiempoSalida = await calcularTiempoSalida();

    await sleep(tiempoSalida);

    async function moverse() {
        if (posicion < final) {
            posicion += velo;
            tortuga.style.left = posicion + 'px';
            requestAnimationFrame(moverse);
        } else {
            alert("llega a la meta");
        }
    }

    moverse();
}

function iniciar(tortugaId) {
    const tra = document.getElementById(tortugaId);
    const meta = document.getElementById("meta");

    document.getElementById(tortugaId).disabled = true;
    mover(tra, meta);
}

window.onload = function () {
    const tortugas = ["uno", "dos", "tres"];

    tortugas.forEach(tortugaId => {
        document.getElementById(tortugaId).addEventListener("click", () => iniciar(tortugaId));
    });
}