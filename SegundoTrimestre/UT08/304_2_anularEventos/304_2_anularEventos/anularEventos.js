function mensaje() {
    alert("Me has hecho Click");
    let p = document.getElementById("anularEvento");
    p.removeEventListener("click", mensaje);
}

window.onload = function () {
    document.getElementById("anularEvento").addEventListener("click", mensaje);
}