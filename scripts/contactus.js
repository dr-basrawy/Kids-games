var user = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("msg");
var btn = document.getElementById("btn")
var error = document.getElementsByTagName("span")


btn.addEventListener("click", sendEmail);

function sendEmail(ev) {
    ev.preventDefault();

    var regexName = /^[a-zA-Z]{3,12}/;
    var regexEmail = /^[a-z]{3,12}[0-9]*(@)(gmail|yahoo)(.com)$/;
    if (regexName.test(user.value) == false && regexEmail.test(email.value) == false) {
        error[0].textContent = "Invalid name";
        error[1].textContent = "Invalid email";
    } else if (regexName.test(user.value) == false) {
        error[0].textContent = "Invalid name";
    } else if (regexEmail.test(email.value) == false) {
        error[1].textContent = "Invalid email";
    } else {

        var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("msg").value
        }
        const serverID = "service_nzw3z9a";
        const templateID = "template_lmvjj6f";

        emailjs
            .send(serverID, templateID, params)
            .then((res) => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("msg").value = "";
                console.log(res);
                alert("your massage send")
            })
            .catch((err) => console.log(err))
    }
}





























