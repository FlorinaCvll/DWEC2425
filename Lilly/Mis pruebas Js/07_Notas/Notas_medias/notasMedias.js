function media(...nota) {
    let cantidad = 0;
    for (let num of nota) {
        cantidad += num;
    }
    return cantidad / nota.length;

}

function alumno() {
    let nota = prompt("Introduce tus notas , todas separadas por comas:");
    let m = nota.split(",").map(Number);
    let h = media(...m);
    alert("Tu media es: " + h);
}

window.onload = function () {
    document.getElementById("caja").addEventListener("click", alumno);
}