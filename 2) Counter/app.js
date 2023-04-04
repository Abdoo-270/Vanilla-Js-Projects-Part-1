
const number = document.getElementById("number");
const increase = document.getElementById("btn3");
const reset = document.getElementById("btn2");
const decrease = document.getElementById("btn1");

increase.addEventListener("click", function() {
  number.innerText++;
})
decrease.addEventListener("click", function() {
    if (number.innerText > 0) {
  number.innerText--;
}
})
reset.addEventListener("click", function() {
  number.innerText = 0;
})
