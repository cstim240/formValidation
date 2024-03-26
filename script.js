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
        showEmailError();
    }
});

//if the email is valid we let the form submit
form.addEventListener("submit", (event) => {
    if (!email.validity.valid){
        showEmailError();
        event.preventDefault(); 
        //prevent the form from being sent by cancelling the event
    }
});

function showEmailError(){
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

//Zip code related validation
const zipCode = document.getElementById("zipInput");
const zipError = document.querySelector(".zipError");

zipCode.addEventListener("input", () =>{
    const zipRegex = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d/; //regex format for letter(l)-#-l #-l-#
    const zipValue = zipCode.value.trim();

    //the .test(string) is provided by JS's regexp object, used to test
    //whether a string matches a regular expression pattern
    if (zipRegex.test(zipValue)){
        zipError.textContent = "";
        zipError.classList.remove("error", "active");
    } else {
        zipError.textContent = "Invalid ZIP code, use the format[NO SPACE]: letter-num-letter-num-letter-num";
        zipError.classList.add("error", "active");
    }
});

//Country related functions
//the code property allows a unique identifier associcated with each country
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


