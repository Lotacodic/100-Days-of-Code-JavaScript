### Credit_Card_Number_Validator

This repository contains codes for Credit Card Number Validation with JavaScript.

#### Usage

To use this project `clone` with this command below or any preferred method, cd into the `credit-card-number-validator` folder

```
git clone https://github.com/lotacodic/credit-card-number-validator.git
```

#### Note

- `node js` is needed to run this project on terminal
- recommended IDE is Vs Code, I recommend Maximum Panel Size for a better view of the output
- run this command `node validate.js` on the terminal of your Vs Code.
- Enter `ctrl c` so you can terminate the process in other to rerun code

#### Credit Card Types

- Below are the types of Credit Card that can be validated:
<ul>
<li>Mastercard<li> 
<li>Visa Card<li>
<ul>

#### Features of Mastercard Number

Features of the mastercard number and the explaination of Regular Expression used in line 2 of the<a href="/credit-card-number-validator/validate.js"> validate.js </a> file:</h5>

<ol>
<li>16 Digits(only) long</li>
<p>If you look closely on the line 2 of <a href="/credit-card-number-validator/validate.js"> validate.j </a> you will notice that we've limiter(i.e {}) that limited the masterCardNumber to 16 digits.<br/>
Also the starting(^) and ending($) patterns help to keep the card number to range given in the code.This actually satifies the fact that all mastercard number has 16 digits 
</p>

<li>Starts with 5</li>
<p>The CARET (^) indicates that the masterCardNumber must start with 5. Starting with any other number will throw an error</p>

<li>Starts with either 50, 51, 52, 53, 54, or 55</li>
<p>The OR (|) symbol indicates that masterCardNumber can only start with 5 and any of these numbers - 0, 1, 2, 3, 4, or 5.
</p>

<li>4 sets of Digits seperated by spaces</li>
- The BACKSLASH d (\d) is a meta character which means digits(only). This means that users can only input digits only.
- The BACKSLASH s (\s) is also a meta character which means space or tab. The 4 sets of digits are all separated by 4 spaces, reason for four (\s) in the code.
<li>Each set of digits has 4 Digits</li>
- Limiter({}): Each four sections are limited to 4 digits using the limiter
</ol>

#### Features of Visa card Number

- Visa card number has same features with Mastercard number except that it starts with digit 4.
- So, the visaCardnumber in line 3 of <a href="/credit-card-number-validator/validate.js">validate.js</a> file has almost same implementation.
