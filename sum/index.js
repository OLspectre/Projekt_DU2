
function sumOfAllNumbers() {
    let sum = 0;
    loopThroughNumberBoxes((currentBox, number) => {
        currentBox.classList.remove("marked");
        sum += number;
    });
    showSumOfAllNumbers.innerHTML = sum;
};


let container = document.getElementById("numbers");
let showSumOfAllNumbers = document.getElementById("sumResultAll");
let showSumOfMarked = document.getElementById("sumResultMarked");
let resetBtn = document.getElementById("reset");

let markedSum = 0;




createButton.addEventListener("click", function () {
    createNumberDivs(createNumberInput.value)
    sumOfAllNumbers();
});

container.addEventListener("click", (event) => {

    if (event.target.classList.contains("numberBoxes")) {

        event.target.classList.add("marked");

        let markedNumber = Number(event.target.textContent);
        markedSum += markedNumber;
        showSumOfMarked.textContent = markedSum;
    }
});

resetBtn.addEventListener("click", () => {
    markedSum = 0;
    loopThroughNumberBoxes((currentBox) => {
        currentBox.classList.remove("marked");
    });
    showSumOfMarked.textContent = "-";
});
