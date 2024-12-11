window.onload = function () {
    let div = document.querySelector('div');
    let p = document.querySelector('p');
    let button = document.querySelector('button');

    div.addEventListener("click", () => console.log("click en div"));
    p.addEventListener("click", () => console.log("click en p"));
    button.addEventListener("click", () => console.log("click en botón"));
}