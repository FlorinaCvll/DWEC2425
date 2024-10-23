function ordenaArrayLocal() {
    alert("Flecha");
    const palabras = ["Ñu", "Águila", "Boa", "Oso", "Marsopa", "Nutria"];
    console.log(palabras);
    palabras.sort((a, b) => a.localeCompare(b));
    console.log(palabras);
}

function ordenaArrayLocalAnonima() {
    alert("Anonima");
    const palabras = ["Ñu", "Águila", "Boa", "Oso", "Marsopa", "Nutria"];
    console.log(palabras);
    palabras.sort(function (a, b) {
        return a.localeCompare(b);
    });
    console.log(palabras);
}

window.onload = function () {
    document.getElementById("ordenaArrayLocal").addEventListener("click", ordenaArrayLocal);
    document.getElementById("ordenaArrayLocalAnonima").addEventListener("click", ordenaArrayLocalAnonima);
}

