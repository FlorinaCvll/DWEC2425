let interval;

function superior() {
    clearInterval(interval);
    interval = setInterval(() => {
        colores('rojo');
        setTimeout(() => {
            colores('verde');
            setTimeout(() => {
                parpado('verde');
                setTimeout(() => {
                    colores('naranja');
                    setTimeout(() => {
                        apagar();
                    }, 1000);
                }, 2000);
            }, 3000);
        }, 6000);

    }, 6000);
}

function colores(color) {
    apagar();
    document.getElementById(color).style.opacity = 1;
}

function apagar() {
    const color = document.querySelectorAll('.luz');
    color.forEach(color => {
        color.style.opacity = 0.2;
    });
}

function cambio(colorSiguiente) {
    apagar();
    document.getElementById(colorSiguiente).style.opacity = 1;
}

function parpado(color) {
    const elem = document.getElementById(color);
    elem.style.opacity = (elem.style.opacity === '1') ? 0.2 : 1;
}

function medio() {
    clearInterval(interval);
    interval = setInterval(() => {
        cambio('rojo');
        setTimeout(() => {
            cambio('verde');
        }, 1000);
    }, 2000);

}

function abajo() {
    clearInterval(interval);
    interval = setInterval(() => {
        parpado('naranja');
    }, 2000);
}

window.onload = function () {
    document.getElementById("rojo").addEventListener("click", superior);
    document.getElementById("naranja").addEventListener("click", medio);
    document.getElementById("verde").addEventListener("click", abajo);
    document.getElementById("boton").addEventListener("click", () => {
        location.reload()
    });

}