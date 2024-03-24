const email = document.querySelector("emailInput");
email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch){
        email.setCustomValidity("I am expecting an email address!");
    } else {
        
    }
});