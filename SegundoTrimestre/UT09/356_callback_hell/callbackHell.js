

function cargarMapa(componente,callback) {
    alert("Cargando mapa...");
    let carga = true;
    if(carga == true){
        componente.setAttribute("src","./mapaSinColor.png");
        console.log("Mapa... Cargado");
        return callback(false);
    }else{
        console.log("Error al cargar el mapa");
        return callback(true);
    }
}

function colorear(componente,callback) {
    alert("Coloreando mapa...");
    let color = true;
    if (color == true) {
        componente.setAttribute("src","mapaConColor.png");
        console.log("Mapa... Coloreado");
        return callback(false);
    } else {
        console.log("Error al caolorear");
        return callback(true);
    }
}

function animar(componente) {
    alert("Animando mapa...");
    componente.classList.add("animaComponente");
    console.log("Mapa... Animado");
}



window.onload = function(){
    let boton = document.getElementById("boton");

    boton.addEventListener("click", function(){
        let componente = document.getElementById("mapa");
        cargarMapa(componente, function(error){
            if (error) {
                console.log("__Error al cargar el mapa__");
            } else {
                colorear(componente, function(error){
                    if (error) {
                        console.log("__Error al colorear__");
                    } else {
                        animar(componente);
                    }
                });
            }
        })
    })
}