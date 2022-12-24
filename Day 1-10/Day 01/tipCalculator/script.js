const myTip = () => {
    /*This gets the value of billAmount
      To make the input number return an integer, use Number("")
    */
    let billAmount = Number(document.getElementById("billAmount").value);

    //This gets the value of tipPerc
    let tipPerc = Number(document.getElementById("tipPerc").value);

    /*Calculates the tipAmount
      When calculate is clicked, alert() pops out the results
    */
    let tipAmount  = billAmount * (tipPerc / 100);
    alert(tipAmount);

    //Calculates the totalAmount
    let totalAmount = tipAmount + billAmount;
    alert(totalAmount);

    /*Gets the tipTotal from DOM and assign it the result of tipAmount
    To display result in two decimal places, use toFixed(2) 
    */
    document.getElementById("tipTotal").value = `$ ${tipAmount.toFixed(2)}`;

    //Gets the totalBilled from DOM and assign it the esult of totalAmount
    document.getElementById("totalBilled").value = `$ ${totalAmount.toFixed(2)}`;
}