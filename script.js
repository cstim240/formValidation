const form = document.querySelector(".form");

//Email related functions and vars
const email = document.getElementById("emailInput");
const emailError = document.querySelector(".mailError");

email.addEventListener("input", (event) => {
    //each time the user types something, we check if the form fields are valid
    if (email.validity.valid){
        emailError.textContent = "";
        emailError.className = "error"; //reset visual state of the message
    } else {
        showError();
    }
});

//if the email is valid we let the form submit
form.addEventListener("submit", (event) => {
    if (!email.validity.valid){
        showError();
        event.preventDefault(); 
        //prevent the form from being sent by cancelling the event
    }
});

function showError(){
    if (email.validity.valueMissing){
        //if the field is empty, display the following error message
        emailError.textContent = "You need to enter an email address!";
    } else if (email.validity.typeMismatch){
        //if the field doesn't contain an email address
        emailError.textContent = "Entered value needs to be an email address";
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.getAttribute('minlength')} characters; you entered ${email.value.length}.`;
    }

    //set the styling appropriately
    emailError.className = "error active";
}

//Country related functions
const countries = [
    { code: "ca", name: "Canada"},
    { code: "us", name: "United States"},
    { code: "fr", name: "France"},
    { code: "de", name: "Germany"}
];

const countrySelect = document.getElementById("countryInput");

//loop through countries array and create options
countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country.code;
    option.textContent = country.name;
    countrySelect.appendChild(option);
});
