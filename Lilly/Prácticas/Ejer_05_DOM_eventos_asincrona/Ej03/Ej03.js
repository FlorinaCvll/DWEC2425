var generarDatos = 0;

function recuperarDatos() {
    let datosGetElement = document.getElementsByClassName("elementoPrincipal");
    console.log(datosGetElement);
    let value = datosGetElement.value;
    let lista = document.getElementById("listaElements");
    for (let i = 0; i < datosGetElement.length; i++) {
        let elementoLista = document.createElement("li");
        let elemento = datosGetElement[i];
        let contenido = elemento.textContent;
        lista.appendChild(elementoLista);
        elementoLista.textContent = contenido;
    }
}

function recuperarDatosQuery() {
    let datosGetElement = document.querySelectorAll(".elementoPrincipal");
    console.log(datosGetElement);
    let value = datosGetElement.value;
    let lista = document.getElementById("listaQuery");
    for (let i = 0; i < datosGetElement.length; i++) {
        let elementoLista = document.createElement("li");
        let elemento = datosGetElement[i];
        let contenido = elemento.textContent;
        lista.appendChild(elementoLista);
        elementoLista.textContent = contenido;

    }
}

function eliminarQuerySelector() {
    let listaQuery = document.getElementById("listaQuery");
    //console.log(listaQuery);
    let posicionDelete = listaQuery.childNodes[listaQuery.childNodes.length - 1];
    console.log(posicionDelete);
    listaQuery.removeChild(posicionDelete);
}

function eliminarGetElementsByClassName() {
    let listaQuery = document.getElementById("listaElements");
    //console.log(listaQuery);
    let posicionDelete = listaQuery.childNodes[listaQuery.childNodes.length - 1];
    console.log(posicionDelete);
    listaQuery.removeChild(posicionDelete);
    console.log("se ha eliminado posicionDelete");
}

function eliminarQuerySelectorTemporizador() {
    let listaQuery = document.getElementById("listaQuery");
    //console.log(listaQuery);
    let posicionDelete = listaQuery.childNodes[listaQuery.childNodes.length - 1];
    console.log(posicionDelete);
    listaQuery.removeChild(posicionDelete);
    let intervaloID = setInterval(eliminarQuerySelectorTemporizador, 1000);
    if (listaQuery.childNodes[listaQuery.childNodes.length - 1] == 0) {
        clearInterval(intervaloID);
    }
}

function eliminarGetElementsByClassNameTemporizador() {
    let listaQuery = document.getElementById("listaElements");
    //console.log(listaQuery);
    let posicionDelete = listaQuery.childNodes[listaQuery.childNodes.length - 1];
    console.log(posicionDelete);
    listaQuery.removeChild(posicionDelete);
    console.log("se ha eliminado posicionDelete");
    let intervaloID2 = setInterval(eliminarGetElementsByClassNameTemporizador, 1000);
    if (listaQuery.childNodes[listaQuery.childNodes.length - 1] == 0) {
        clearInterval(intervaloID2);
    }
}

window.onload = function () {
    document.getElementById("eliminar2").addEventListener("click", eliminarQuerySelector);
    document.getElementById("eliminar1").addEventListener("click", eliminarGetElementsByClassName);
    document.getElementById("botonTemporizador").addEventListener("click", eliminarQuerySelectorTemporizador);
    document.getElementById("botonTemporizador").addEventListener("click", eliminarGetElementsByClassNameTemporizador);
    if (generarDatos == 0) {
        recuperarDatos();
        recuperarDatosQuery();
        generarDatos++;
    }
}