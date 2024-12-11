function addImage() {
    let numeroImagen = numeroAleatorio();
    let capa = document.getElementById("contenedor");
    capa.classList.add("imagen");
    let newImage = document.createElement("img");
    newImage.src = "img/" + numeroImagen + ".jpg";
    if (capa.firstChild) {
        capa.insertBefore(newImage, capa.firstChild);
    } else {
        capa.appendChild(newImage);
    }
}

function numeroAleatorio() {
    let numero = Math.floor(Math.random() * 5) + 1;
    console.log(numero);
    return numero;
}

window.onload = function () {
    document.getElementById("cargarImagen").addEventListener("click", addImage);
    numeroAleatorio();
}