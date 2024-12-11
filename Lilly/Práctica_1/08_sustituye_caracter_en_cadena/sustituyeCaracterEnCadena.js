function sustiturCaracter() {
    let cadena = document.getElementById("cadenaEntrada").value;
    let caracterASustituir = document.getElementById("caracterASustituir").value;
    let caracterQueSustituye = document.getElementById("caracterQueSustituye").value;

    console.log("cadenaEntrada --> " + cadena);
    caracterASustituir = caracterASustituir.charAt(0);
    console.log("caracterASustituir --> " + caracterASustituir);
    caracterQueSustituye = caracterQueSustituye.charAt(0);
    console.log("caracterQueSustituye --> " + caracterQueSustituye);

    let resultado = cadena.replaceAll(caracterASustituir, caracterQueSustituye);
    document.getElementById("resultado").textContent = resultado;
}

window.onload = function () {
    document.getElementById("sustituir").addEventListener("click", sustiturCaracter);
}