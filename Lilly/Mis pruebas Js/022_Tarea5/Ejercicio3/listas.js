let intervalo;

function eliminacion() {
    let listadoUno = document.getElementById("getElementByClassName").getElementsByClassName("get")[0];
    let listadoDos = document.getElementById("querySelectorAll").querySelectorAll(".get")[0];

    console.log("Antes del GetElementByClassName:" + listadoUno.children.length);
    console.log("Antes del QuerySelectorAll:" + listadoDos.children.length);
    console.log("**************************************************");

    if (listadoUno.children.length > 0) {
        listadoUno.removeChild(listadoUno.children[0]);
    }

    if (listadoDos.children.length > 0) {
        listadoDos.removeChild(listadoDos.children[0]);
    }

    console.log("Después del GetElementByClassName:" + listadoUno.children.length);
    console.log("Después del QuerySelectorAll:" + listadoDos.children.length);
}

function temporizador() {
    if (intervalo) {
        clearInterval(intervalo);
        intervalo = null;
    } else {
        intervalo = setInterval(eliminacion, 1000);
    }
}

window.onload = function () {
    document.getElementById("eliminacion").addEventListener("click", eliminacion);
    document.getElementById("temporizador").addEventListener("click", temporizador);

}