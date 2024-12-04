var contadorDardos = 0;
var contadorJ1 = 0;
var puntuacionJ1 = 0;
var puntuacionJ2 = 0;
var contadorJ2 = 0;

function obtenerCoordenadasEvento() {
    let arrayCursor = [];
    document.addEventListener("click", function (ev) {
        console.log(
            `screenX:${ev.screenX}, screenY:${ev.screenY} \n` +
            `clientX:${ev.clientX}, clientY:${ev.clientY} \n` +
            `pageX:${ev.pageX}, pageY:${ev.pageY}`
        );
    });
    arrayCursor.push(ev.screenX, ev.screenY);
    return arrayCursor;
}

function obtenerId(ev) {
    let circuloClickeado = ev;
    let id = circuloClickeado.id;
    let puntuacion = opcionesPuntuacion(id);
    return puntuacion;
}

function opcionesPuntuacion(parametro) {
    let opcion = parametro;
    let resultado = 0;
    switch (opcion) {
        case "circulo1":
            resultado = 20;
            break;
        case "circulo2":
            resultado = 10;
            break;
        case "circulo3":
            resultado = 25;
            break;
        case "circulo4":
            resultado = 10;
            break;
        case "circulo5":
            resultado = 50;
            break;
        case "circulo6":
            resultado = 100;
            break;
    }
    return resultado;
}

function ganador() {
    if (contadorDardos == 6) {
        if (puntuacionJ1 > puntuacionJ2) {
            console.log("se cumple ganador J1");
            let ganador = document.getElementById("marcador1");
            ganador.classList.add("ganador");
        } else if (puntuacionJ1 == puntuacionJ2) {
            let ganador1 = document.getElementById("marcador1");
            let ganador2 = document.getElementById("marcador2");
            ganador1.classList.add("empate");
            ganador2.classList.add("empate");
        } else {
            console.log("se cumple ganador J2");
            let ganador = document.getElementById("marcador2");
            ganador.classList.add("ganador");
        }
    }
}

window.onload = function () {
    //console.log(obtenerId());
    document.getElementById("padre").addEventListener("click", function (ev) {
        let x = ev.clientX;
        let y = ev.clientY;
        let imagen = new Image();
        if (contadorDardos <= 6) {
            if (contadorJ1 < 3) {
                imagen.src = "img/dardo1.png";
                imagen.style.height = "10%";
                imagen.style.position = "absolute";
                imagen.style.left = x + "px";
                imagen.style.top = y + "px";
                punto = obtenerId(ev.target);
                let marcador = document.getElementById("marcador1");
                puntuacionJ1 += punto;
                console.log("puntuacion", puntuacionJ1);
                marcador.textContent = puntuacionJ1;
                contadorJ1++;
                contadorDardos++;
                document.body.appendChild(imagen);
            } else if (contadorJ1 == 3 && contadorJ2 < 3 && contadorDardos >= 3) {
                imagen.src = "img/dardo2.png";
                imagen.style.height = "10%";
                imagen.style.position = "absolute";
                imagen.style.left = x + "px";
                imagen.style.top = y + "px";
                punto2 = obtenerId(ev.target);
                let marcador = document.getElementById("marcador2");
                puntuacionJ2 += punto2;
                console.log("puntuacion", puntuacionJ1);
                marcador.textContent = puntuacionJ2;
                contadorJ2++;
                contadorDardos++;
                document.body.appendChild(imagen);
            }
        }
        if (contadorDardos == 6) {
            ganador();
        }
    });
};
