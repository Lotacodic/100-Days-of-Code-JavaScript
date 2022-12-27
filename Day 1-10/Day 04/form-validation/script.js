//Get the html elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password2');

//Prevents the form from submitting because we need to validate inputs.
form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
});

//Function to display error when condition(s) is not met.
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

//Function to show that condition is met.
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

//Function for a valid email sample
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
    return re.test(String(email).toLocaleLowerCase());
};

/*Function to validate all the inputs
  trim() removes all the white space the strings have.
*/
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

//Validation conditions for each value
    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    };

//Email validation   
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address')
    }  
    else {
        setSuccess(email);
    };

//Passwords validations
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.');
    } else {
        setSuccess(password);
    };

    if(confirmPasswordValue === '') {
        setError(confirmPassword, 'Please confirm your password');
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, "Passwords doesn't match");
    } else {
        setSuccess(confirmPassword);
    };
}