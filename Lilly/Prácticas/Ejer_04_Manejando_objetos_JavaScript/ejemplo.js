function crearHijo(id, contenido) {
    let divHijo = document.createElement("div");
    divHijo.id = id;
    divHijo.textContent = contenido;
    let padre = document.getElementById("container");
    padre.appendChild(divHijo);
}

º
window.onload = () => {
    for (let i = 0; i < 5; i++) {
        crearHijo(i, i);
    }
};
