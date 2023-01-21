//Initial Reference
let file = document.getElementById("my-file");
let message = document.getElementById("message");

//Call the function when there is input on the file input button
file.addEventListener("input", () => {
  //If user selects a file
  if (file.files.length) {
    let fileExtension = file.files[0].name.split(".").pop();
    message.innerHTML = fileExtension;
  }
  //If user clicks on cancel
  else {
    message.innerHTML = "Please select a file";
  }
});
