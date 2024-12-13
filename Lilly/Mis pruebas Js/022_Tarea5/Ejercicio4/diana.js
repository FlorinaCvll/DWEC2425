window.onload = function () {
    let jugador = 1;
    let dardosTirar = 0;
    let totalJugadores = 2;
    let totalDartosJugadores = 3;
    let dardos = document.querySelectorAll(".dardo-rojo");
    let punt = [0, 0];

    let juegoTerminado = false;

    let Evento = ev => {
        if (!juegoTerminado) {
            dardos.forEach(e => {
                e.classList.remove("dardo_seleccionado");
                e.addEventListener("click", Evento);
            });
            ev.currentTarget.classList.add("dardo_seleccionado");
        }
    }
    let Evento2 = ev => {
        ev.stopPropagation();
        let x = ev.clientX;
        let y = ev.clientY;

        let d = document.querySelector(".dardo-rojo.dardo_seleccionado");
        if (d) {
            let puntLaz = calcular(x, y);
            punt[jugador - 1] += puntLaz;
            document.getElementById("punto").textContent = "1Jugador  " + punt.join(" - ") + " Jugador2";

            d.style.left = `${x - 25}px`;
            d.style.top = `${y + 25}px`;
            d.classList.replace("dardo_seleccionado", "dardo_launched");
            d.removeEventListener("click", Evento);

            dardosTirar++;

            if (dardosTirar === totalDartosJugadores) {
                jugador = (jugador % totalJugadores) + 1;
                dardosTirar = 0;
                document.getElementById("turno").textContent = " Turno jugador: " + jugador + ", escoge el dardo rojo";

                if (jugador === 1) {
                    let winner;
                    if (punt[0] > punt[1]) {
                        winner = "Jugador 1";
                    } else if (punt[0] < punt[1]) {
                        winner = "Jugador 2";
                    } else {
                        winner = "un empate";
                    }
                    alert("¡El ganador es: " + winner + " !");

                    dardos.forEach((e) => {
                        e.addEventListener("click", Evento);
                    });
                    juegoTerminado = true;

                }
            }
            if (juegoTerminado) {
                document.getElementById("turno").textContent = "El juego ha terminado, dale a Reset para volver a empezar";
            }
        }
    };

    function calcular(x, y) {
        let seis = document.getElementById("seis");
        let cuatro = document.getElementById("cuatro");
        let dos = document.getElementById("dos");

        let rectSeis = seis.getBoundingClientRect();
        let rectCuatro = cuatro.getBoundingClientRect();
        let rectDos = dos.getBoundingClientRect();

        if (
            x >= rectSeis.left &&
            x <= rectSeis.right &&
            y >= rectSeis.top &&
            y <= rectSeis.bottom
        ) {
            return 30;
        } else if (
            x >= rectCuatro.left &&
            x <= rectCuatro.right &&
            y >= rectCuatro.top &&
            y <= rectCuatro.bottom
        ) {
            return 20;
        } else if (
            x >= rectDos.left &&
            x <= rectDos.right &&
            y >= rectDos.top &&
            y <= rectDos.bottom
        ) {
            return 10;
        } else {
            return 0;
        }
    }

    dardos.forEach(e => {
        e.addEventListener("click", Evento);
    });

    document.getElementById("reset").addEventListener("click", () => {
        location.reload()
    });
    document.getElementById("turno").textContent = " Turno jugador: " + jugador + ", escoge el dardo azul";


    document.getElementById("seis").addEventListener("click", Evento2);
    document.getElementById("cinco").addEventListener("click", Evento2);
    document.getElementById("cuatro").addEventListener("click", Evento2);
    document.getElementById("tres").addEventListener("click", Evento2);
    document.getElementById("dos").addEventListener("click", Evento2);
    document.getElementById("uno").addEventListener("click", Evento2);

}