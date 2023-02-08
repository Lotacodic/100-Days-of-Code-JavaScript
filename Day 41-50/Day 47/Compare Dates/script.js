let result = document.getElementById("result");
let btn = document.getElementById("check");
btn.addEventListener("click", () => {
  let date1 = document.getElementById("date-1").value;
  let date2 = document.getElementById("date-2").value;

  //If any date input is empty
  if (date1.length == 0 || date2.length == 0) {
    result.innerHTML = "<span>please enter valid dates</span>";
  }
  //Else
  else {
    if (date1 > date2) {
      result.innerHTML = "Date 1 is <b>greater</b> than Date 2";
    } else if (date1 < date2) {
      result.innerHTML = "Date 1 is <b>smaller</b> than Date 2";
    } else if (date1 == date2) {
      result.innerHTML = "Date 1 is <b>equal</b> to Date 2";
    }
  }
});