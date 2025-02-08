const btnYes = document.getElementById("btnYes")
const btnNo = document.getElementById("btnNo")
const conteiner = document.getElementById("conteiner")

const name = " <h1 class=title>Knew you would say yes<h1/> <img src='./asset//endGiffCat.gif' >";
btnYes.addEventListener("click", () => {
    console.log("yes")
conteiner.innerHTML = name
})

let bittonWith = 100;
let bittonHeit = 40;
let tetx = 0;
btnNo.addEventListener("click", () => {
    console.log("no")
    bittonWith += 100
    bittonHeit += 100
    if (tetx === 0) {
        tetx += 10
        btnNo.style.width = "130px"
        btnNo.textContent = "are you sure?"
    } else if (tetx === 10) {
        tetx += 10
         btnNo.textContent = "Really sure?"
    } else if (tetx === 20) {
        tetx += 10
        btnNo.style.width = "150px"
        btnNo.textContent = "are you positive?"
    } else if (tetx === 30) {
        tetx += 10
 btnNo.textContent = "pookie please..."
        
    } else {
    }
// console.log(bittonHeit + "px")
    btnYes.style.width = bittonWith + "px";
    btnYes.style.height = bittonHeit + "px";
})