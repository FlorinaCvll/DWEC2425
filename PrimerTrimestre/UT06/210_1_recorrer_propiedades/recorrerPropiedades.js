function recorrerPropiedades() {
    let punto = {
        x: 19,
        y: 36,
        mostrarCoordenadas: function () {
            return `(${this.x}, ${this.y})`
        }
    };
    for (let prop in punto) {
        console.log(`${prop} tiene el valor ${punto[prop]}`);

    }
}


window.onload = function () {
    document.getElementById("recorrerPropiedades").addEventListener("click", recorrerPropiedades);
}