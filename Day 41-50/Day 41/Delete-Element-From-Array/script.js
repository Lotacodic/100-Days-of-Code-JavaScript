//References to display array
let deleteValue = document.getElementById("del-value");
let arrayBefore = document.getElementById("before-del");
let arrayAfter = document.getElementById("after-del");

//Original Array
let arr = ["a", "b", "c", "d", "b"];
arrayBefore.innerHTML = `<span>Before Deletion: </span> [${arr}]`;

//Value to delete
let valueToDelete = "d";
deleteValue.innerHTML = `<span>Value To Del: </span> ${valueToDelete}`;


//indexOf(value) returns the first occurence of the value. If not foumd it return -1
let indexOfValue = arr.indexOf(valueToDelete);

//If the value to delete is present in an array use splice
//Splice overwrites the original array
if (indexOfValue != -1) {
    /*
    Syntax used here:
    Splice(indexOfItemToDelete, numberOfItemToDelete)
    */
   arr.splice(indexOfValue, 1);
}
arrayAfter.innerHTML = `<span>After Deletion: </span> [${arr}]`;