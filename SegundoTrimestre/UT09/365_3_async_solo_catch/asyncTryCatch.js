async function asyncTryCatch() {
    try {
        let resultado = await Promise.reject(Error("Promesa rechazada"));
    } catch (error) {
        console.log(error.message);
    }
}

window.onload = function () {
    document.getElementById("asyncSoloCatch").addEventListener("click", asyncTryCatch);
}