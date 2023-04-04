
const startUpBtn = document.getElementById("btn");
const heroMenu = document.getElementById("hero");
const startUpMenu = document.getElementById("start-up");
const popUpMenu = document.getElementById("pop-up");
const closeBtn = document.getElementById("close-btn")

startUpBtn.addEventListener("click", function() {
  heroMenu.style.backgroundImage = "linear-gradient(rgba(155, 202, 236, 0.7), rgba(155, 202, 236, 0.7)), url(images/hero.jpeg)";
  startUpMenu.style.backgroundColor="#A3D2F4";
  popUpMenu.style.visibility = "visible";
})
closeBtn.addEventListener("click", function() {
  heroMenu.style.backgroundImage = "url(images/hero.jpeg)";
  startUpMenu.style.backgroundColor="#fff";
  popUpMenu.style.visibility = "hidden";
})
