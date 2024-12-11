function mostrar() {
    alert(" | _(.)_(.)_ |" + "\n" +
        "  |     $     |" + "\n" +
        "  | --------  |" + "\n" +
        "  _____________"
    );
}


window.onload = function () {
    document.getElementById("modelar").textContent = " | _(.)_(.)_ |" + "\n" +
        " |     $     |" + "\n" +
        " |  -------- |" + "\n" +
        " _____________";
    document.getElementById("modelar").addEventListener("click", mostrar);
}