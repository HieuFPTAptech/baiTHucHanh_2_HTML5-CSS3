// var dataUser = {
//   username: "admin",
//   password: 12345,
// };

var username = document.getElementById("username");
var password = document.getElementById("password");
var submit = document.getElementById("submit");
var checkUser = document.getElementById("checkUser");
var checkPass = document.getElementById("checkPass");

var form = document.getElementById("formValidate");

function validateForm() {
  if (username.value === "hieu123" && password.value === "hieu123") {
    return true;
  } else {
    return false;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (validateForm()) {
    window.location.href = "index.html";
  } else {
    alert("Login failed!");
  }
});
