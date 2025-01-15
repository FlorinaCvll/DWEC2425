async function asyncFuncion() {
    let texto = await "Ya está";
    console.log(texto);
}

window.onload = function () {
    document.getElementById("asyncFuncion").addEventListener("click", asyncFuncion);
}