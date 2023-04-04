const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.getElementById("btn");
const colorCode = document.getElementById("color");

button.addEventListener("click", myFunction);

function myFunction() {
  const random = Math.floor(Math.random()*4);
    document.body.style.backgroundColor = colors[random];
    colorCode.textContent = colors[random];

}
