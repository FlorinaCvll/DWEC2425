function convertirNumero(valor) {
    let resultado = null;
    switch (valor) {
        case "1":
            resultado = parseInt(valor);
            break;
        case "2":
            resultado = parseInt(valor);
            break;
        case "8":
            resultado = parseInt(valor);
            break;
        case "unoCadena":
            resultado = "1";
            break;
        case "dosCadena":
            resultado = "2";
            break;
        case "trueCadena":
            resultado = "true";
            break;
        case "trueBooleano":
            resultado = true;
            break;
        case "falseBooleano":
            resultado = false;
            break;
        default:
            break;
    }
    return resultado;
}

function probarBooleanos(target) {
    let valorBooleano = target.target.value;
    document.getElementById("resultado").classList.toggle("resultado");
    let primerValor = document.getElementById("primerValor").value;
    primerValor = convertirNumero(primerValor);
    console.log(primerValor);
    let segundoValor = document.getElementById("segundoValor").value;
    segundoValor = convertirNumero(segundoValor);
    console.log(segundoValor);
    let valorRespuesta;
    switch (valorBooleano) {
        case "mayorQue":
            valorRespuesta = primerValor > segundoValor;
            document.getElementById("resultado").textContent = valorRespuesta;
            break;
        case "menorQue":
            valorRespuesta = primerValor < segundoValor;
            document.getElementById("resultado").textContent = valorRespuesta;
            break;
        case "mayorOIgual":
            valorRespuesta = primerValor >= segundoValor;
            document.getElementById("resultado").textContent = valorRespuesta;
            break;
        case "menorOIgual":
            valorRespuesta = primerValor <= segundoValor;
            document.getElementById("resultado").textContent = valorRespuesta;
            break;
        case "igual":
            valorRespuesta = primerValor == segundoValor;
            document.getElementById("resultado").textContent = valorRespuesta;
            break;
        case "igualEstricto":
            valorRespuesta = primerValor === segundoValor;
            document.getElementById("resultado").textContent = valorRespuesta;
            break;
        case "distinto":
            valorRespuesta = primerValor != segundoValor;
            document.getElementById("resultado").textContent = valorRespuesta;
            break;
        default:
            break;
    }

}

window.onload = function () {
    document.getElementById("operadorRelacional").addEventListener("change", probarBooleanos);

}