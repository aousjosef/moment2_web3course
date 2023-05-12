console.log(msg);

var x_button = document.getElementById("x_button");
var nav = document.getElementById("nav");
var menu_button = document.getElementById("menu_button");

x_button.addEventListener("click", function () {
  nav.classList.toggle("menu-open");
});

menu_button.addEventListener("click", function () {
  nav.classList.toggle("menu-open");
});
