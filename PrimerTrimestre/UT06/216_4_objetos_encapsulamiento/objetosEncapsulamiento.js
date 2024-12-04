function objetosEncapsulamiento() {
    class Person {
        name;

        constructor(name) {
            this.name = name;
        }

        introduceSelf() {
            console.log(`Hola soy ${this.name}`);
        }
    } // FIN class Person
    class Student extends Person {
        #year;

        constructor(name, year) {
            super(name);
            this.#year = year;
        }

        introduceSelf() {
            console.log(`Hola soy ${this.name} y estoy en el año ${this.#year}.`);
        }

        carStudyArchery() {
            console.log(this.#year > 1);
        }
    } // FIN class Studen
    const student = new Student("Summers", 2);
    student.introduceSelf();
    student.carStudyArchery();
}

window.onload = function () {
    document.getElementById("objetosEncapsulamiento").addEventListener("click", objetosEncapsulamiento);
}