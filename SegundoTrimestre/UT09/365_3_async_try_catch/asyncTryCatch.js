async function asyncTryCatch() {
    try {
        let resultado = await Promise.reject(Error("Promesa rechazada"));
    } catch (error) {
        console.log(error.message);
    }
}

window.onload = function () {
    document.getElementById("asyncTryCatch").addEventListener("click", asyncTryCatch);
}