let array = [];

function registrar() {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellidos").value;
    let edad = parseInt(document.getElementById("edad").value);

    let nuevo = {
        nombre,
        apellido,
        edad
    };

    array.push(nuevo);
    actualizar();

    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("edad").value = "";


}

function actualizar() {
    if (array.length <= 3) {
        let Anombre = document.querySelectorAll("#uno .dato");
        let Aapellido = document.querySelectorAll("#dos .dato");
        let Aedad = document.querySelectorAll("#tres .dato");
        array.forEach((e, index) => {
            if (index < 3) {
                Anombre[index + 1].textContent = e.nombre;
                Aapellido[index + 1].textContent = e.apellido;
                Aedad[index + 1].textContent = e.edad;
            }
        });
    } else {
        alert("No se puede añadir mas");
    }

}

window.onload = function () {
    document.getElementById("registrar").addEventListener("click", registrar);
}