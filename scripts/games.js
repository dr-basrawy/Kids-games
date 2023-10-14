let secCard = document.getElementsByClassName("sectionCard");
let secCardArr = Array.from(secCard);
secCardArr.forEach((sec) => {
    sec.addEventListener("click", () => {
        switch (sec.children[1].textContent) {
            case "Pokemon":
                location.href = "./pokemon.html";
                break;
            case "rock paper scissors":
                location.href = "./rock paper scissors.html";
                break;
            case "XO - 2-Players":
                location.href = "./xo.html";
                break;
            case "XO - Player vs Computer":
                location.href = "./xo2.html";
                break;
        }
    });
});
