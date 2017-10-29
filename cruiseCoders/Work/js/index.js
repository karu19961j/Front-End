let loginButton = document.getElementById("login-text")
function login(){
  let username = document.getElementById("username").value
  let password = document.getElementById("password").value

  localStorage.setItem("username",username);
  localStorage.setItem("password",password);
  console.log(localStorage.getItem("username"))
  console.log(localStorage.getItem("password"))
  loginButton.innerHTML = "LOGOUT"
}
function checkLogin(){
  if(localStorage.getItem("password") != ""){
    loginButton.innerHTML = "LOGOUT"
  }
}
loginButton.onclick = function(){
  if(loginButton.innerHTML == "LOGOUT"){
    loginButton.innerHTML = "LOGIN"
    loginButton.classList.remove("modal-trigger")
  }
  else if (loginButton.innerHTML == "LOGIN") {
    loginButton.classList.add("modal-trigger")
  }
}
