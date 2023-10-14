// let currentQuestion = 0;
// let question = document.getElementById("question");
// let answers = document.getElementById("answers");
// document.getElementById('submit').addEventListener('click', submit)
// document.getElementById('next').addEventListener('click', nextQuestion)
// document.getElementById('prev').addEventListener('click', preiousQuestion)
// let score = 0;
// renderQuestion();

// function renderQuestion() {
//     question.textContent = (currentQuestion + 1) + ") " + questions[currentQuestion].question;
//     answers.innerHTML = '';
//     questions[currentQuestion].options.forEach(answer => {
//         answers.innerHTML +=
//             `
//         <div class="col-6">
//             <div id=${answer.replace(/\s+/gm, '')} class="rounded py-2 form-check w-50 d-flex align-items-center ps-5">
//                 <input class="form-check-input" type="radio" name="answer" id=${answer.toLocaleLowerCase()} value="${answer.replace(/\s+/gm, '')}">
//                 <label class="form-check-label" for=${answer.toLocaleLowerCase()}>
//                     ${answer}
//                 </label>
//             </div>
//         </div>
//         `
//     })
// }
let currentQuestion = 0;
let questionNumber = 0;
let question = document.getElementById("question");
let answers = document.getElementById("answers");
document.getElementById("submit").addEventListener("click", submit);
document.getElementById("next").addEventListener("click", nextQuestion);
document.getElementById("prev").addEventListener("click", preiousQuestion);
let score = 0;
let askedQuestions = [];
let answeredQuestions = 0;
renderQuestion();

function renderQuestion() {
    if (answeredQuestions === 10) {
        alert("You've answered 10 questions, your score is: " + score);
        return;
    }
    let randomQuestion;
    do {
        randomQuestion = Math.floor(Math.random() * questions.length);
    } while (askedQuestions.includes(randomQuestion));
    currentQuestion = randomQuestion;
    askedQuestions.push(currentQuestion);
    questionNumber++;
    question.textContent =
        questionNumber + ") " + questions[currentQuestion].question;
    answers.innerHTML = "";
    questions[currentQuestion].options.forEach((answer) => {
        answers.innerHTML += `
        <div class="col-6">
            <div id=${answer.replace(
            /\s+/gm,
            ""
        )} class="rounded py-2 form-check w-50 d-flex align-items-center ps-5">
                <input class="form-check-input" type="radio" name="answer" id=${answer.toLocaleLowerCase()} value="${answer.replace(
            /\s+/gm,
            ""
        )}">
                <label class="form-check-label" for=${answer.toLocaleLowerCase()}>
                    ${answer}
                </label>
            </div>
        </div>
        `;
    });
}
function submit() {
    let userAnswer = document.querySelector("input[type=radio]:checked").value;
    let userContainer = document.querySelector(
        `#${userAnswer.replace(/\s+/gm, "")}`
    );
    let image = document.getElementById("img");
    image.style.display = "block";
    if (questions[currentQuestion].correctAnswer === userAnswer) {
        userContainer.classList.add("bg-success");
        score++;
        image.src =
            "https://gifdb.com/images/high/yes-cute-excited-bunny-rhipa87mmppyaej5.webp";
    } else {
        userContainer.classList.add("bg-danger");
        document
            .querySelector(
                `#${questions[currentQuestion].correctAnswer.replace(/\s+/gm, "")}`
            )
            .classList.add("bg-success");
        image.src =
            "https://media2.giphy.com/media/26n6xXh5UiF0BZx7y/giphy.gif?cid=6c09b952lsagn6fdsujm1mc0xm2way7c00zwjww2tt2t1i7x&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s";
    }
    document.getElementById("submit").setAttribute("disabled", true);
    document
        .querySelectorAll("input[type=radio]")
        .forEach((item) => item.setAttribute("disabled", true));
    if (answeredQuestions === 10) {
        alert("You've answered 10 questions, your score is: " + score);
    }
}

function nextQuestion() {
    // if (currentQuestion === questions.length - 1) {
    //     console.log(score)
    //     alert("we've reached the end of questions, your score is: " + score);
    //     return
    // }
    currentQuestion++;
    answeredQuestions++;
    renderQuestion();
    document.getElementById("submit").removeAttribute("disabled");
    document.getElementById("prev").removeAttribute("disabled");
}

function preiousQuestion() {
    if (currentQuestion >= 1) {
        currentQuestion = currentQuestion - 1;
        document.getElementById("prev").setAttribute("disabled", true);
        renderQuestion();
    }
}
