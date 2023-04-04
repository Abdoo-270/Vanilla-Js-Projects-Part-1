
const all = document.getElementById("all");
const breakfast = document.getElementById("breakfast");
const lunch = document.getElementById("lunch");
const shake = document.getElementById("shake");
const dinner = document.getElementById("dinner");

function showAll() {
  breakfast.style.display = "none";
  lunch.style.display = "none";
  shake.style.display = "none";
  dinner.style.display = "none";
  all.style.display = "block";

}

function showBreakfast() {
  breakfast.style.display = "block";
  lunch.style.display = "none";
  shake.style.display = "none";
  dinner.style.display = "none";
  all.style.display = "none";
}

function showLunch() {
  breakfast.style.display = "none";
  lunch.style.display = "block";
  shake.style.display = "none";
  dinner.style.display = "none";
  all.style.display = "none";
}

function showShakes() {
  breakfast.style.display = "none";
  lunch.style.display = "none";
  shake.style.display = "block";
  dinner.style.display = "none";
  all.style.display = "none";
}

function showDinner() {
  breakfast.style.display = "none";
  lunch.style.display = "none";
  shake.style.display = "none";
  dinner.style.display = "block";
  all.style.display = "none";
}
