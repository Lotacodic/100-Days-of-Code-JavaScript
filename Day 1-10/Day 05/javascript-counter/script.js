//Get all the elements
let numContainer = document.querySelector(".num");
let value = 0;
let btnIncrease = document.querySelector(".increase");
let btnReset = document.querySelector(".reset");
let btnDecrease = document.querySelector(".decrease");

//Add eventListiner() to the btnIncrease and increases it when clicked
btnIncrease.addEventListener("click", () => {
  value++;
  numContainer.innerHTML = value;
});

//Add eventListiner() to the btnDecrease and decreases it when clicked
btnDecrease.addEventListener("click", () => {
  value--;
  numContainer.innerHTML = value;
});

//Add eventListiner() to the btnReset and round it to zero when clicked
btnReset.addEventListener("click", () => {
  value = 0;
  numContainer.innerHTML = value;
});