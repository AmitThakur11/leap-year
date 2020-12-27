var input = document.querySelector("input");
var output = document.querySelector("#out");
var button1 = document.querySelector("#bt1");

function clickHandler() {
  var year = input.value;
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    output.innerText = year + " is a leap year 🤩";
  } else {
    output.innerText = year + " is not  a leap year 🤣";
  }
}

button1.addEventListener("click", clickHandler);
