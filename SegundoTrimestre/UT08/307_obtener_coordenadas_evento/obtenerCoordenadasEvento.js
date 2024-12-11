function obtenerCoordenadasEvento() {
    document.addEventListener("mousemove", function (ev) {
        console.log(`screenX:${ev.screenX}, screenY:${ev.screenY} \n` +
            `clientX:${ev.clientX}, clientY:${ev.clientY} \n` +
            `pageX:${ev.pageX}, pageY:${ev.pageY}`);
    })
}


window.onload = function () {
    document.getElementById("obtenerCoordenadasEvento").addEventListener("click", obtenerCoordenadasEvento);
}