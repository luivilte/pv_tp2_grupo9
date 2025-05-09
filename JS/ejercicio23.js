document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll("input[name='languaje']");
    const resultDiv = document.getElementById("resultado");

    radios.forEach(radio => {
        radio.addEventListener("change", function () {
            resultDiv.textContent = `Has seleccionado: ${this.value}`;
            console.log(`Opción seleccionada: ${this.value}`);
        });
    });
});