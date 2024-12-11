function recuperarScreen() {
    //Screen pertenece a Window
    //console.log(window.screeen.availHeight)
    console.log("AvailTop: " + screen.availTop);
    console.log("AvailLeft: " + screen.availLeft);
    console.log("AvailHeight: " + screen.availHeight);
    console.log("AvailWidth: " + screen.availWidth);
    console.log("ColorDepth: " + screen.colorDepth);
    console.log("orientation: " + screen.orientation);

}

window.onload = function () {
    document.getElementById("screen").addEventListener("click", recuperarScreen);
}