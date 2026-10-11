
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("submitBtn");
const form = document.getElementById("registerForm");

function validateForm() {
    let valid = true;

    if (name.value.trim() === "") {
        document.getElementById("nameError").textContent =
            "Name is required";
        valid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        document.getElementById("emailError").textContent =
            "Enter a valid email address";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (password.value.length < 6) {
        document.getElementById("passwordError").textContent =
            "Password must have at least 6 characters";
        valid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    button.disabled = !valid;
    return valid;
}

name.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (validateForm()) {
        document.getElementById("successMessage").textContent =
            "Registration successful!";

        form.reset();
        validateForm();
    }
});

validateForm();
