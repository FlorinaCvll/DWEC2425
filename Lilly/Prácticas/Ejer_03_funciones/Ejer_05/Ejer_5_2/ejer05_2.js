function vehiculo(...parametro) {
    let resultado = [];
    for (let index = 0; index < parametro.length; index++) {
        resultado = parametro[index];
    }

    console.log(resultado);
    if (resultado.length == 2) {
        document.getElementById("resultado2").textContent = "Es una moto";
    } else if (resultado.length == 3) {
        console.log("Es un sidecar");
        document.getElementById("resultado2").textContent = "Es un sidecar";

    } else if (resultado.length == 4) {
        document.getElementById("resultado2").textContent = "Es un coche";

        console.log("Es un coche");
    } else if (resultado.length == 5) {
        document.getElementById("resultado2").textContent = "Es un barco";

        console.log("Es un barco");
    } else if (resultado.length == 6) {
        document.getElementById("resultado2").textContent = "Es un avión";

        console.log("Es un avión");
    } else {
        document.getElementById("resultado2").textContent = "No corresponde con ningún vehículo";

        console.log("No corresponde a ningún vehículo");
    }
}

function pedirDatos() {
    const datos = document.getElementById("valor1");
    const resultado = datos.value;
    let separado = resultado.split(",");
    console.log(separado);
    return separado;
}

function imprimirDatos() {
    let separado = pedirDatos();
    vehiculo(separado);


}


window.onload = function () {
    document.getElementById("start").addEventListener("click", imprimirDatos)
}