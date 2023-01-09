//Selecting html Elements
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

/* This function runs when will press the Calculate button from our html files
   It checks if age,height,weight,male and female are not empty
   if empty it display error message but if evrything is okay it runs the countBmi() function.
*/
function calculate() {
  if (
    age.value == "" ||
    height.value == "" ||
    weight.value == "" ||
    (male.checked == false && female.checked == false)
  ) {
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;
  } else {
    countBmi();
  }
}

/*The job of this function is to count the bmi and print the result
 */

function countBmi() {
  //Make an array of age,weight and height
  var p = [age.value, height.value, weight.value];
  if (male.checked) {
    p.push("male");
  } else if (female.checked) {
    p.push("female");
  }
  //Formula for calculating the BMI
  var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);

  var result = "";
  //Checking the bmi for different conditions
  if (bmi < 18.5) {
    result = "Underweight";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = "Healthy";
  } else if (25 <= bmi && bmi <= 29.9) {
    result = "Overweight";
  } else if (30 <= bmi && bmi <= 34.9) {
    result = "Obese";
  } else if (35 <= bmi) {
    result = "Extremely obese";
  }

  //Result area
  resultArea.style.display = "block";
  document.querySelector(
    ".comment"
  ).innerHTML = `You are <span id="comment">${result}</span>`;
  document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};