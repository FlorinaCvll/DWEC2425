class Punto {
    constructor(cordX, coordY) {
        this.x = cordX;
        this.y = coordY;
        this.mostrarCoordenadas = () => `(${this.x}, ${this.y})`;
    }
}

function prototipo() {
    let a = new Punto(10, 20);
    console.log(a.__proto__);
    console.log("****************");
    console.log(Object.getPrototypeOf(a));
}

function agnadirPrototipo() {
    let a = new prototipo(10, 20);
    Punto.prototype.sumarXY = function () {
        return this.x + this.y;
    }
    Punto.prototype.x = 0;
    console.log(Punto.prototype);
    ;
    console.log(a.__proto__);
}


window.onload = function () {
    document.getElementById("prototipo").addEventListener("click", prototipo);
    document
        .getElementById("aniadirPrototipo")
        .addEventListener("click", agnadirPrototipo);
    document
        .getElementById("mostrarDosObjetos")
        .addEventListener("click", mostrarDosObjetos);
    document
        .getElementById("modificarPropiedadesDePrototipo")
        .addEventListener("click", modificarPropiedadesDePrototipo);
};