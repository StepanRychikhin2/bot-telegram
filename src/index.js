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
	'No no no',
	'Are you sure?',
	'No, think again',
	"I'm going to cry now",
	"I can't believe",
	'PLEASE!!!',
]

let messageIndex = 0

function handleNoClick() {
	const noButton = document.querySelector('.no-button')
	const yesButton = document.querySelector('.yes-button')
    // yesButton.textContent =  yesButton.textContent + "!"
	
	let btnLeft = Math.floor(Math.random() * 60 - 40) + 40
	let top = Math.floor(Math.random() * (90 - 65 + 1)) + 65
	noButton.style.left = btnLeft + "%"
	noButton.style.top = top + "%"
    noButton.style.position = 'absolute'
	noButton.textContent = messages[messageIndex]
	messageIndex = (messageIndex + 1) % messages.length
	const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize)
	const currenth = parseFloat(window.getComputedStyle(yesButton).height)
	const currentw = parseFloat(window.getComputedStyle(yesButton).width)
	console.log(currentw)
	yesButton.style.fontSize = `${currentSize * 1.5}px`
	yesButton.style.height = `${currenth * 1.5}px`
	yesButton.style.width = `${currentw * 1.5}px`
	if (messageIndex === 5) {
        // yesButton.style.zIndex = 100
        noButton.style.position = 'static'
		console.log(123)
		// yesButton.style.position = 'absolute'
		// yesButton.style.top = 0
		// yesButton.style.left = 0
		yesButton.style.width = '100%'
		yesButton.style.height = '100%'
		// yesButton.style.fontSize = `80px`
        yesButton.classList.add("last") 
		// top: 0;
		// left: 0;
		// position: absolute;
		// width: 100%;
		// height: 100%;
	}
}

function handleYesClick() {
	window.location.href = 'yes_page.html'
}
