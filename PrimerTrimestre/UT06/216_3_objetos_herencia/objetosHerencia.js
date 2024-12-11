function objetosHerencia() {
    class Person {
        name;

        constructor(name) {
            this.name = name;
        }

        introduceSelf() {
            console.log(`Hola soy ${this.name}`);
        }
    }

    const gil = new Person("Gil");
    gil.introduceSelf();

    // ************************

    class Profesor extends Person {
        teacher;

        constructor(name, teacher) {
            super();
            this.teacher = teacher;
        }

        introduceSelf() {
            console.log(`Hola soy ${this.name} y seré tu profesor
             de ${this.teacher}`);
        }

        grade(paper) {
            const nota = Math.floor(Math.random() * (5 - 1) + 1);
            console.log(`Tu nota es ${nota}`);
        }
    } // fin clase Person
    const profe = new Profesor("Walsh", "Psicología");
    profe.introduceSelf();
    profe.grade("mi tarea");
}


window.onload = function () {
    document.getElementById("objetosHerencia").addEventListener("click", objetosHerencia);
}