//Regular expressions for Mastercard and Credit Card
var masterCardNumber = /(^5(0|1|2|3|4|5)\d{2})\s(\d{4})\s(\d{4})\s(\d{4})$/;
var visaCardNumber = /^4(\d{3})\s(\d{4})\s(\d{4})\s(\d{4})$/;

//creating a function to replicate console.log
function print(message) {
  console.log(message);
}

//Card types in an array
const cardType = ["mastercard", "visa card"];

//enabling prompt in console using readline module
//accepts user input and store it at a callback function
var r1 = require("readline");
var prompts = r1.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Prompting the user for inputs
prompts.question("\nEnter your name: ", (username) => {
  print(`\nHello ${username}:) \n************************Welcome To Credit Card Validator*************************\n\nYou can validate your Mastercard and Visa Card
    `);
  print(cardType);
  prompts.question("\nEnter card type: ", (selectCard) => {
    if (cardType[0].includes(selectCard)) {
      //Prompting the user to select card type and enter mastercard number
      prompts.question("\nEnter mastercard number: ", (myMasterCardNumber) => {
        if (masterCardNumber.test(`${myMasterCardNumber}`)) {
          print(
            `\nMastercard number you entered is Valid!\n\nEnter 'ctrl c' to terminate`
          );
        } else {
          print(
            `\nMastercard number you entered is Invalid!\n\nType 'ctrl C' to rerun the code`
          );
        }
      });
    } else if (cardType[1].includes(selectCard)) {
      //Prompting the user to select card type and enter visa card number
      prompts.question("\nEnter visa card number: ", (myVisaCardNumber) => {
        if (visaCardNumber.test(`${myVisaCardNumber}`)) {
          print(
            `\nVisa card number you enterd is Valid!\n\nEnter 'ctrl c' to terminate`
          );
        } else {
          print(
            `\nVisa card number you enterd is Invalid!\n\nType 'ctrl C' to rerun the code`
          );
        }
      });
    } else {
      print(
        `\nCard not in option!\n\nType 'ctrl C' to rerun the code so U can select another card`
      );
    }
  });
});