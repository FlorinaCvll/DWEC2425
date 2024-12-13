function obtenerTodosLosAtributos() {
    let listaAtributos = document.getElementById("edad").attributes;
    for (const atributo of listaAtributos) {
        console.log(`Atributo: ${atributo.name}--` + `Valor: ${atributo.value}`);
    }
}

window.onload = function () {
    document.getElementById("obtener").addEventListener("click", obtenerTodosLosAtributos);
}