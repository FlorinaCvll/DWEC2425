let tablero = [, "android", "fuchsia", "ios"]; // array de imágenes para cargar con el primer elemento vacío para que el array empiece en 1
let vidas = 1; // variable para las vidas
let imgUNo = ""; // variable para la primera imagen
let imgDos = ""; // variable para la segunda imagen


function comprobarColocados() {
    let colocados = true; // variable para comprobar si están colocados
    for (let i = 1; i <= 9; i++) { // bucle para recorrer las imágenes
        let alt = document.getElementById("img" + i).getAttribute("alt"); // atributo alt de la imagen
        let src = document.getElementById("img" + i).getAttribute("src"); // atributo src de la imagen
        if (alt !== src) { // si el alt es diferente al src
            return false; // devolver falso
        }
    }
    if (colocados) { // si están colocados
        alert("¡Enhorabuena! Has completado el puzzle"); // mensaje de enhorabuena
        let imgs = document.getElementsByClassName("img"); // array de imágenes
        for (let i = 1; i <= imgs.length; i++) { // bucle para recorrer las imágenes
            document.getElementById("img" + i).classList.add("completado"); // añadir la clase completado
        }
    }
    /*
    Este código verifica si las imágenes están colocadas correctamente (es decir, si su atributo "alt"
    coincide con su atributo "src"), y en caso de éxito, muestra un mensaje de felicitación y aplica un estilo adicional.

    1. **Inicialización de la variable "colocados":**
       - Se define `colocados` como `true` inicialmente, asumiendo que las imágenes están correctamente colocadas.

    2. **Recorrido de todas las imágenes (bucle "for"):**
       - El bucle itera desde 1 hasta 9, presumiblemente porque se espera que haya exactamente 9 imágenes con IDs
         como "img1", "img2", ..., "img9".
       - En cada iteración:
         - Se obtiene el atributo `alt` de la imagen actual usando `getAttribute("alt")`.
         - Se obtiene el atributo `src` (la ruta de la imagen) de la misma forma.
         - Se comprueba si `alt` es distinto de `src`. Si son diferentes, esto significa que la imagen no está en su posición correcta:
           - Se devuelve `false` de inmediato, saliendo de la función. Esto implica que aún no se han colocado todas las imágenes correctamente.

    3. **Si todas las imágenes están colocadas correctamente:**
       - Si el bucle completa todas sus iteraciones sin encontrar discrepancias, significa que todas las imágenes tienen `alt` igual a `src`.
       - Se muestra un mensaje de alerta con `alert("¡Enhorabuena! Has completado el puzzle")`.

    4. **Aplicación de la clase "completado":**
       - Se seleccionan todas las imágenes con la clase CSS "img" utilizando `document.getElementsByClassName("img")`.
       - Se recorre este arreglo con otro bucle `for`.
       - Para cada imagen, se añade la clase CSS `completado` con `classList.add("completado")`.
         Esta clase puede utilizarse para estilizar las imágenes completadas, por ejemplo, añadiendo un borde especial o cambiando el color.

    Este código es adecuado para juegos o aplicaciones donde el usuario debe completar un puzzle de imágenes.
    La función de verificación garantiza que solo se felicite al usuario y se apliquen estilos adicionales cuando
    todas las imágenes estén correctamente colocadas.
    */
}


