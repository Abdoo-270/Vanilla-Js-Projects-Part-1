const navbar = document.getElementById("hidden-navbar")
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.documentElement.scrollTop > 70) {
    navbar.style.display = "block";
  }
  else if (document.documentElement.scrollTop < 70) {
    navbar.style.display = "none";
  }
}
