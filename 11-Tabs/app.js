
const historyBtn = document.getElementById("history")
const visionBtn = document.getElementById("vision")
const goalsBtn = document.getElementById("goals")

const historyTxt = document.getElementById("history-txt")
const visionTxt = document.getElementById("vision-txt")
const goalsTxt = document.getElementById("goals-txt")

historyBtn.addEventListener("click" , function(){

  historyBtn.classList.add("clicked");
  visionBtn.classList.remove("clicked");
  goalsBtn.classList.remove("clicked");

  historyTxt.style.display = "block";
  visionTxt.style.display = "none";
  goalsTxt.style.display = "none";

  historyBtn.classList.remove("btn-hover");
  visionBtn.classList.add("btn-hover");
  goalsBtn.classList.add("btn-hover");
})
visionBtn.addEventListener("click" , function(){
  visionBtn.classList.add("clicked");
  historyBtn.classList.remove("clicked");
  goalsBtn.classList.remove("clicked");

  historyTxt.style.display = "none";
  visionTxt.style.display = "block";
  goalsTxt.style.display = "none";

  historyBtn.classList.add("btn-hover");
  visionBtn.classList.remove("btn-hover");
  goalsBtn.classList.add("btn-hover");
})
goalsBtn.addEventListener("click", function(){
  goalsBtn.classList.add("clicked");
  historyBtn.classList.remove("clicked");
  visionBtn.classList.remove("clicked");

  historyTxt.style.display = "none";
  visionTxt.style.display = "none";
  goalsTxt.style.display = "block";

  historyBtn.classList.add("btn-hover");
  visionBtn.classList.add("btn-hover");
  goalsBtn.classList.remove("btn-hover");
})
