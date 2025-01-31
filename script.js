const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");

const submitBtn = document.querySelector("#submit-btn");
const passwordAlert = document.querySelector("#passwordAlert");

submitBtn.addEventListener("click", (e) => {
    
    const password1 = password.value;
    const password2 = confirmPassword.value
    if(password1 === password2) {
        e.preventDefault();
        alert("Account Created");
    }
    else {
        passwordAlert.style.display = "";
        password.style
    }
});