function pintaCara() {
    cara = "   __________\n" +
        "  ||||||||||||\n" +
        "  ||||||||||||\n" +
        "  |\t     |\n" +
        "  | \'\'\'  \'\'\' |\n" +
        "  | (.)  (.) |\n" +
        "  |   ( )    |\n" +
        "   \\   ¨    /\n" +
        "    |  -¬   |\n" +
        "    ¨\\     /¨\n" +
        "      |___|\n\n" +
        "Enjuto Mojamouto";
    document.getElementById("cara").textContent = cara;
}

window.onload = function () {
    pintaCara();
}