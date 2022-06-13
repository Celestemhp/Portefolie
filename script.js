// Lyd
// Lyt efter klik på element
document.querySelector("body").addEventListener("mousedown", click);

// lyd til klik
function click() {
    console.log("lyd");
    document.querySelector("#klikLyd").play();
    document.querySelector("#klikLyd").volume = 1.5;
}

// document.querySelector("body").addEventListener("mousedown", click); {
//     if (click.pressure == 0) {
//       // No pressure
//       process_no_pressure(click);
//     } else if (click.pressure == 1) {
//       // Maximum pressure
//       process_max_pressure(click);
//     } else {
//       // Default
//       process_pressure(click);
//     }
//   }


// // Dropdown
// // klik variabel
// const visNav = document.querySelector("#visNav");

// // When the user clicks on the button - toggle between hiding and hideing//
// function visMenuBtn() {
// document.getElementById("#visNav").classList.toggle("hide");
// }

// function visMenuBtn() {
// if (typeof menu.style.display === "menu") {
//     menu.style.display = "menu";
// } 
// else {
//     menu.style.display = "hide";
// }
// }

// const button = document.querySelector('button');

// button.addEventListener('click', event => {
//   button.textContent = `Click count: ${event.detail}`;
// });