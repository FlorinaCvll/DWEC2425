function crearConLlaves() {
    let punto = {
        x: 19,
        y: 35,
        mostrarCoordenadas: function () {
            return `(${punto.x}, ${punto.y})`;
        }
    };
    console.log(punto.mostrarCoordenadas());
}

window.onload = function () {
    document.getElementById("crearConLlaves").addEventListener("click", crearConLlaves);
}