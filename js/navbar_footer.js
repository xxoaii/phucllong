let navbar = document.querySelector(".navbar");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}
window.addEventListener("scroll", function(){
  var header = document.querySelector("nav");
  header.classList.toggle('sticky', window.scrollY > 0);
});


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".tracaphe-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let bangtinArrow = document.querySelector(".bangtin-arrow");
bangtinArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".sp-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}