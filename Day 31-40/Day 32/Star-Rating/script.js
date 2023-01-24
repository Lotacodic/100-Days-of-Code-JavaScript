let starContainer = document.querySelectorAll(".star-container");
const submitButton = document.querySelector("#submit");
const message = document.querySelector("#message");
const submitSection = document.querySelector("#submit-section");

//Events For touch and mouse
let events = {
    mouse: {
        over: "click",
    },
    touch: {
        over: "touchstart",
    },
};

let deviceType = "";
//Detect touch device
const isTouchDevice = () => {
    try {
        //We try to create TouchEvent (it would fail for desktops and throw error)
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

isTouchDevice();

starContainer.forEach((element, index) => {
    element.addEventListener(events[deviceType].over,
       () => {
        submitButton.disabled = false;
        if (element.classList.contains("inactive")) {
            //Fill Star
            ratingUpdate(0, index, true);
        } else {
            //Regular Stars (remove color)
            ratingUpdate(index, starContainer.length - 1, false);
        }
       });
});

const ratingUpdate = (start, end, active) => {
    for(let i = start; i <= end; i++) {
        if(active) {
            starContainer[i].classList.add("active");
            starContainer[i].classList.remove("inactive");
            starContainer[i].firstElementChild.className = "fa-star fa-solid";
        } else {
            starContainer[i].classList.add("inactive");
            starContainer[i].classList.remove("inactive");
            starContainer[i].firstElementChild.className = "fa-star fa-regular";
        }
    }
    //Message
    let activeElements = document.getElementsByClassName("active");
    if (activeElements.length > 0) {
        switch (activeElements.length) {
            case 1:
                message.innerText = "Terrible";
                break;
            case 2:
                message.innerText = "Bad";
                break;
            case 3:
                message.innerText = "Satisfied";
                break;
            case 4:
                message.innerText = "Good";
                break;
            case 5:
                message.innerText = "Excellent";
                break;
            
        }
    } else {
        message.innerText = "";
    }
};

submitButton.addEventListener("click", () => {
    submitSection.classList.remove("hide");
    submitSection.classList.add("show");
    submitButton.disabled = true;
  });  
window.onload = () => {
    submitButton.disabled = true;
    submitSection.classList.add("hide");
  };  