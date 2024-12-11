function crearCookies() {
    document.cookie = "user=John; SameSite=Strict";
    console.log(document.cookie);
    document.cookie = "user=Jane; SameSite=Strict";
    console.log(document.cookie);
    document.cookie = "user=Jack; SameSite=Strict";
    console.log(document.cookie);
}

function recuperarCookies() {
    let arrCookies = document.cookie.split("; ");
    for (const cookie of arrCookies) {
        let [nombre, valor] = cookie.split("=");
        console.log(`La cookie "${nombre}" tiene el valor "${valor}"`);
    }
}

function expirarCookie() {
    let hoy = new Date();
    let caducidadMs = hoy.getTime() + 1000 * 60 * 60 * 24 * 7; // por 1000 para convertirlo en milisegundos
    let caducidad = new Date(caducidadMs);
    console.log("→" + caducidad);
    document.cookie = `user=John; SameSite=Strict; expires=${caducidad.toUTCString()}`;
}

function borrarCookie() {
    document.cookie = "user=John; SameSite=Strict; expires=Sat, 01 Jan 2000 00:00:01 GMT";
    console.log(document.cookie);
}

window.onload = function () {
    document.getElementById("crearCookie").addEventListener("click", crearCookies);
    document.getElementById("recuperarCookie").addEventListener("click", recuperarCookies);
    document.getElementById("expirarCookie").addEventListener("click", expirarCookie);
    document.getElementById("borrarCookie").addEventListener("click", borrarCookie);
}