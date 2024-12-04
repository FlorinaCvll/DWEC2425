var num = 0;
var valor = '';

function dibuja(i) {

    let id = i.target.id;
    let u = '';

    if (!isNaN(id)) {
        num = parseInt(id);
        return;
    } else if (id === "*") {
        valor = "*"
        return;
    } else if (id === "|") {
        valor = "|_|";
        return;
    }

    if (num > 0 && valor !== "") {
        switch (id) {
            case "cuadrado":
                u = cuadrado(num, valor);
                break;
            case "triangulo":
                u = triangulo(num, valor);
                break;
            case "rectangulo":
                u = rectangulo(num, valor);
                break;
        }
    } else {
        alert("Pulsa un número, luego * o | y por último una figura");
    }
    document.getElementById("estilo").textContent = u;

}

function cuadrado(num, cadena) {
    let u = '';
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            u += cadena;
        }
        u += "\n";
    }
    return u;
}

function rectangulo(num, cadena) {
    let u = '';
    for (let i = 0; i < num + 2; i++) {
        for (let j = 0; j < num; j++) {
            u += cadena;
        }
        u += "\n";
    }
    return u;
}

function triangulo(num, cadena) {
    let u = '';
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            u += cadena;
        }
        u += "\n";
    }
    return u;
}

function asignacion() {
    let elementos = document.getElementsByClassName("forma");

    for (let i = 0; i < elementos.length; i++) {
        elementos[i].addEventListener("click", function (i) {
            dibuja(i)
        });
    }
}

window.onload = function () {
    asignacion();
}