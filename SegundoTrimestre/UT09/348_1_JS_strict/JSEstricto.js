function ponerNoEstricto() {
    x = 9;
    console.log(x);
}

function ponerEnEstricto() {
    "use strict";
    y = 0;
    console.log(y);
}

window.onload = function () {
    document.getElementById("ponerEnEstricto").addEventListener("click", ponerEnEstricto);
    document.getElementById("ponerNoEstricto").addEventListener("click", ponerNoEstricto);
}