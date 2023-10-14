function createProblem() {
    let num1 = Math.abs(Math.ceil(Math.random() * 11));
    let arrNum = [];
    arrNum.push(num1);
    let j = 0;
    while (j < 1){
        let num2 = Math.abs(Math.ceil(Math.random()* 144));
        if (num2 % arrNum[0] == 0){
            arrNum.push(num2);
            j++;
        }
    }
    document.getElementById("ansImg").style.display = "none";
    document.getElementById("ans").style.backgroundColor = "antiquewhite";
    displayProblem(arrNum);
}
createProblem();

function displayProblem(arr) {
    document.getElementById("firstNum").textContent = arr[1];
    document.getElementById("secondNum").textContent = arr[0];
}
document.getElementById("newGamebtn").addEventListener("click", () => {
    createProblem();
    resetAnswer();
});
document.getElementById("checkItbtn").addEventListener("click", () => {
    checkAnswer();
});

function checkAnswer() {
    let num1 = parseInt(document.getElementById("firstNum").textContent);
    let num2 = parseInt(document.getElementById("secondNum").textContent);
    let res = num1 / num2;
    let resInput = document.getElementById("ans");
    if (parseInt(resInput.value) === res) {
        resInput.style.backgroundColor = "green";
        document.getElementById("ansImg").style.display = "block";
        document.getElementById("ansImg").src = "./resources/bravo.jpg";
    } else {
        resInput.style.backgroundColor = "red";
        resInput.value = res;
    }
}

function resetAnswer() {
    let resInput = document.getElementById("ans");
    resInput.style.backgroundColor = "antiquewhite";
    resInput.value = "";
    document.getElementById("ansImg").style.display = "none";
}
