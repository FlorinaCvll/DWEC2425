function enviar() {
    let n = parseInt(document.getElementById("nota").value);

    switch (n) {
        case 1:
        case 2:
        case 3:
        case 4:
            document.getElementById("resultado").textContent = "Tu nota es un suspenso";
            break;
        case 5:
            document.getElementById("resultado").textContent = "Tu nota es un suficiente";
            break;
        case 6:
            document.getElementById("resultado").textContent = "Tu nota es un bien";
            break;
        case 7:
        case 8:
            document.getElementById("resultado").textContent = "Tu nota es un notable";
            break;
        case 9:
        case 10:
            document.getElementById("resultado").textContent = "Tu nota es un sobresaliente";
            break;
        default:
            document.getElementById("resultado").textContent = "No hay ninguna nota";
            break;
    }

}


window.onload = function () {
    document.getElementById("enviar").addEventListener("click", enviar);
}