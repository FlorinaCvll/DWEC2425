function interfazFetch() {
    fetch("SegundoTrimestre/UT10/Ficheros PHP/nifAleatorio.php")
        .then(response => {
            console.log(response.status);
        })
        .catch(error => {
            console.log("Error: " + error);
        })
}

window.onload = function () {
    document.getElementById("interfazFetch").addEventListener("click", interfazFetch);
}