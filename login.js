const form = document.querySelector("#form");

const username = document.querySelector("#username");
const password = document.querySelector("#password");

const error = document.querySelector("#error");
const success = document.querySelector("#success");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  error.textContent = "";
  success.textContent = "";
  // Validate fields

   const isUsernameValid = validateUsername();
   const isPasswordValid = validatePassword();

   if (!isUsernameValid) {
    username.focus(); //waxa us saara focus ka sara username
    return false;
    } else if (!isPasswordValid) {
    password.focus();
    return true;
   }

  success.textContent = "Registration successfully!";
});

function validateUsername() {
  if (username.value === "") {
    // error
    setError(username, "Username is required");
    return false;
  } else {
    // success
    setSuccess(username);
    return true;
  }
}

function validatePassword() {
  if (password.value.length < 8) {
    setError(password, "Password must be at least 8 characters");
    return false;
  } else {
    setSuccess(password);
    return true;
  }
}

function setError(element, message) {
  // show error class
  element.classList.add("invalid"); //classList waxa waaye class oo hesto no soo qobo
  // hide success class
  element.classList.remove("valid");
  error.textContent = message;
}

function setSuccess(element) {
  element.classList.add("valid");
  element.classList.remove("invalid");
}
