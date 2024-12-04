function crearCookies() {
    document.cookie = "user=John; SameSite=Strict";
    console.log(document.cookie);
    document.cookie = "user=Jane; SameSite=Lax";
    console.log(document.cookie);
}

function recuperarCookies() {

}

function expirarCookie() {

}

window.onload = function () {
    document.getElementById("crearCookie").addEventListener("click", crearCookies);
    document.getElementById("recuperarCookie").addEventListener("click", recuperarCookies);
    document.getElementById("expirarCookie").addEventListener("click", expirarCookie);
}