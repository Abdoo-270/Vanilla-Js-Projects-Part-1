
const closeBtn = document.getElementById("close-btn");
const sideBar = document.getElementById("sidebar");
const showHide = document.getElementById("show-hide-btn");

var durum = "invisible";
closeBtn.addEventListener("click" , function(){
  sideBar.style.left = "-700px";
  durum = "invisible"
})


showHide.addEventListener("click", function(){
  if (durum === "visible") {
    sideBar.style.left = "-400px";
    durum = "invisible";
  }
  else if (durum === "invisible") {
    sideBar.style.left = "0px";
    durum = "visible";
  }
})
