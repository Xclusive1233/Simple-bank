document.getElementById("signOnButton").addEventListener("click", function(event) {
    event.preventDefault();
    
    const validUsername = "chodgejr49";
    const validPassword = "begrateful1";
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        window.location.href = "accounts.html";
    } else {
        alert("Invalid username or password.");
    }
});
