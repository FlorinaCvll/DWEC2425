function objetoLocation() {
    console.log("protocolo-->" + location.protocol);
    console.log("host-->" + location.host);
    console.log("hostName-->" + location.hostname);
    console.log("pathName-->" + location.pathname);
    console.log("search-->" + location.search);
    console.log("hash-->" + location.hash);
    console.log("userName-->" + location.username); //no funciona
    console.log("userPassword-->" + location.password); //no funciona
    console.log("origin-->" + location.origin);
    console.log("origin-->" + location.reload); //sin () para no recargar la pagina
}

window.onload = function () {
    document.getElementById("location").addEventListener("click", objetoLocation);
}