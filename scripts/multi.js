function createProblem() {
    let num1 = Math.ceil(Math.random() * 9);
    let num2 = Math.ceil(Math.random() * 9);
    document.getElementById("ansImg").style.display = "none";
    document.getElementById("ans").style.backgroundColor = "antiquewhite";
    displayProblem(num1, num2);
    // remove checkAnswer call from here
}
createProblem();
function displayProblem(num1, num2) {
    document.getElementById("firstNum").textContent = num1;
    document.getElementById("secondNum").textContent = num2;
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
    let res = num1 * num2;
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
