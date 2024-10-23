function ordenarLocalParametro() {
    const palabras = ["Ñu", "Nu", "Águila", "Aguila", "Boa", "Oso", "Marsopa", "Nutria"];
    console.log(palabras);
    palabras.sort((a, b) => a.localeCompare(b, "en"));
    console.log(palabras);
}

window.onload = function () {
    document.getElementById("ordenarLocalParametro").addEventListener("click", ordenarLocalParametro)
}