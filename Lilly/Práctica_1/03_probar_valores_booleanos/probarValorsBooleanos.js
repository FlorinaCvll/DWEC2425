function probarBooleanos(valor) {
    let valorBooleano = valor.target.value;
    document.getElementById("resultado").classList.toggle("resultado");
    switch (valorBooleano) {
        case "true":
            verdadero = true;
            document.getElementById("resultado").textContent = Boolean(verdadero);
            break;
        case "1":
            uno = 1;
            document.getElementById("resultado").textContent = Boolean(uno);
            break;
        case "0":
            cero = 0;
            document.getElementById("resultado").textContent = Boolean(cero);
            break;
        case "Hola":
            hola = "Hola";
            document.getElementById("resultado").textContent = Boolean(hola);
            break;
        case "vacio":
            vacia = "";
            document.getElementById("resultado").textContent = Boolean(vacia);
            break;
        case "NaN":
            variableNaN = NaN;
            document.getElementById("resultado").textContent = Boolean(variableNaN);
            break;
        case "undefined":
            variableUndefined = undefined;
            document.getElementById("resultado").textContent = Boolean(variableUndefined);
            break;
        case "Infinity":
            variableInfinity = Infinity;
            document.getElementById("resultado").textContent = Boolean(variableInfinity);
            break;
        case "null":
            variableNull = null;
            document.getElementById("resultado").textContent = Boolean(variableNull);
            break;
        default:
            break;
    }

    // var cod = document.getElementById("booleanos").ariaValueMax;
    // alert(cod);
}

window.onload = function () {
    document.getElementById("booleanos").addEventListener("change", probarBooleanos);

}