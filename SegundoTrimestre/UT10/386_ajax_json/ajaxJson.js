function ajaxJson() {
    let capaNIF = document.getElementById("nif");

    fetch("../nifAleatorio.php")
        //fecth("nif.json")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Los datos no llegaron illo");
            }
        })
        .then(listNIF => {
            capaNIF.textContent = listNIF[0]["Numero"]
        })
        .catch(error => {
            capaNIF.textContent = error;
        })

}

window.onload = function () {
    document.getElementById("ajaxJson").addEventListener("click", ajaxJson);
}