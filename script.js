const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password");
const passwordAlert = document.querySelector(".passwordAlert");
const btn = document.querySelector("#submit-btn");


btn.addEventListener("click", function(e) {
    let password1 = password.value;
    let password2 = confirm_password.value;

    if(password1 !== password2) {
        passwordAlert.textContent = "*Passwords do not match";
        password.style.border = "1px solid #c30808";
        confirm_password.style.border = "1px solid #c30808";
        e.preventDefault();
    }
    else {
        passwordAlert.style.display = "none";
        password.style.border = "";
        confirm_password.style.border = "";
    }
});