function RecuperarNavigator() {
    console.log("userAgent → " + navigator.userAgent);
    console.log("*********");
    console.log("cookieEnabled → " + navigator.cookieEnabled);
    console.log("*********");
    console.log("Geolocation → " + navigator.geolocation);
    console.log("*********");
    console.log("language → " + navigator.language);
    console.log("*********");
    console.log("onLine → " + navigator.onLine); // Si está conectado a internet
    console.log("*********");
    console.log("storage → " + navigator.storage); // solo funciona en HTTPS
}

window.onload = function () {
    document.getElementById("navigator").addEventListener("click", RecuperarNavigator);
}