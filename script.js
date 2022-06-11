// klik variabel
const visNav = document.querySelector("#visNav");

//Lyt efter klik på element
// mappe.addEventListener(".mappe", click);

// // lyd til klik
// function click() {
//     console.log("lyd");
//     document.querySelector("#klikLyd").play();
//     document.querySelector("#klikLyd").volume = 1.5;
// }


// When the user clicks on the button - toggle between hiding and hideing//
function visMenuBtn() {
document.getElementById("#visNav").classList.toggle("hide");
}

function visMenuBtn() {
if (typeof menu.style.display === "menu") {
    menu.style.display = "menu";
} 
else {
    menu.style.display = "hide";
}
}

// const button = document.querySelector('button');

// button.addEventListener('click', event => {
//   button.textContent = `Click count: ${event.detail}`;
// });