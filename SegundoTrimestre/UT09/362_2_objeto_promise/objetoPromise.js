function objetoPromise() {
    let promesa = Promise.resolve("Ha funcionado todo");
    promesa.then((mensaje) => {
        console.log(mensaje);
    });
    let promesaDos = Promise.reject(Error("No ha funcionado"));
    promesaDos
        .then((mensaje) => {
            console.log(mensaje);
        })
        .catch((error) => console.log(error.message));
}

window.onload = function () {
    document.getElementById("objetoPromise").addEventListener("click", objetoPromise);
}