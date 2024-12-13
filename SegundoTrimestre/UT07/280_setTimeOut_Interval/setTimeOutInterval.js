function ejecutarSetTimeOut() {
    setTimeout(() => alert("Hola"), 5000);
    alert("Adios");
}

function functionDespues() {
    console.log("Hola");
    console.log("Adios");
}

function ejecutarTodoDespues() {
    setTimeout(() => functionDespues(), 5000)
}

function ejecutarSetInterval() {
    var cont = 0;
    let temp2 = setInterval(function () {
        console.log("Hola" + cont);
        cont++;
        if (cont >= 10) {
            clearInterval(temp2);
        }
    }, 1000)
    console.log("A ver donde sale");
}

window.onload = function () {
    document.getElementById("setTimeOut").addEventListener("click", ejecutarSetTimeOut);
    document.getElementById("setTimeOutTodo").addEventListener("click", ejecutarTodoDespues);
    document.getElementById("setInterval").addEventListener("click", ejecutarSetInterval);
}