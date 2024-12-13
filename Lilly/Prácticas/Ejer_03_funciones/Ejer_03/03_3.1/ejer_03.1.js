let variableMismoNombre = "Esto es una variable global";

function variableFuncion() {
    let variableMismoNombre = "Esto es una variable en una función";
    document.getElementById("rVariable3").textContent = variableMismoNombre;
}

function bucle() {
    let variableMismoNombre = "Mismo nombre";
    for (let index = 0; index < 1; index++) {
        let variableMismoNombre = "Esto es una variable dentro de un bucle";
        document.getElementById("rVariable2").textContent += variableMismoNombre + index + "\n";
    }

}

window.onload = function () {
    document.getElementById("variable1").addEventListener("click", () => {
        document.getElementById("rVariable1").textContent = variableMismoNombre
    });
    document.getElementById("variable3").addEventListener("click", variableFuncion)
    document.getElementById("variable2").addEventListener("click", bucle)

    //document.getElementById("variable3").addEventListener("click", variableBucle);
};
