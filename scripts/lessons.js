let secCard = document.getElementsByClassName("sectionCard");
let secCardArr = Array.from(secCard);
secCardArr.forEach((sec) => {
    sec.addEventListener("click", () => {
        switch (sec.children[1].textContent) {
            case "English":
                location.href = "./english.html";
                break;
            case "Math":
                location.href = "./math.html";
                break;
            case "Shapes":
                location.href = "./shapes.html";
                break;
            case "Games":
                location.href = "./games.html";
                break;
        }
    })
})


