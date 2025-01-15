function ejecutarAsync() {
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

    async function esperarTiempo() {
        let mensaje1 = await promesa1;
        console.log(mensaje1);
        let mensaje2 = await promesa2;
        console.log(mensaje2);
        let mensaje3 = await promesa3;
        console.log(mensaje3);
    }

    esperarTiempo();
}

window.onload = function () {
    document.getElementById("ejecutarAsync").addEventListener("click", ejecutarAsync);
}