function validateName(name) {
  var nameRegex = /^[A-Za-z]+$/;
  return nameRegex.test(name);
}

function validateEmail(email) {
  var emailRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
  return emailRegex.test(email);
}

function validateDateOfBirth(dob) {
  return true;
}

function validatePassword(password) {
  var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
}

function test() {
  var uname = document.getElementById("yrname").value;
  var uemail = document.getElementById("email").value;
  var udob = document.getElementById("dob").value;
  var upass = document.getElementById("pass").value;
  var ure = document.getElementById("repass").value;
  var form = document.getElementById("signform");
  var passwordRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');

  if (!uname || !validateName(uname)) {
    // alert("Name must contain only alphabets.");
    showSuccessName();

    return;
  } else if (!udob || !validateDateOfBirth(udob)) {
    alert("Invalid date of birth.");
    return;
  }
  else if(!passwordRegex.test(upass)){
    alert("Invalid password. Password should contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one digit.")
    return;
  }
  else if (!upass || !ure || upass !== ure) {
    alert("Passwords do not match.");
    return;
  } else {
    const userData = {
      name: uname,
      email: uemail,
      dob: udob,
      password: upass,
    };
    var usersr = JSON.parse(localStorage.getItem("Users")) || [];
    if (!usersr.some((user) => user.email === userData.email)) {
      usersr.push(userData);
      localStorage.setItem("Users", JSON.stringify(usersr));
      showSuccessMessage();
      form.reset();
    } else {
      alert("Email already exists. Please use a different email address.");
    }
  }
  // localStorage.setItem("username", uname);
  // localStorage.setItem("email", uemail);
  // localStorage.setItem("dob", udob);
  // localStorage.setItem("password", upass);
  // localStorage.setItem("repassword", ure);

  // redirectToLoginPage();
}

// Check if email already exists
// var existingEmail = localStorage.getItem("uemail");
// if (existingEmail && existingEmail === uemail) {
//   return false;
// }

function redirectToLoginPage() {
  window.location.href = "index.html";
}

function showSuccessMessage() {
  var successMessage = document.getElementById("success-message");
  successMessage.style.display = "block";
}

function showSuccessName() {
  var successName = document.getElementById("name-check");
  successName.style.display = "block";
  successName.style.color = "red"; // Change the text color to red
  successName.style.fontWeight = "italic"; // Make the text bold
}
