let inputText = document.getElementById("input-text");
let outputText = document.getElementById("output-text");
let truncateBtn = document.getElementById("truncate");
let copyBtn = document.getElementById("copy");

truncateBtn.addEventListener("click", () => {
  let len = parseInt(document.getElementById("len").value);
  //If input length is NOT empty
  if(len) {
    //Validate input length and input text
    //If valid
    if(len > 0 && inputText.value.length > len) {
      outputText.value = inputText.value.slice(0, len);
    }
    //If NOT valid
    else {
      inputText.value = inputText.value;
    }
  }
  //If input length is empty
  else {
    inputText.value = "";
    alert("Please fill the length input");
  }
});

//Copy Button
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(`${outputText.value}`);
});