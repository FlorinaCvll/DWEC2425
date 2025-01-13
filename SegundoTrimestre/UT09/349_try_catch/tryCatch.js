function ejecutarTryCatch() {
    try {
        console.log(e);
        console.log("Aquí no llega");
    } catch (error) {
        let e = 1;
        console.log("Error: " + error);
    }
}

function ejecutarTryCatchOk() {
    let e = 12;
    try {
        console.log(e);
        console.log("Aquí si llega");
    } catch (error) {
        let e = 11;
        console.log(error);
    }
}

window.onload = function () {
    document.getElementById("ejecutarTryCatch").addEventListener("click", ejecutarTryCatch);
    document.getElementById("ejecutarTryCatchOk").addEventListener("click", ejecutarTryCatchOk);
}