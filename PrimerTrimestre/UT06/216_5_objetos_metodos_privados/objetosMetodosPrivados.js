function objetosMetodosPrivados() {
    class Example {
        somePublicMethod() {
            this.#somePrivateMethod();
        }

        #somePrivateMethod() {
            console.log("¿Me llamaste?");
        }
    } // Fin class Example
    const myExample = new Example();
    myExample.somePublicMethod();
    // myExample.#somePrivateMethod();
    /*
    * Uncaught SyntaxError: Private field
    * '#somePrivateMethod' must be declared in an enclosing class
    * */
}

window.onload = function () {
    document.getElementById("objetosMetodosPrivados").addEventListener("click", objetosMetodosPrivados);
}