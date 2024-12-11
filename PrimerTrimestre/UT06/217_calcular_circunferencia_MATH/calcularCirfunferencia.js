class Circulo {
    constructor(r) {
        this.r = r;
        this.calcularCircunferencia = () => (2 * Math.PI * this.r);
    }

} // FIN class Circulo

function circuloDos(r) {
    this.r = r;
    this.calcularCircunferencia = () => (2 * Math.PI * this.r);
}


function calcularCircunferencia() {
    let valor = window.prompt("Introduce un valor : ");
    let result = new Circulo(valor);
    console.log(result.calcularCircunferencia());
}

window.onload = function () {
    document.getElementById("calcularCircunferencia").addEventListener("click", calcularCircunferencia);
}