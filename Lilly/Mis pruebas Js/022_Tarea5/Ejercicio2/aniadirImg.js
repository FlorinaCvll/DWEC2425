function cambiar() {
    let div = document.createElement("div");
    div.classList.add("img-cont");

    let nuevaimag = document.createElement("img");
    nuevaimag.setAttribute('alt', 'Imagen');

    let numeroImg = Math.floor(Math.random() * 5) + 1;
    let url = 'img/' + numeroImg + '.jpg';
    nuevaimag.setAttribute('src', url);
    div.appendChild(nuevaimag);

    document.getElementById("imagenes").appendChild(div);

}


window.onload = function () {
    document.getElementById("cambiar").addEventListener("click", cambiar);
}