function borrarDatos() {
    for (let i = 0; i < 6; i++) {
        document.getElementById("palabra" + i).textContent = "...";
    }
}

function separar() {
    let nombreYApellidos = document.getElementById("nombreYApellidos").value;
    let arrayNombreYApellidos = nombreYApellidos.split(" ");

    borrarDatos();

    for (let i = 0; i < arrayNombreYApellidos.length; i++) {
        let palabra = arrayNombreYApellidos[i];
        let identificador = "palabra" + i;
        console.log(identificador);
        document.getElementById(identificador).textContent = palabra;
    }
}

window.onload = function () {
    document.getElementById("separar").addEventListener("click", separar);
}