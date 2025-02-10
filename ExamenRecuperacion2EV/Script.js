const tablero = [
    [], [], [],
    [], [], [],
    [], [], []
]
console.log("Y tu tambien");

/*function rellenar(){
    tablero.forEach(tablero =>{

    })
}*/


function mostrarOcultar() {
    let a0 = document.getElementById("mostrar");
    ocultar = document.createElement(img);
    img.src = "./imagenes/ocultar.png";
    img.alt = ocultar;
    img.id = ocultar;
    a0.addEventListener("click", ocultar.appendChild(ocultar));
}


window.onload = function () {
    document.getElementById("a0").addEventListener("click", mostrarOcultar);
    alert("Esto se muestra");
}
console.log("Tu te ejecutas si o si");