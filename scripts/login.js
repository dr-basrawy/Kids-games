function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var users = JSON.parse(this.responseText).users;
      for (var i = 0; i < users.length; i++) {
        if (username == users[i].username && password == users[i].password) {
          setCookie("username", username, 1); // Save username in a cookie for 1 day
          window.location.href = "success.html";
          return;
        }
      }
      alert("Invalid username or password.");
    }
  };
  xmlhttp.open("GET", "users.json", true);
  xmlhttp.send();
}
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
