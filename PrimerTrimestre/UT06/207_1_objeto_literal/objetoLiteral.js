function crearLiteral() {
    let punto = new Object();
    punto.x = 5;
    punto.y = punto.x * 2;
    punto.mostrarCoordenadas = function () {
        return `(${punto.x}, ${punto.y})`;
    }
    console.log(punto.mostrarCoordenadas());
}


window.onload = function () {
    document.getElementById("crearLiteral").addEventListener("click", crearLiteral);
}