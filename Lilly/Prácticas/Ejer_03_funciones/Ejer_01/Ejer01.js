function declaracionTradicional() {
    const pi = recuperarPi();

    document.getElementById("resultadoTradicional").textContent = "Resultado Tradicional " + pi;
    return console.log(pi);
}

function declaracionFlecha() {
    const pi = () => {
        return Math.PI;
    }
    document.getElementById("resultadoTradicional").textContent = "Resultado con una función flecha " + pi();

}

const declaracionAnonima = function () {
    const pi = recuperarPi();
    document.getElementById("resultadoTradicional").textContent = "Resultado con  función anónima " + pi;
};

function recuperarPi() {
    return Math.PI;
}

window.onload = function () {
    document
        .getElementById("declaracionTradicional")
        .addEventListener("click", declaracionTradicional);
    document
        .getElementById("declaracionAnonima")
        .addEventListener("click", declaracionAnonima);
    document
        .getElementById("declaracionFlecha")
        .addEventListener("click", declaracionFlecha);
};
