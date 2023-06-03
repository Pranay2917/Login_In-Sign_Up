// function test() {
//   var uid = document.getElementById("username").value;
//   var pass = document.getElementById("password").value;
//   var email = document.getElementById("email").value;
//   var storedData = JSON.parse(localStorage.getItem("Users"));

//   var user = storedData.find((data) => data.email === email);

//   if (user) {
//     if (user.password === pass) {
//       console.log("Login success");
//       // Display success message
//       var message = document.getElementById("message");
//       message.textContent = "Logged In successfully";
//       message.style.color = "green";
//     } else {
//       console.log("Invalid password");
//       // Display invalid password message
//       var message = document.getElementById("message");
//       message.textContent = "Invalid password";
//       message.style.color = "red";
//     }
//   } else {
//     var newUser = storedData.find((data) => data.email === email);

//     if (newUser) {
//       console.log("Account already exists");
//       // Display account already exists message
//       var message = document.getElementById("message");
//       message.textContent = "Account already exists";
//       message.style.color = "red";
//     } else {
//       console.log("User does not exist");
//       // Display user does not exist message
//       var message = document.getElementById("message");
//       message.textContent = "User does not exist";
//       message.style.color = "red";
//     }
//   }
// }
// function openLoginPage() {
//   window.location.href = "sign.html";
// }
// function openContact(){
//   window.location.href = "contact.html";
// }
// function openAbout(){
//   window.location.href = "about.html";
// }
// function openHome(){
//   window.location.href = "home.html";
// }



function test() {
  var uid = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var storedData = JSON.parse(localStorage.getItem("Users")) || [];

  var user = storedData.find((data) => data.email === email);

  if (user) {
    if (user.password === pass) {
      console.log("Login success");
      // Display success message
      var message = document.getElementById("message");
      message.textContent = "Logged In successfully";
      message.style.color = "green";
    } else {
      console.log("Invalid password");
      // Display invalid password message
      var message = document.getElementById("message");
      message.textContent = "Invalid password";
      message.style.color = "red";
      // Clear the password field
      document.getElementById("password").value = "";
    }
  } else {
    console.log("User does not exist");
    // Display user does not exist message
    var message = document.getElementById("message");
    message.textContent = "User does not exist";
    message.style.color = "red";
    // Reload the page after displaying the error message
    setTimeout(() => {
      location.reload();
    }, 2000); // Reload after 2 seconds (adjust as needed)
  }
}
function openLoginPage() {
  window.location.href = "sign.html";
}
function openContact(){
  window.location.href = "contact.html";
}
function openAbout(){
  window.location.href = "about.html";
}
function openHome(){
  window.location.href = "home.html";
}
