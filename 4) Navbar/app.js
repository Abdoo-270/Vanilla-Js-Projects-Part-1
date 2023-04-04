
const navCollapse = document.getElementById("nav-collapse");
const navbarHeader = document.getElementById("navbar");

var durum = "invisible";
function showLinks() {
  if(durum === "invisible") {
    navCollapse.style.top = "70px";
    navbarHeader.style.boxShadow = "0px 0px 0px 0px";
    durum = "visible";
  }
   else if (durum === "visible") {
    navCollapse.style.top = "-94px";
    durum = "invisible";
  }
}

/*
if (navCollapse.style.visibility === "") {
  navCollapse.style.visibility = "hidden";
}
if (navCollapse.style.visibility === "visible") {
  navCollapse.style.visibility = "visible";
}
*/
