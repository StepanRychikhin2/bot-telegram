// const btnYes = document.getElementById("btnYes")
// const btnNo = document.getElementById("btnNo")
// const conteiner = document.getElementById("conteiner")

// const name = " <h1 class=title>Knew you would say yes<h1/> <img src='./asset//endGiffCat.gif' >";
// btnYes.addEventListener("click", () => {
//     console.log("yes")
// conteiner.innerHTML = name
// })

// let bittonWith = 100;
// let bittonHeit = 40;
// let tetx = 0;
// btnNo.addEventListener("click", () => {
//     console.log("no")
//     bittonWith += 100
//     bittonHeit += 100
//     if (tetx === 0) {
//         tetx += 10
//         btnNo.style.width = "130px"
//         btnNo.textContent = "are you sure?"
//     } else if (tetx === 10) {
//         tetx += 10
//          btnNo.textContent = "Really sure?"
//     } else if (tetx === 20) {
//         tetx += 10
//         btnNo.style.width = "150px"
//         btnNo.textContent = "are you positive?"
//     } else if (tetx === 30) {
//         tetx += 10
//  btnNo.textContent = "pookie please..."
        
//     } else {
//     }
// // console.log(bittonHeit + "px")
//     btnYes.style.width = bittonWith + "px";
//     btnYes.style.height = bittonHeit + "px";
// })
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}