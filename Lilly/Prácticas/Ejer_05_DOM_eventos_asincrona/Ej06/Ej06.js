var intervalID;

function funcionamientoTradicional() {
    function cambiarLuces() {
        let luzRoja = document.getElementById("rojo");
        let luzAmarilla = document.getElementById("naranja");
        let luzVerde = document.getElementById("verde");
        console.log("Estoy en el general");
        if (luzAmarilla.classList.contains("amarillo")) {
            luzAmarilla.classList.remove("amarillo");
        }
        if (luzRoja.classList.contains("rojo")) {
            luzRoja.classList.remove("rojo");
        }
        if (luzVerde.classList.contains(verde)) {
            luzVerde.classList.remove("verde");
        }

        luzRoja.classList.add("rojo");
        setTimeout(function () {
            luzRoja.classList.remove("rojo");
            luzVerde.classList.add("verde");
        }, 6000);

        setTimeout(function () {
            luzVerde.classList.remove("verde");
            luzAmarilla.classList.add("amarillo");
        }, 11900);
        setTimeout(function () {
            luzAmarilla.classList.remove("amarillo");
        }, 14900);
    }

    intervalID = setInterval(cambiarLuces, 15000);
    cambiarLuces();
}

function intermitente() {
    console.log("Dentro de la función intermitente");

    function cambiarLuces() {
        let luzRoja = document.getElementById("rojo");
        let luzAmarilla = document.getElementById("naranja");
        let luzVerde = document.getElementById("verde");
        if (luzAmarilla.classList.contains("amarillo")) {
            luzAmarilla.classList.remove("amarillo");
        }
        if (luzRoja.classList.contains("rojo")) {
            luzRoja.classList.remove("rojo");
        }
        if (luzVerde.classList.contains(verde)) {
            luzVerde.classList.remove("verde");
        }
        luzRoja.classList.add("rojo");
        setTimeout(function () {
            luzRoja.classList.remove("rojo");
            luzVerde.classList.add("verde");
        }, 1000);

        setTimeout(function () {
            luzVerde.classList.remove("verde");
        }, 2000);
    }

    intervalID = setInterval(cambiarLuces, 2000);
    cambiarLuces();
}

function cederPaso() {
    function cambiarLuces() {
        let luzAmarilla = document.getElementById("naranja");
        let luzVerde = document.getElementById("verde");
        let luzRoja = document.getElementById("rojo");
        console.log("Estoy en el general");
        if (luzAmarilla.classList.contains("amarillo")) {
            luzAmarilla.classList.remove("amarillo");
        }
        if (luzRoja.classList.contains("rojo")) {
            luzRoja.classList.remove("rojo");
        }
        if (luzVerde.classList.contains(verde)) {
            luzVerde.classList.remove("verde");
        }
        luzAmarilla.classList.add("amarillo");
        setTimeout(function () {
            //luzRoja.classList.remove("rojo");
            //luzVerde.classList.remove("verde");
            luzAmarilla.classList.remove("amarillo");
        }, 1000);
    }

    intervalID = setInterval(cambiarLuces, 2100);
    cambiarLuces();
}

function deterFuncionamiento() {
    clearInterval(intervalID);
    console.log("Se ha detenido la funcion");
    let luzRoja = document.getElementById("rojo");
    let luzAmarilla = document.getElementById("naranja");
    let luzVerde = document.getElementById("verde");
    luzAmarilla.classList.add("fondo");
    luzRoja.classList.add("fondo");
    luzVerde.classList.add("fondo");
}

window.onload = function () {
    let colores = document.querySelectorAll(".luz");
    console.log(colores);
    colores.forEach(function (idColor) {
        idColor.addEventListener("click", function () {
            let color = idColor.id;
            console.log(color);
            if (color == "rojo") {
                clearInterval(intervalID);
                deterFuncionamiento();
                funcionamientoTradicional();
            } else if (color == "naranja") {
                clearInterval(intervalID);
                deterFuncionamiento();
                intermitente();
            } else if (color == "verde") {
                clearInterval(intervalID);
                deterFuncionamiento();
                cederPaso();
            }
        });
    });
};
