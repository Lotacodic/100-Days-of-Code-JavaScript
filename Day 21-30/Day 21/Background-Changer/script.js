//Script starts here
const change = document.getElementById("change");
const color = document.getElementById("color");
const body = document.body;

change.addEventListener('click', changeBG);

//Function to change background
function changeBG() {
  const col1 = getRandomRGB();
  const col2 = getRandomRGB();
  const col3 = getRandomRGB();

  const colorString = `rgb(${col1}, ${col2}, ${col3})`;

  body.style.background = colorString;
  color.innerText = colorString
}

//Function to give us a random value from 0-255
function getRandomRGB() {
  return Math.floor(Math.random() * 256);
}