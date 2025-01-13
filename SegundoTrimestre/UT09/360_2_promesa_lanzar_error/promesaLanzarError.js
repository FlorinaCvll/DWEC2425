
function promesaLanzarError(){
    var promesa = new Promise((resolver,rechazar)=>{
        throw new Error("La he liado parda");
    });

    promesa.then((respuesta)=>{
        console.log("Me ha ido bien");
    }).catch((error)=>{
        console.log("Me ha ido mal");
    })
}


window.onload = function(){
    document.getElementById("promesaLanzarError").addEventListener("click", promesaLanzarError);
}