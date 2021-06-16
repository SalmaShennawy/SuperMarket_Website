function showPass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }
}
function login() {

    var email = document.getElementById('email').value;
    var passw = document.getElementById('password').value;
    var user = "user@gmail.com";
    var password = "12345";
    var admin = "admin@gmail.com"
    var adminPassword = "12345";


    if (email.length == 0) {

        document.getElementById('em').innerHTML = "** Please fill the email";
        return false;
    }
    if (email.indexOf('@') <= 0) {

        document.getElementById('em').innerHTML = "** Email must include @";
        return false;
    }
    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 4) != '.')) {

        document.getElementById('em').innerHTML = "** Email must include . ";
        return false;
    }
    if (passw.length == 0) {

        document.getElementById('pw').innerHTML = "** please fill the password";
        return false;
    }
    if ((passw.length < 3) || (passw.length > 20)) {

        document.getElementById('pw').innerHTML = "** please fill the password between 3 and 20 letters and numbers";
        return false;
    }
    if (email === admin && adminPassword === passw) {
        localStorage.setItem("admin", "1");
        window.open('Home.html');

    }
    else if (email === user && password === passw) {
        window.open('Home.html');
    }
    else { alert('Invalid Credentials !'); }


}
function search() {
    const input = document.getElementById('searchfor');
    const filter = input.value.toUpperCase();
    const ul = document.getElementById('searchList');
    const li = ul.getElementsByTagName('li');
  
    for (var imgIndex = 0; imgIndex < li.length; imgIndex++) {
      a = li[imgIndex].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText; //todo:google
  
      if (filter !== "" && txtValue.toUpperCase().indexOf(filter) > -1) {
        li[imgIndex].style.display = "list-item";
      } else {
        li[imgIndex].style.display = "none";
      }
    }
  }
  