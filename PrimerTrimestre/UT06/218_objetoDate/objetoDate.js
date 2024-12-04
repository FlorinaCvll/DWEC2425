function objetoDate() {
    let today = new Date();
    console.log("new Date(); → " + today);
    let datum = new Date(2022, 5, 27, 18, 12, 0, 2);
    console.log("Date(2022,5,27,18,12,0,2); → " + datum);
    let secondDate = new Date(2022, 5, 27);
    console.log("Date(2022,5,27); → " + secondDate);
    console.log("secondDate: " + secondDate.getDate());
    console.log("secondDate.getUTCDate → " + secondDate.getUTCDate());
}

window.onload = function () {
    document.getElementById("objetoDate").addEventListener("click", objetoDate);
}