function ajaxBinario() {
    let main = document.querySelector('main');

    fetch("./Princess.jpg")
        .then(response => {
            if (response.ok) {
                return response.blob();
            } else {
                throw new Error("Error fetching the image.");
            }
        })
        .then(blob => {
            console.log(blob.type);
            let img = document.createElement("img");
            img.src = URL.createObjectURL(blob);
            main.textContent = "";
            main.appendChild(img);
        })
        .catch(error => {
            console.error('There was an error:' + error);
        });
}

window.onload = function () {
    document.getElementById("ajaxBinario").addEventListener("click", ajaxBinario);
}
