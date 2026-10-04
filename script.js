const contador = document.getElementById("contador");

campoTexto = document.getElementById("Texto");

campoTexto.addEventListener("input", function() {

    if (campoTexto.value.trim() === "") {
        contador.textContent = "0";
    } else {
        const texto = campoTexto.value;
        const palavras = texto.trim().split(/\s+/).filter(palavra => palavra.length > 0);
        contador.textContent = palavras.length;
    }

    console.log("texto: ", texto);
});