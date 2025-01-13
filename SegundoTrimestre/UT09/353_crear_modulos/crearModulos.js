const PI_CUADRADO = Math.PI * Math.PI;

function areaCirculo(radio) {
    return radio * radio * Math.PI;
}

function areaCuadrado(lado) {
    // ** es el operador de potencia
    return lado ** 2;
}

export {
    PI_CUADRADO, areaCirculo, areaCuadrado
}