function register() {
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var username = document.getElementById("reg-username");
    var password = document.getElementById("reg-password");
    console.log(name);
    //console.log(name.value , age.value , username.value , password.value);
    if (name.value.trim() == '' || name.value.length < 3 || !isNaN(parseInt(name.value))) {
      alert("Please enter a valid name.");
      return;
    }
    if (age.value.trim() == '' || isNaN(parseInt(age.value)) || age.value < 5 || age.value > 99) {
      alert("Please enter a valid age.");
      return;
    }
    if (username.value.trim() == '' || password.value.trim() == '') {
      alert("Please enter a valid username and password.");
      return;
    }
    if (username.value.length < 5 || password.value.length < 6) {
      alert("Username must be at least 5 characters long and password must be at least 6 characters long.");
      return;
    }
    var data = new XMLHttpRequest();
    data.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var users = JSON.parse(this.responseText).users;
        for (var i = 0; i < users.length; i++) {
          if (username.value == users[i].username) {
            alert("Username already exists.");
            return;
          }
        }
        users.push({
          "username": username.value,
          "password": password.value,
          "name": name.value,
          "age": age.value
        });
        var data2 = new XMLHttpRequest();
        data2.open("POST", "update-users.php", true);
        //data2.setRequestHeader("Content-type", "application/json");
        data2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //data2.send(JSON.stringify(users));
        data2.send("username=" + encodeURIComponent(username.value) + "&password=" + encodeURIComponent(password.value) + "&name=" + encodeURIComponent(name.value) + "&age=" + encodeURIComponent(age.value));
        
        alert("Registration successful now you can login :)");
        window.location.href = "login.html";
      }
    };
    data.open("GET", "users.json", true);
    //console.log(data);
    data.send();
  }
