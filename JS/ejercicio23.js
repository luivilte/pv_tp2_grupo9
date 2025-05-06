document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll("input[name='language']");
    const resultDiv = document.getElementById("result");

    radios.forEach(radio => {
        radio.addEventListener("change", function () {
            resultDiv.textContent = `Has seleccionado: ${this.value}`;
            console.log(`Opción seleccionada: ${this.value}`);
        });
    });
});