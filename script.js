// Lyd
// Lyt efter klik på element
document.querySelector("body").addEventListener("mousedown", click);

// lyd til klik
function click() {
    console.log("lyd");
    document.querySelector("#klikLyd").play();
}
// darkmode
function dark_mode() {
    var element = document.body;
    element.classList.toggle("dark");
 }

const btn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".main-menu");

function toggleMenu() {
  menu.classList.toggle("shown");
  const menuShown = menu.classList.contains("shown");
  if (menuShown) {
    console.log(menuShown); 
    btn.img = "Luk";
  } else {
    console.log(menuShown);
    btn.img = "Menu";
  }
}
btn.addEventListener("click", toggleMenu);
