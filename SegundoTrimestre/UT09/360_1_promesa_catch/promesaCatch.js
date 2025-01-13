
function promesaCatch() {
    var promesa = new Promise((resolver,rechazar)=>{
        let n1=2;
        let n2=3;
        if (n1 == n2) {
            resolver("¡Son iguales!");
        } else {
            rechazar(Error("Algo raro ha pasado"));
            //rechazar("Algo raro ha pasado");
        }
    });

    promesa.then((respuesta)=>{
        console.log(respuesta);
    }).catch((error)=>{
        console.log(error.message);
    })

    console.log("Esto se ejecuta antes que la promesa");
}


window.onload = function(){
    document.getElementById("promesaCatch").addEventListener("click", promesaCatch);
}