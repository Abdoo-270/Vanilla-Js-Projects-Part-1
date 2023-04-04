
const btn = document.getElementById("button");
const inBtn = document.getElementById("in-btn")
const myVideo = document.getElementById("my-video")
var state = "on";
btn.addEventListener("click", function(){
  if (state === "on") {
    state = "off";
    inBtn.style.left = "50%";
    myVideo.pause();
  }
  else if (state === "off") {
    state = "on";
    inBtn.style.left = "0";
    myVideo.play();
  }
})
