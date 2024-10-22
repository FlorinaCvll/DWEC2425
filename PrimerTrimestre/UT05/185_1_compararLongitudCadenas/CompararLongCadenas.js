function comparar() {
    let cadenaUno = prompt("Introduce cadnea uno: ");
    let cadenaDos = prompt("Introduce cadnea dos: ");

    let result = ordenPersonal(cadenaUno, cadenaDos);

    if (result == 0) {
        alert("LAs cadenas son iguales → " + result);
    } else if (result > 0) {
        alert("La cadena uno es mayor → " + result);
    } else {
        alert("La cadena dos es mayor → " + result);
    }

}

function ordenPersonal(a, b) {
    return a.length - b.length;
}


window.onload = function () {
    document.getElementById("compare").addEventListener("click", comparar)
}