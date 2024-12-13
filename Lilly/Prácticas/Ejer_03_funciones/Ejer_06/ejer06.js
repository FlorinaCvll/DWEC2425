function factorial(numero) {
    if (numero == 0) {
        //si el número que le pasamos es 0 retornamos 1
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}

function resultado() {
    console.log(factorial(5));
}

window.onload = function () {
    document.getElementById("factorial").addEventListener("click", resultado);
};
