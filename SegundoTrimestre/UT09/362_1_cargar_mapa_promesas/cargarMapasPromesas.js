function cargarMapa(componente) {
    let promesa = new Promise((resolve, reject) => {
        alert("Cargando mapa...");
        let carga = true;
        if (carga) {
            componente.setAttribute("src", "./mapaSinColor.png");
            console.log("____");
            resolve("RESOLVER: mapa cargado");
        } else {
            console.log("____Error al cargar el mapa____");
            reject("RECHAZAR: error al cargar el mapa");

        }
    });
    return promesa;
}

function colorear(componente) {
    let promesa = new Promise((resolve, reject) => {
        alert("Coloreando mapa...");
        let carga = true;
        if (carga) {
            componente.setAttribute("src", "./mapaConColor.png");
            console.log("____Mapa coloreado____");
            resolve("RESOLVER: mapa coloreado");
        } else {
            console.log("____Error al colorear el mapa____");
            reject("RECHAZAR: error al colorear el mapa");
        }
    });
    return promesa;
}

function animar(componente) {
    let promesa = new Promise((resolve, reject) => {
        alert("Animando mapa...");
        let animar = true;
        if (animar) {
            componente.classList.add("animaComponente");
            console.log("____Anima componente____");
            resolve("RESOLVER: anima componente");
        } else {
            console.log("____Error al animar____");
            reject("RECHAZAR: error al animar el componente");
        }
    });
    return promesa;
}

window.onload = function () {
    let boton = document.getElementById("boton");
    boton.addEventListener("click", function (ev) {
        ev.preventDefault();
        let componente = document.getElementById("mapa");

        cargarMapa(componente)
            .then((mensaje) => {
                console.log(mensaje);
                return colorear(componente);
            })
            .then((mensaje2) => {
                console.log(mensaje2);
                return animar(componente);
            })
            .catch(error => console.log(error));
    });
}
