function moverCarita(teclaPulsada) {
    console.log(teclaPulsada);

    let tipoFlecha = teclaPulsada.key;
    let carita = document.getElementById("carita");
    let top = parseInt(window.getComputedStyle(carita).top);
    let left = parseInt(window.getComputedStyle(carita).left);
    switch (tipoFlecha) {
        case "ArrowUp":
            carita.style.top = (top - 5) + "px";
            break;
        case "ArrowDown":
            carita.style.top = (top + 5) + "px";
            break;
        case "ArrowLeft":
            carita.style.left = (left - 5) + "px";
            break;
        case "ArrowRight":
            carita.style.left = (left + 5) + "px";
            break;
    }
}


window.onload = function () {
    window.addEventListener("keydown", moverCarita);
}