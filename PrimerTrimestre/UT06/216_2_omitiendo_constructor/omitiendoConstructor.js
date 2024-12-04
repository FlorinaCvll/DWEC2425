function omitiendoConstructor() {
    class Animal {
        sleep() {
            console.log("zzzzzzz");
        }
    }

    const spot = new Animal();
    spot.sleep();
}


window.onload = function () {
    document.getElementById("omitiendoConstructor").addEventListener("click", omitiendoConstructor);
}