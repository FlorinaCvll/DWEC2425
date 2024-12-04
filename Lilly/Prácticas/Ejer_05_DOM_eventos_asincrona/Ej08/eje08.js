async function carrera() {
    let strart = document.getElementById("imagenStart");
    strart.setAttribute("hidden", true);
    let tortuga1 = document.getElementById("tortu1");
    let tortuga2 = document.getElementById("tortu2");
    let tortuga3 = document.getElementById("tortu3");
    let tortuga4 = document.getElementById("tortu4");
    let velocidad = obtenerVelocidad();
    let penalizacion = obtenerPenalizacion();
    let posicionTortu1 = 0;
    let corredor1 = await new Promise((resolver) => {
        setTimeout(() => {
            let intervalo = setInterval(() => {
                resolver("Resuelvo en 3s");
                if (posicionTortu1 != 90) {
                    posicionTortu1 += 10;
                    tortuga1.style.marginLeft = posicionTortu1 + '%';
                }
            }, penalizacion[0] * 1000);
        }, velocidad[0] * 1000);
    });
    return corredor1;
}

function obtenerVelocidad() {
    let velocidades = [];
    let contadorVelocidades = 0;
    let numeroAleatorio1 = Math.floor(Math.random() * 10) + 1;
    velocidades.push(numeroAleatorio1);
    contadorVelocidades++;
    do {
        console.log("Contador Velocidades", contadorVelocidades);
        let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
        if (!velocidades.includes(numeroAleatorio)) {
            velocidades.push(numeroAleatorio);
            contadorVelocidades++;
        }
    } while (contadorVelocidades != 4);

    console.log(velocidades);
    return velocidades;
}

function obtenerPenalizacion() {
    let penalizacion = [];
    let contadorPenalizacion = 0;
    do {
        let numeroAleatorio = Math.floor(Math.random() * 3) + 1;
        penalizacion.push(numeroAleatorio);
        contadorPenalizacion++;
    } while (contadorPenalizacion != 3);
    console.log(penalizacion);
    return penalizacion;
}

window.onload = function () {
    document.getElementById("pressStart").addEventListener("click", carrera);
};
