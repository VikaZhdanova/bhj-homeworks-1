let textArea = document.getElementById("editor");

textArea.textContent = localStorage.getItem("текст");

textArea.addEventListener("keyup", function () {
    localStorage.setItem("текст", textArea.value);
})
