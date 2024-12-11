function asig() {
    let num = parseInt(document.getElementById("numero").value);
    let fig = document.getElementById("fig").value;
    let val = document.getElementById("val").value;
    let u = '';
    if (num >= 11 || num < 1) {
        alert("El numero no puede ser mayor de 10 y menor que 0");
    } else {
        if (fig === "rectangulo") {
            u = rectangulo(num, val);
        } else if (fig === "cuadrado") {
            u = cuadrado(num, val);
        } else if (fig === triangulo) {
            u = triangulo(num, val);
        }
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

window.onload = function () {
    document.getElementById("registrar").addEventListener("click", function (event) {
        event.preventDefault();
        asig();
    });
}