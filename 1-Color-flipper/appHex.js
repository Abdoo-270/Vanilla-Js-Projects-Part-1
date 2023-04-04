
const colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const button = document.getElementById("btn");
const colorCode = document.getElementById("color");

button.addEventListener("click", myFunction);

function myFunction() {
  const r1 = colors[Math.floor(Math.random()*16)];
  const r2 = colors[Math.floor(Math.random()*16)];
  const r3 = colors[Math.floor(Math.random()*16)];
  const r4 = colors[Math.floor(Math.random()*16)];
  const r5 = colors[Math.floor(Math.random()*16)];
  const r6 = colors[Math.floor(Math.random()*16)];
  randomColor = "#" + r1 + r2 + r3 + r4 + r5 + r6
    document.body.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;

}
