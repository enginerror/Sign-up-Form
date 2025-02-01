const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password");
const passwordAlert = document.querySelector(".passwordAlert");

let password1 = password.value;
let password2 = confirm_password.value;

if(password1 === password2) {
    // alert("Account Created");
    passwordAlert.classList.remove("visible")
}
else {
}