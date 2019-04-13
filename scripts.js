// Add event listeners
var loading = document.getElementById("loading");
var form = document.getElementById("form");
var subject = document.getElementById("subject");
var email = document.getElementById("email");
var password = document.getElementById("password");
var message = document.getElementById("message");

var users = [
    { email: "test@test", password: "testtest" }
];

var resetButtons = function() {
    subject.classList.remove("form-error");
    email.classList.remove("form-error");
    password.classList.remove("form-error");
    message.innerText = "";
    message.classList.remove("error");
    message.classList.remove("success");
};

var processing = function() {
    resetButtons();

    email_value = email.value;
    password_value = password.value;

    var logged = false;
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if (user.email === email_value && user.password === password_value) {
            logged = true;
            break;
        }
    }    

    if (logged) {
        message.innerText = "Zalogowano pomyślnie";
        message.classList.add("success");
    } else {
        message.innerText = "Nieprawidłowy e-mail lub hasło";
        message.classList.add("error");
        email.classList.add("form-error");
        password.classList.add("form-error");
    }

    loading.classList.add("hidden");
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    loading.classList.remove("hidden");
    message.innerText = "&#160;";
    setTimeout(processing, 1000);
});

