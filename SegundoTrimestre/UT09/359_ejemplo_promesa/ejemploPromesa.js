
function ejemploPromesa() {
    var promesa = new Promise((resolver,rechazar)=>{
        let n1=1;
        let n2=2;
        if (n1 == n2) {
            resolver("¡Son iguales!");
        } else {
            rechazar(Error("Algo raro ha pasado"));
            //rechazar("Algo raro ha pasado");
        }
    });

    promesa.then((respuesta)=>{
        console.log("Se muestra el mensaje --> " + respuesta);
    })
}


window.onload = function(){
    document.getElementById("ejemploPromesa").addEventListener("click", ejemploPromesa);
}