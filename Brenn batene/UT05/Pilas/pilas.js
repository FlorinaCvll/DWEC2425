document.addEventListener('DOMContentLoaded', (event) => {
    function funcionA() {
        console.log("Función A");
        funcionB();
        console.log("Fin Función A");
    }

    function funcionB() {
        console.log("Función B");
        funcionC();
        console.log("Fin Función B");
    }

    function funcionC() {
        console.log("Función C");
    }

    funcionA();

    function inicio() {
        console.log("Inicio");
        primeraFuncion();
        console.log("Fin Inicio");
    }

    function primeraFuncion() {
        console.log("Primera Función");
        segundaFuncion();
        console.log("Fin Primera Función");
    }

    function segundaFuncion() {
        console.log("Segunda Función");
    }

    inicio();
});