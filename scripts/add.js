function createProblem() {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    console.log(num1, num2);
    let res = num1 + num2;
    let arrAnswers = [];
    let i = 0;
    while (i < 3) {
        let num = Math.ceil(Math.random() * 19);
        if (!arrAnswers.includes(num) && num != res) {
            arrAnswers.push(num);
            i++;
        }
    }
    arrAnswers.push(res);
    arrAnswers.sort(() => Math.random() - 0.5);
    document.getElementById("ans").textContent = "?";
    document.getElementById("choices").style.display = "flex";
    document.getElementById("ansImg").style.display = "none";
    displayProblem(num1, num2, arrAnswers);
    checkingAnswer(res);
}
createProblem();

function displayProblem(num1, num2, arr) {
    document.getElementById("firstNum").textContent = num1;
    document.getElementById("secondNum").textContent = num2;
    document.getElementById("choice1").textContent = arr[0];
    document.getElementById("choice2").textContent = arr[1];
    document.getElementById("choice3").textContent = arr[2];
    document.getElementById("choice4").textContent = arr[3];
}

document.getElementById("newGamebtn").addEventListener("click", createProblem);


function checkingAnswer(result) {
    console.log(result);
    let choicesDivs = document.querySelectorAll(".choicesDivs");
    choicesDivs.forEach((choice) => {
        choice.addEventListener("click", (event) => {
            if (event.target.textContent == result) {
                document.getElementById("choices").style.display = "none";
                document.getElementById("ansImg").style.display = "block";
                document.getElementById("ansImg").src = "./resources/yes.PNG";
                document.getElementById("ans").textContent = result;
                event.target.style.background = "green";
            } else {
                event.target.style.background = "red";
            }
            setTimeout(() => {
                event.target.style.background = "";
                // if (event.target.textContent != result) {
                //     event.target.style.display = "none";
                // }
            }, 1000);
            let remainingChoices = document.querySelectorAll(
                ".choicesDivs:not([style='display: none;'])"
            );
            if (remainingChoices.length == 1) {
                document.getElementById("ans").textContent = result;
                document.getElementById("ansImg").style.display = "block";
                document.getElementById("ansImg").src = "./resources/yes.PNG";
            }
        });
    });
}
