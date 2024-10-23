function arrayForeach() {
    const nota = [5, 6, , , , 9, , 8, , 9, , 7, 8];
    nota.forEach(function (nota, i) {
        console.log(`La nota ${i} es ${nota}`);
    });
}

window.onload = function () {
    document.getElementById("arrayForEach").addEventListener("click", arrayForeach);
}