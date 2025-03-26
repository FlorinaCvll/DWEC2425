function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cambiarAltura(columna) {
    let valorAlturaAnterior = 0;
    let i = setInterval(function () {
        let altura = random(0, 8);
        if (valorAlturaAnterior < altura) {
            for (let j = valorAlturaAnterior; j <= altura; j++) {
                setTimeout(function () {
                    let idCelda = "celda" + columna + j;
                    document.getElementById(idCelda).classList.add("celda-lila");
                }, (j - valorAlturaAnterior) * 100); // Se aplica en intervalos de 100ms multiplicando por la diferencia de altura
            }
        } else {
            for (let j = valorAlturaAnterior; j >= altura; j--) {
                setTimeout(function () {
                    let idCelda = "celda" + columna + j;
                    document.getElementById(idCelda).classList.remove("celda-lila");
                }, (valorAlturaAnterior - j) * 100);
            }
        }
        valorAlturaAnterior = altura;
    }, 1000);
}

function actualizarColumnas() {
    for (let i = 1; i <= 10; i++) {
        cambiarAltura(i);
    }
}


window.onload = function () {
    actualizarColumnas();
}