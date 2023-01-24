//initial references
const input = document.querySelectorAll(".input");
const inputField = document.querySelector(".inputfield");
const submitButton = document.getElementById("submit");

let inputCount = 0;
    finalInput = "";

    //Update input
    const updateInputConfig = (element, disabledStatus) => 
    {
      element.disabled = disabledStatus;
      if (!disabledStatus) {
        element.focus();
       } else {
        element.blur();
       }
    };


    input.forEach((element) => {
      element.addEventListener("keyup", (e) => {
        e.target.value = e.target.value.replace(/[^0-9/g]/g, "");
        let { value } = e.target;

        if (value.length == 1) {
          updateInputConfig(e.target, true);
          if (inputCount <= 3 && e.key != "Backspace") {
            finalInput += value;
            if(inputCount < 3) {
              updateInputConfig(e.target.nextElementSibling, false);
            }
          }
          inputCount += 1;
        } else if (value.length == 0 && e.key == "Backspace") {
          finalInput = finalInput.subString(0, finalInput.length - 1);
          if (inputCount == 0) {
            updateInputConfig(e.target, false);
            return false;
          }
          updateInputConfig(e.target, true);
          e.target.previousElementSibling.value = "";
          updateInputConfig(e.target.previousElementSibling, false);
          inputCount -= 1;
        } else if (value.length > 1) {
          e.target.value = value.split("")[0];
        }
        submitButton.classList.add("hide");
      });
    });

    window.addEventListener("keyup", (e) => {
      if (inputCount > 3) {
        submitButton.classList.remove("hide");
        submitButton.classList.add("show");
        if(e.key == "Backspace") {
          finalInput = finalInput.subString(0, finalInput.length - 1);
          updateInputConfig(inputField.lastElementChild.false);
          inputField.lastElementChild.value = "";
          inputCount -= 1;
          submitButton.classList.add("hide");
        }
      }
    });


    const validateOTP = () => {
      alert("Success");
    }

    //Start
    const startInput = () => {
      inputCount = 0;
      finalInput = "";
      input.forEach((element) => {
        element.value = ""
      });
      updateInputConfig(inputField.firstElementChild, false);
    };

    window.load = startInput();
