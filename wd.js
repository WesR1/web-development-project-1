

const form = document.getElementById('frm1');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



form.addEventListener('submit', e => {
    console.log('Here');
    e.preventDefault();

    validateInputs();
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector("div");
    
    errorDisplay.innerText = message;
    inputControl.classList.add("errors", "input");
    inputControl.classList.remove("success", "input");
}
function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector("div");
    errorDisplay.innerText = '';
    inputControl.classList.add("success");
    inputControl.classList.remove("errors");
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setError(username, 'A Username is required for this field');
    }else {
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'A Email is required for this field');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address.');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is reuired for this feild');
    } else if (passwordValue.length < 10) {
        setError(password, 'Password must be at least 10 characters.')
    } else {
        setSuccess(password);
    }
    
    if(password2Value === '') {
        setError(password2, 'Please confirm your password oncemore');
    } else if(password2Value !== passwordValue) {
        setError(password2, "Passwords don't match");
    } else {
        setSuccess(password2);
    }

};

function myFunction() {
    var x =
document.getElementById("abouttoggle");
    if (x.style.display === "none")
    { 
        x.style.display = "block"; 
    } else {
        x.style.display ="none";
    }
}