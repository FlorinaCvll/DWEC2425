function encadenamientoMetodos() {
    console.log("-----> Antes de la promesa");
    let promesa = new Promise((resolver, rechazar) => {
        let n = 0;
        let intervalo = setInterval(function () {
            n++;
            console.log("..." + n + "...");
            if (n == 9) {
                resolver("Han pasado 10 segundos");
                clearInterval(intervalo);
            }
        }, 1000);
    });
    promesa.then(function (mensaje) {
        console.log(mensaje);
        return "Se ha creado un temporizador";
    }).then((mensaje) => console.log(mensaje));
    console.log("-----> Después de la promesa");
}

window.onload = function () {
    document.getElementById("encadenamientoMetodos").addEventListener("click", encadenamientoMetodos);
}