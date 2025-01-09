

let randomNumBtn = document.getElementById("newRandomNumber")
let showRandomNum = document.getElementById("showRandomNumber")
let removeBtn = document.getElementById("remove")
let showRemovedNum = document.getElementById("showRemovedNumber")



randomNumBtn.addEventListener("click", () => {

    let randomSelectedNumber = randomNumber(1, 100)
    for (let currentNumber of document.getElementsByClassName("numberBoxes")) {
        let number = Number(currentNumber.textContent)

        if (number == randomSelectedNumber) {
            currentNumber.classList.add("marked");
            // currentNumber.style.backgroundColor = "orange";
            console.log(currentNumber.textContent);
        }
    }
});







