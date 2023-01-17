const sliderLength = document.querySelector(".pass-length input");
options = document.querySelectorAll(".option input");
copyIcon = document.querySelector(".input-box span");
passwordInput = document.querySelector(".input-box input");
passIndicator = document.querySelector(".pass-indicator");
generateBtn = document.querySelector(".generate-btn");

//Object of letters, numbers & symbols
const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}

const generatePassword = () => {
    let staticPassword = "";
    randomPassword = "";
    passLength = sliderLength.value;

    //Looping through each option's checkbox
    options.forEach(option => {
        /* If checkbox is checked add a particular key value
           from characters object to staticPassword
        */
        if(option.checked) {
            staticPassword += characters[option.id];
        }
        if(option.id !== "exc-duplicate" && option.id !== "spaces") {
            // adding particular key value from character object to staticPassword
            staticPassword += characters[option.id];
        } else if(option.id === "spaces") { // if checkbox id is spaces
            staticPassword += `  ${staticPassword}  `; // adding space at the beginning & end of staticPassword
        } else { // else pass true value to excludeDuplicate
            excludeDuplicate = true;
        }
});
        for (let i = 0; i < passLength; i++) {
            // getting random character from the static password
            let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
            // if excludeDuplicate is true
            if(excludeDuplicate) { 
                /* if randomPassword doesn't contains the current random character or randomChar is equal 
                 to space " " then add random character to randomPassword else decrement i by -1
                 */
                !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
            } else { // else add random character to randomPassword
                randomPassword += randomChar;
            }
        }
        // passing randomPassword to passwordInput value
        passwordInput.value = randomPassword; 
    }

    const upadatePassIndicator = () => {
        /* If lengthSlider value is less than 8 then pass "weak" as passIndicator id else if lengthSlider 
        value is less than 16 then pass "medium" as id else pass "strong" as id
        */
        passIndicator.id = sliderLength.value <= 8 ? "weak" : sliderLength.value <= 16 ? "medium" : "strong";
    }
    

const updateSlider = () => {
    //Passing slider values as counter text
     document.querySelector(".pass-length span").innerText = sliderLength.value;
     generatePassword();
    upadatePassIndicator();
}

updateSlider();

const copyPassword = () => {
    // copying random password
    navigator.clipboard.writeText(passwordInput.value); 
    // changing copy icon to tick
    copyIcon.innerText = "check"; 
    copyIcon.style.color = "#4285F4";
    // after 1500 ms, changing tick icon back to copy
    setTimeout(() => { 
        copyIcon.innerText = "copy";
        copyIcon.style.color = "#875ac2";
    }, 1500);
}

copyIcon.addEventListener("click", copyPassword);
sliderLength.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);