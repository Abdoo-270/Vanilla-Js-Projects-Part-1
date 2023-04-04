
const questions = document.querySelectorAll(".question")

questions.forEach( function (question) {
  const btn = question.querySelector(".question-btn")
  btn.addEventListener("click", function(){
    questions.forEach(function(item){
      if(item !== question) {
        item.classList.remove("show-text")
      }
    })

    question.classList.toggle("show-text");
  })
})













/*
const showBtn = document.getElementById("show-btn");
const hideBtn = document.getElementById("hide-btn");

const box1Hight = document.getElementById("box-1").clientHeight;
const box2Hight = document.getElementById("box-2").clientHeight;
boxTotalHight = box1Hight + box2Hight +"px";
boxMinHight = box1Hight + 26 + "px";
const box1 = document.getElementById("box-1")
const box2 = document.getElementById("box-2");
const minContainer = document.getElementById("article")

var durum = "visible";
showBtn.addEventListener("click", function(){
  showBtn.style.visibility = "hidden";
  hideBtn.style.visibility  = "visible";
  box2.style.visibility = "visible";
  box1.style.boxShadow = "none";
  minContainer.style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px";
  minContainer.style.height = boxTotalHight;
})

hideBtn.addEventListener("click", function(){
  showBtn.style.visibility = "visible";
  hideBtn.style.visibility  = "hidden";
  box2.style.visibility = "hidden";
    minContainer.style.boxShadow = "none";
    box1.style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px";
    minContainer.style.height = "90px" ;
})
*/
