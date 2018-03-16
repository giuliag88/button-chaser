var button = document.getElementById("button");
button.style.top = "0px";
button.style.left = "0px";
var gameWrapper = document.getElementById("gameWrapper");
var docHeight = gameWrapper.offsetHeight - (button.offsetHeight + 5); // +5 because of border = 5px
var randY;
var docWidth = gameWrapper.offsetWidth - (button.offsetWidth + 5); // +5 because of border = 5px
var randY;
var randX;
var timeout;
var counter = document.getElementById("counter");
var start = 0;
var p = document.getElementById("cheering");
var timeSlot = [2000, 1500, 1000, 800];


function resetTimeout () {
	window.clearTimeout(timeout);
}


function calculateTimeout () {
	if (start < 5) {
		return timeSlot[0];
	}
	else if (start >= 5 && start < 10) {
		return timeSlot[1];
	}
	else if (start >= 10 && start < 15) {
		return timeSlot[2];
	}
	else if (start >= 15 && start < 20) {
		return timeSlot[3];
	}
}


function getRandom(min, max) {
  	return (Math.floor(Math.random() * (max - min + 1)) + min);
}


function moveButton(event){

	timeout = window.setTimeout(moveButton, calculateTimeout());

	randY = getRandom(0, docHeight);
	randX = getRandom(0, docWidth);

	button.style.top = randY + "px";
	button.style.left = randX + "px";

}


function addPoint () {
	start++;
	counter.innerHTML = start;
	cheering.innerHTML = "+1 point";
	p.style.color = "green";


	if (start === 10) {
		cheering.innerHTML = "You are good!";
		p.style.color = "green";
	}

	if (start === 15) {
		cheering.innerHTML = "You are very good!";
		p.style.color = "green";
	}

	if (start === 20) {
		resetTimeout();
		alert("Congratulations! You haven't won anything at all! Do you want to Start Again?");
		start = 0;
		counter.innerHTML = start;
	}
}


function removePoint () {
	if (start > 0) {
		start--;
	}
	counter.innerHTML = start;
	cheering.innerHTML = "Click ON the Button! -1 point";
	p.style.color = "red";
}






gameWrapper.addEventListener("click", function (event) {

	resetTimeout();
	// console.log(event);
	// console.log(event.target);
	// console.log(event.currentTarget);


	if (event.target.classList.contains("click")) {
		moveButton();
		addPoint();
	}

	else if (event.target.classList.contains("gameWrapper")) {
		moveButton();
		removePoint();
	}

});
