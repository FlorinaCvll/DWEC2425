function ajaxTexto() {
    alert("Ajax Texto");
    let pre = document.querySelector("pre");
    let capaError = document.getElementById("error");
    fetch("poemaAleatorio.php")
        .then(response => response.text())
        .then(texto => pre.textContent = texto)
        .catch(error => capaError.textContent = error)

}

window.onload = function () {
    document.getElementById("ajaxTexto").addEventListener("click", ajaxTexto);
}