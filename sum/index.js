
let showSumOfAllNumbers = document.getElementById("sumResultAll");

function sumOfAllNumbers() {
    let allNumbers = document.querySelectorAll("#numbers div");
    let sum = 0;
    for (let currentNumber of allNumbers) {
        let number = Number(currentNumber.textContent)
        sum += number;
    }
    showSumOfAllNumbers.innerHTML = sum;
}

createButton.addEventListener("click", function () {
    createNumberDivs(createNumberInput.value)
    sumOfAllNumbers();
})

// Sum of targeted numbers