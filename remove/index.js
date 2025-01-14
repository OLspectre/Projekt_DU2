

let randomNumBtn = document.getElementById("newRandomNumber")
let showRandomNum = document.getElementById("showRandomNumber")
let removeBtn = document.getElementById("remove")
let showRemovedNum = document.getElementById("showRemovedNumber")

randomNumBtn.addEventListener("click", () => {
    let randomSelectedNumber = randomNumber(0, 100)

    loopThroughNumberBoxes((currentBox, number) => {
        showRandomNum.textContent = randomSelectedNumber;
        currentBox.classList.remove("marked")
        if (number == randomSelectedNumber) {
            currentBox.classList.add("marked");
        }
    });
});

removeBtn.addEventListener("click", () => {
    let counter = 0;
    let foundMatch = false;

    loopThroughNumberBoxes((currentBox) => {
        if (currentBox.textContent == showRandomNum.textContent) {
            foundMatch = true;
            counter++;
            showRemovedNum.textContent = `${showRandomNum.textContent} was removed ${counter} times`;

            if (currentBox.classList.contains("marked")) {
                currentBox.classList.add("removed");
                currentBox.textContent = "X";
            }
        }
    });

    if (!foundMatch) {
        showRemovedNum.textContent = `Nothing to remove`;
    }
});







