function recuperarHistory() {
    let size = history.go(-(history.length - 1));
    /*let size = history.length;
    history.go(-(size - 1));
    console.log(-(size - 1));
    console.log("tamaño → " + size);*/
}

window.onload = function () {
    document.getElementById("history").addEventListener("click", recuperarHistory);
}