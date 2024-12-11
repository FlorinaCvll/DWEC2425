function aleatoriosMininoMaximo(minimo, maximo) {
    minimo = parseInt(minimo);
    maximo = parseInt(maximo);
    return parseInt(Math.random() * (maximo + 1 - minimo) + minimo);
}

function cambiarcolores() {
    for (let i = 1; i <= 10; i++) {
        let aleatorio = aleatoriosMininoMaximo(1, 10);
        for (let j = 0; j <= aleatorio; j++) {
            let barra = "celda" + i + '-' + j;
            let elem = document.getElementById(barra);
            if (elem) {
                elem.classList.add("color");
            }
        }
    }
}

function colorear() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 0; j < 10; j++) {
            let barra = "celda" + i + '-' + j;
            let elem = document.getElementById(barra);
            if (elem) {
                elem.classList.remove("color");
            }
        }

    }

}


function color() {
    setInterval(() => {
        colorear();
        cambiarcolores();
    }, 3000);

}


window.onload = function () {
    color();

}
