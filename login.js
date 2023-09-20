const validUsername = "thanakit";
const validPassword = "62442";

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginBtn");
const messageElement = document.getElementById("message");

loginButton.addEventListener("click", () => {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        messageElement.textContent = "Your username and password are correct! You are logged in.";
        messageElement.classList.remove("error");
        messageElement.classList.add("correct");
        usernameInput.value = ""; 
        passwordInput.value = ""; 
    } else {
        messageElement.textContent = "Your username or password is incorrect! Please try again.";
        messageElement.classList.remove("correct");
        messageElement.classList.add("error");
    }
});
