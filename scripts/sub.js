function createProblem() {
    let num1 = Math.abs(Math.ceil(Math.random()* 19));
    let num2 = Math.abs(Math.ceil(Math.random()* 19));
    let res = num1 - num2;
    let arrAnswers = [];
    let i = 0;
    while (i < 3){
        let num = Math.floor(Math.random()* 20);
        if (!arrAnswers.includes(num) && !arrAnswers.includes(res)){
            arrAnswers.push(num);
            i++
        }
    }
    arrAnswers.push(res);
    arrAnswers.sort(() => Math.random() - 0.5);
    document.getElementById("ans").textContent = "?";
    document.getElementById("choices").style.display = "flex";
    document.getElementById("ansImg").style.display = "none";
    displayProblem(num1, num2, arrAnswers);
    checkingAnswer(res);
    creatingImgs(num2, res);
}
createProblem();

function displayProblem(num1, num2, arr2){ 
    document.getElementById("firstNum").textContent = num1;
    document.getElementById("secondNum").textContent = num2;
    console.log(arr2);
    document.getElementById("choice1").textContent = arr2[0];
    document.getElementById("choice2").textContent = arr2[1];
    document.getElementById("choice3").textContent = arr2[2];
    document.getElementById("choice4").textContent = arr2[3];
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

function creatingImgs(num, result){
    document.getElementById("bigNum").innerHTML = "";
    document.getElementById("smallNum").innerHTML = "";
    console.log(result);
    let positiveResult = Math.abs(result);
    for (let i = 0; i < positiveResult; i++){
        document.getElementById("bigNum").innerHTML += `<img src="./resources/apple.jpeg" width="5%" />`;
    }
    for (let j = 0; j < num; j++){
        let subDiv = document.getElementById("smallNum");
        subDiv.innerHTML += `<img src="./resources/apple.jpeg" width="5%" />`;
        subDiv.classList.add("subImgs");
    }
}
// function creatingImgs(num, result){
//     document.getElementById("bigNum").innerHTML = "";
//     document.getElementById("smallNum").innerHTML = "";
//     console.log(result);
//     for (let i = 0; i < result; i++){
//         document.getElementById("bigNum").innerHTML += `<img src="./resources/apple.jpeg" width="5%" />`;
//     }
//     for (let j = 0; j < num; j++){
//         let subDiv = document.getElementById("smallNum");
//         subDiv.innerHTML += `<img src="./resources/apple.jpeg" width="5%" />`;
//         subDiv.classList.add("subImgs");
//     }
// }
