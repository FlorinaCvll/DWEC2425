//1.1 FUNCION TRADICIONAL
function funcionTradicional() {
    console.log("Funcion Tradicional: " + Math.PI);
}

// 1.2 FUNCION ANONIMA
function funcionAnonima() {
    const anonima = function () {
        console.log("Funcion Anonima: " + Math.PI);
    }
    anonima();
}

//1.3 FUNCION  FLECHA
function funcionFlecha() {
    const flecha = () => {
        console.log("Funcion flecha: " + Math.PI);
    }
    flecha();
}

window.onload = function () {
    document.getElementById("funcionTradicional").addEventListener("click", funcionTradicional);
    document.getElementById("funcionAnonima").addEventListener("click", funcionAnonima);
    document.getElementById("funcionFlecha").addEventListener("click", funcionFlecha);

}