function comprobarVidas(imgUnoLocal, imgDosLocal) {
    let pierdeVida = true; // variable para comprobar si pierde vida
    let altUno = document.getElementById(imgUnoLocal).getAttribute("alt"); // atributo alt de la imagen uno
    let srcUno = document.getElementById(imgUnoLocal).getAttribute("src"); // atributo src de la imagen uno
    let altDos = document.getElementById(imgDosLocal).getAttribute("alt"); // atributo alt de la imagen dos
    let srcDos = document.getElementById(imgDosLocal).getAttribute("src"); // atributo src de la imagen dos
    if (altUno !== srcDos || altDos !== srcUno) { // si los atributos no coinciden
        pierdeVida = false; // no pierde vida
    } else {
        document.getElementById("dino" + vidas).setAttribute("src", "./Z_imagenes_ENTREGAR/dino_rojo.png"); // cambiar la imagen del dinosaurio
        vidas++; // incrementar las vidas
    }
    if (vidas === 4) { // si las vidas son 4
        cargarIMGs(); // cargar las imágenes
        descolocarIMG(); // descolocar las imágenes
        let imgDINOS = document.getElementsByClassName("dino"); // array de dinosaurios
        for (let i = 1; i <= imgDINOS.length; i++) { // bucle para recorrer los dinosaurios
            imgDINOS[i].setAttribute("src", "./Z_imagenes_ENTREGAR/dino_verde.png"); // cambiar la imagen del dinosaurio
        }
        vidas = 1; // reiniciar las vidas
    }


    /*Descripción general del código
Este fragmento parece ser parte de un juego o dinámica interactiva en la que hay imágenes (probablemente relacionadas con dinosaurios) y el jugador pierde vidas si ciertas condiciones se cumplen. Cuando las vidas llegan a un límite, se reinician y se actualizan las imágenes.

Memoria y lógica
Variables:

pierdeVida: Almacena el estado de si se pierde vida o no, inicializada en true y modificada según las condiciones del juego.

altUno, srcUno, altDos, srcDos: Obtienen atributos alt y src de imágenes específicas para compararlas posteriormente.

vidas: Contador que determina las vidas del jugador.

Lógica:

Se utiliza para comparar las imágenes mediante sus atributos alt y src. Si los atributos no coinciden, el jugador no pierde vida.

Si las imágenes coinciden, se actualiza una imagen representativa del estado (dino_rojo.png) y se incrementan las vidas.

Cuando las vidas llegan a 4, el estado del juego se reinicia, se recargan las imágenes y se actualizan a dino_verde.png.

Algoritmo
Paso inicial: Se define si el jugador pierde vida al comparar los atributos de dos imágenes (alt y src).

Condicional principal: Si los atributos no coinciden (altUno !== srcDos || altDos !== srcUno), pierdeVida se establece en false. De lo contrario:

Se actualiza la imagen del dinosaurio al estado rojo.

Se incrementa el contador de vidas.

Reinicio: Cuando vidas llega a 4:

Se ejecutan las funciones cargarIMGs() y descolocarIMG() (presumiblemente para reordenar las imágenes).

Mediante un bucle, se actualizan todas las imágenes de dinosaurios a dino_verde.png.

Se reinicia el contador de vidas a 1.

¿Por qué y para qué?
Este código busca mantener la lógica del juego basada en los atributos de las imágenes. Las comparaciones entre los atributos determinan las acciones del jugador (ganar o perder vidas). Es ideal para crear dinámicas interactivas que fomenten la atención y el análisis visual del usuario.

¿Cómo funciona?
El código obtiene los atributos de las imágenes (alt y src) mediante getAttribute().

Evalúa las condiciones con estructuras if para decidir la lógica del juego (pierde vida o avanza).

Utiliza funciones como cargarIMGs() y descolocarIMG() para realizar cambios visuales en el estado del juego.

Un bucle for recorre los elementos y actualiza la visualización de los dinosaurios cuando las vidas se reinician.
    * */
}

