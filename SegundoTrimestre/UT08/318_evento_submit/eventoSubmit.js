window.onload = function () {
    let formulario = document.forms[0];
    let tUsuario = document.getElementById("usuario");
    let cMensaje = document.getElementById("mensaje");
    formulario.addEventListener("submit", function (ev) {
        let exp = /^[a-zA-Z]{6}$/;
        if (exp.test(tUsuario.value) === false) {
            ev.preventDefault();
            cMensaje.textContent = "Error: nombre de usuario no valido";
        }
    })
}