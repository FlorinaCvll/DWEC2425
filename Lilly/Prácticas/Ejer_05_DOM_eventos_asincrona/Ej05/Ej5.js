window.onload = function () {

    let colores = document.querySelectorAll(".hijo");
    console.log(colores);
    console.log(colores);
    colores.forEach(function (cuadro) {
        cuadro.addEventListener('mouseover', function () {
            console.log("Entro");
            let color = cuadro.id;
            document.body.id = color;
        });

        cuadro.addEventListener('mouseout', function () {
            document.body.id = 'white';
        });
    });
    //console.log(ids);


}