function cambiarIMGs(element) {
    if (imgUNo === "") { // si la primera imagen está vacía
        imgUNo = element.target.id; // asignar la imagen uno a la variable
    } else {
        imgDos = element.target.id; // asignar la imagen dos  a la variable
        let rutaImgUno = document.getElementById(imgUNo).getAttribute("src"); // obtener la ruta de la imagen uno
        let rutaImgDos = document.getElementById(imgDos).getAttribute("src"); // obtener la ruta de la imagen dos
        document.getElementById(imgUNo).setAttribute("src", rutaImgDos); // cambiar la imagen uno por la imagen dos
        document.getElementById(imgDos).setAttribute("src", rutaImgUno); // cambiar la imagen dos por la imagen uno
        comprobarVidas(imgUNo, imgDos); // comprobar las vidas
        imgUNo = ""; // vaciar la variable porque ya se ha utilizado
        imgDos = ""; // vaciar la variable porque ya se ha utilizado
        comprobarColocados(); // comprobar si están colocadas
    }
    /*
 Este fragmento de código gestiona el intercambio de imágenes entre dos elementos HTML y realiza verificaciones adicionales.
 El proceso se lleva a cabo en los siguientes pasos:

 1. **Verificar si la primera imagen está vacía:**
    - Si la variable `imgUNo` es una cadena vacía (""), significa que aún no se ha seleccionado ninguna imagen.
    - Se asigna el identificador del elemento (`element.target.id`) a la variable `imgUNo`, indicando que esta es la primera imagen seleccionada.

 2. **Cuando ya se ha seleccionado la primera imagen:**
    - Si `imgUNo` ya tiene un valor, significa que se ha seleccionado una segunda imagen (`imgDos`).
    - Se asigna el identificador del elemento (`element.target.id`) a la variable `imgDos`.

 3. **Intercambiar las rutas de las imágenes:**
    - Se obtiene la ruta actual (`src`) de las dos imágenes seleccionadas:
      - `rutaImgUno` para la primera imagen (`imgUNo`).
      - `rutaImgDos` para la segunda imagen (`imgDos`).
    - Se intercambian las rutas `src` entre las dos imágenes:
      - La primera imagen (`imgUNo`) ahora mostrará la imagen de la segunda (`imgDos`).
      - La segunda imagen (`imgDos`) ahora mostrará la imagen de la primera (`imgUNo`).

 4. **Realizar verificaciones adicionales:**
    - Se llama a la función `comprobarVidas(imgUNo, imgDos)` para verificar algún estado relacionado con "vidas" (posiblemente en un contexto de juego).
    - Se llama a la función `comprobarColocados()` para verificar si las imágenes están correctamente colocadas en sus posiciones finales.

 5. **Limpiar las variables:**
    - Tanto `imgUNo` como `imgDos` se restablecen a cadenas vacías ("") para prepararse para futuras selecciones de imágenes.

 Este código parece estar diseñado para un juego o una aplicación interactiva donde las imágenes pueden ser intercambiadas por los usuarios, y se realizan comprobaciones para mantener la lógica del sistema (como "vidas" o "colocación correcta").
 */

}

function devolverNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // devolver un número aleatorio entre min y max
}

