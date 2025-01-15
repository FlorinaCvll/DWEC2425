async function asyncEsperaRespuesta() {
    let mensaje1 = "Estoy Resuelto";
    console.log(mensaje1);
    let mensaje2 = await new Promise((resolver) => {
        setTimeout(() => {
            resolver("Resuelvo en 3s")
        }, 3000);
    })
    console.log(mensaje2);
    let mensaje3 = await new Promise((resolver) => {
        setTimeout(() => {
            resolver("Resuelvo en 6s")
        }, 6000);
    })
    console.log(mensaje3);
}

window.onload = function () {
    document.getElementById("asyncEsperaRespuesta").addEventListener("click", asyncEsperaRespuesta);
}