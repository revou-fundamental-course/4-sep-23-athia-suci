document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const sideLengthInput = document.getElementById("sideLength");
    const areaResult = document.getElementById("areaResult");

    calculateButton.addEventListener("click", function () {
        const sideLength = parseFloat(sideLengthInput.value);
        if (!isNaN(sideLength)) {
            const area = sideLength * sideLength;
            areaResult.textContent = area.toFixed(2);
        } else {
            areaResult.textContent = "Invalid Input";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const sideLengthInput = document.getElementById("sideLength");
    const perimeterResult = document.getElementById("perimeterResult");

    calculateButton.addEventListener("click", function () {
        const sideLength = parseFloat(sideLengthInput.value);
        if (!isNaN(sideLength)) {
            const perimeter = 4 * sideLength;
            perimeterResult.textContent = perimeter.toFixed(2);
        } else {
            perimeterResult.textContent = "Invalid Input";
        }
    });
});

