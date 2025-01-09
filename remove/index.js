

let randomNumBtn = document.getElementById("newRandomNumber")
let showRandomNum = document.getElementById("showRandomNumber")
let removeBtn = document.getElementById("remove")
let showRemovedNum = document.getElementById("showRemovedNumber")



randomNumBtn.addEventListener("click", () => {
    let randomSelectedNumber = randomNumber(1, 100)

    loopThroughNumberBoxes((currentBox, number) => {
        showRandomNum.textContent = randomSelectedNumber;
        currentBox.classList.remove("marked")
        if (number == randomSelectedNumber) {
            currentBox.classList.add("marked");
        }
    });
});

// removeBtn.addEventListener("click", () => {

//     let randomSelectedNumber = randomNumber(1, 100)
//     console.log(randomSelectedNumber);

//     for (let currentNumber of document.getElementsByClassName("numberBoxes")) {
//         let number = Number(currentNumber.textContent);

//         showRandomNum.textContent = randomSelectedNumber;
//         currentNumber.classList.remove("marked")
//         if (number == randomSelectedNumber) {
//             currentNumber.classList.add("marked");

//             // currentNumber.style.backgroundColor = "orange";
//             console.log(currentNumber.textContent);
//         }
//     }
// });







