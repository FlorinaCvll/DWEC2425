async function asyncSoloCatch() {

    let resultado = await Promise.reject(Error("Promesa rechazada"))
        .catch(error => (console.log(error.message)));

}

window.onload = function () {
    document.getElementById("asyncSoloCatch").addEventListener("click", asyncSoloCatch);
}