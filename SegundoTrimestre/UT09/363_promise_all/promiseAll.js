function promiseAll() {
    let promesa1 = Promise.resolve("Estoy Resuelta");
    let promesa2 = new Promise((resolver) => {
        setTimeout(() => {
            resolver("Resuelvo en tres segundos")
        }, 3000);
    });
    let promesa3 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resuelvo en seis segundos")
        }, 6000);

    });
    let promesaConjunta = Promise.all([promesa1, promesa2, promesa3]);
    console.log("Empezando");
    promesaConjunta.then((resultados) => {
        let n = 1;
        for (let resultado of resultados) {
            console.log(`Promesa nº ${n}: Mensaje: ${resultado}`);
            n++;
        }
    });
}

window.onload = function () {
    document.getElementById("promiseAll").addEventListener("click", promiseAll);
}