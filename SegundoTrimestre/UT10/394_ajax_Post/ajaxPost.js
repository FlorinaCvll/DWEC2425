function ajaxPost() {
    let codigo = document.querySelector("#codio");
    let mensaje = document.querySelector("#mensaje");

    fetch("../validarNif.php", {
        method: "POST",
        cache: "no-cache",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: "nif=67197757Z&tipo=dni"
    })
        .then(res => res.text())
        .then(text => {
            console.log(text); // Log the raw response text
            let datos;
            try {
                datos = JSON.parse(text); // Attempt to parse the JSON
            } catch (error) {
                throw new Error("Invalid JSON: " + text);
            }
            console.log(datos);
            codigo.textContent = "Codigo: " + datos.error.codigo;
            mensaje.textContent = "Mensaje: " + datos.error.mensaje;
        })
        .catch(error => {
            document.querySelector("main").textContent = "Error: " + error;
        });
}

window.onload = function () {
    document.getElementById("ajaxPost").addEventListener("click", ajaxPost);
}