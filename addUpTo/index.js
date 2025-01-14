function markBoxes(currentBoxA, currentBoxB, markedBoxes) {
    currentBoxA.classList.add("marked");
    currentBoxB.classList.add("marked");

    markedBoxes.push(currentBoxA);
    markedBoxes.push(currentBoxB);
}

let container = document.getElementById("numbers");
let findBtn = document.getElementById("findNumbers");
let sumInputDOM = document.getElementById("sumInput");


findBtn.addEventListener("click", () => {
    let markedCount = 0;
    let sumTarget = Number(sumInputDOM.value);
    let markedBoxes = [];

    loopThroughNumberBoxes((currentBoxA, numberA) => {
        if (markedCount >= 2) return;

        loopThroughNumberBoxes((currentBoxB, numberB) => {

            if (currentBoxA !== currentBoxB && numberA + numberB === sumTarget) {

                if (!markedBoxes.includes(currentBoxA) && !markedBoxes.includes(currentBoxB)) {

                    markBoxes(currentBoxA, currentBoxB, markedBoxes);
                    markedCount = 2;
                }
            }
        });
    });
});