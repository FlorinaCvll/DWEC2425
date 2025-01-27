document.getElementById("botonEliminar").addEventListener("click", function () {
    let confirmacion = confirm("¿Seguro que deseas eliminar este ítem?");
    if (confirmacion) {
        // Lógica para eliminar el ítem
        console.log("Ítem eliminado.");
    } else {
        console.log("Eliminación cancelada.");
    }
});