function cargarIMGs() {
    let numIMG = devolverNum(1, 3); // número aleatorio entre 1 y 3
    let img = document.getElementsByClassName("img"); // array de imágenes para cargar
    for (let i = 1; i <= img.length; i++) {
        let valorIMG = "./Z_imagenes_ENTREGAR/" + tablero[numIMG] + "_" + i + ".png"; // ruta de la imagen
        document.getElementById("img" + i).setAttribute("src", valorIMG); // asignar la ruta de la imagen
        document.getElementById("img" + i).setAttribute("alt", valorIMG); // asignar la ruta de la imagen
    }
    /*
Este código tiene como objetivo asignar dinámicamente las rutas de imágenes a los elementos HTML con
IDs específicos (en este caso, "img1", "img2", ..., hasta "imgN", donde N es el número de imágenes).

1. Se obtiene un número aleatorio (`numIMG`) entre 1 y 3 utilizando la función devolverNum(1, 3).
   Este número se usará para seleccionar una categoría o conjunto de imágenes específico
   (por ejemplo, una carpeta o prefijo diferente en el sistema de rutas).

2. Se seleccionan todos los elementos HTML con la clase CSS "img" utilizando
   `document.getElementsByClassName("img")`, lo cual devuelve un arreglo de dichos elementos.
   Esto permite trabajar dinámicamente con todas las imágenes que compartan esta clase.

3. El bucle `for` recorre cada imagen del arreglo, desde la primera hasta la última:
   - `i` comienza en 1 y se incrementa hasta alcanzar la longitud del arreglo (`img.length`),
     lo que garantiza que todas las imágenes se procesen.

4. Para cada iteración:
   - Se construye dinámicamente la ruta de la imagen (`valorIMG`) concatenando la base del directorio
     ("./Z_imagenes_ENTREGAR/"), el elemento del array `tablero` en la posición seleccionada aleatoriamente (`numIMG`),
     un guion bajo, y el número de la iteración (`i`). Esto genera rutas como:
       "./Z_imagenes_ENTREGAR/categoria_1.png",
       "./Z_imagenes_ENTREGAR/categoria_2.png",
       y así sucesivamente.
   - La ruta resultante se asigna al atributo `src` del elemento HTML con el ID "img" seguido del número
     de la iteración (por ejemplo, "img1", "img2", ..., "imgN").
   - Además, se asigna el mismo valor al atributo `alt` del elemento, lo cual sirve como texto alternativo
     para mejorar la accesibilidad y proporcionar información en caso de que la imagen no se pueda cargar.

Este código es útil en aplicaciones que necesitan cargar imágenes dinámicamente desde diferentes
categorías o conjuntos de manera automatizada, asegurándose de que cada imagen tenga su ruta y texto
alternativo correctamente asignados.
*/

}

function descolocarIMG() {
    for (let i = 1; i <= 100; i++) {
        let imagenUNODescolocada = "img" + devolverNum(1, 9); // imagen uno descolocada
        let imagenDOSDescolocada = "img" + devolverNum(1, 9); // imagen dos descolocada
        let rutaIMGUno = document.getElementById(imagenUNODescolocada).getAttribute("src"); // ruta de la imagen uno
        let rutaIMGDos = document.getElementById(imagenDOSDescolocada).getAttribute("src"); // ruta de la imagen dos
        document.getElementById(imagenUNODescolocada).setAttribute("src", rutaIMGDos); // cambiar la imagen uno por la imagen dos
        document.getElementById(imagenDOSDescolocada).setAttribute("src", rutaIMGUno); // cambiar la imagen dos por la imagen uno
    }
    /*
Este bucle "for" realiza un total de 100 iteraciones (desde i = 1 hasta i = 100 inclusive).
En cada iteración, se intercambian las imágenes asociadas a dos elementos HTML seleccionados aleatoriamente.
El proceso se desglosa en los siguientes pasos:

1. Se generan identificadores dinámicos para dos elementos "imgX", donde X es un número aleatorio entre 1 y 9.
   Esto se logra concatenando el prefijo "img" con un número generado por la función devolverNum(1, 9).

2. Usando los identificadores generados, se obtiene la ruta actual ("src") de cada imagen utilizando
   la función `getAttribute("src")` aplicada a los elementos HTML correspondientes.

3. Luego, se realiza un intercambio cruzado de las rutas "src" entre ambos elementos:
   - La imagen del primer elemento es reemplazada por la imagen del segundo.
   - La imagen del segundo elemento es reemplazada por la imagen del primero.

Este proceso se repite 100 veces, lo que produce una mezcla aleatoria de imágenes entre los elementos
con IDs en el rango "img1" a "img9". Este comportamiento podría ser útil en aplicaciones o juegos interactivos,
por ejemplo, para desordenar imágenes de manera visualmente aleatoria.
*/

}


window.onload = function () {
    let imgs = document.getElementsByClassName("img"); // array de imágenes
    for (let i = 1; i <= imgs.length; i++) { // cambiar la condición para incluir la última imagen
        let idIMG = "img" + i; // id de la imagen
        document.getElementById(idIMG).addEventListener("click", cambiarIMGs); // asignar evento click a la imagen
    }
    cargarIMGs(); // cargar imágenes
    descolocarIMG(); // descolocar imágenes
}