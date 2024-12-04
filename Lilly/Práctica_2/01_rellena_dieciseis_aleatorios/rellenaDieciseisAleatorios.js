function devolverAleatorio() {
    return resultado = parseInt(Math.random() * 16);
}

function convertirValor(valor) {
    let letra = valor;
    if (valor < 10) {
        return letra;
    } else {
        switch (valor) {
            case 10:
                letra = "A";
                break;
            case 11:
                letra = "B"
                break;
            case 12:
                letra = "C"
                break;
            case 13:
                letra = "D";
                break;
            case 14:
                letra = "E";
                break;
            case 15:
                letra = "F";
                break;
            default:
                letra = "-"
                break;
        }
        return letra;
    }
}

function cargarNumeros() {
    let cadena = "";
    let posicion = 1;

    while (cadena.length < 16) {
        let caracter = convertirValor(devolverAleatorio());
        if (cadena.indexOf(caracter) < 0) {
            cadena = cadena + caracter;
            document.getElementById("posicion" + posicion).textContent = caracter;
            posicion++;
        }
    }
}

window.onload = function () {
    cargarNumeros();
    //document.getElementById("cuerpo").addEventListener("click",cargarNumeros);
}