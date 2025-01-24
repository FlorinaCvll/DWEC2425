function ajaxGet() {
    let lista = document.querySelector('ul');
    fetch("../nifAleaorio.php?n=10&tipo=nie", {
        method: 'GET',
        mode: 'cors'
    })
        .then((res) => res.json())
        .then(datos => {
            for (let nie of datos) {
                let li = document.createElement('li');
                li.textContent = nie.numero;
                lista.appendChild(li);
            }
        })
        .catch((err) => {
            console.log("Error " + err);
        })
}

window.onload = function () {
    document.getElementById("ajaxGet").addEventListener("click", ajaxGet);
}