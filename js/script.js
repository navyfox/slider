var isLeftToRight = 0;
var startPosition = 0;
var pos = 0;
var slideWidth = 1000;
var sliderList = document.querySelector(".mySlides");
var slideItem = document.querySelectorAll(".slide-item");
var dot = document.getElementsByClassName("dot");
var animationInProgress = false;
console.log(sliderList.children.length);
if (sliderList.children.length == 1 ) {
	sliderList.appendChild(sliderList.children[0].cloneNode(true));
}
dots();
function currentSlide(n){
	//stop animation
	if (animationInProgress) {
		return false;
	}
	if (n < pos) {
		var start = Date.now();
		t = pos - n;
		var timer = setInterval(function () {
			var timePassed = Date.now() - start;
			scrollToPrev(1);
			if (timePassed > 1000 * t) {
				clearInterval(timer);
			}
		}, 10 * t);
	} if (n > pos) {
		var start = Date.now();
		t = n - pos;
		var timer = setInterval(function () {
			var timePassed = Date.now() - start;
			scrollToNext(0);
			if (timePassed > 1000 * t) {
				clearInterval(timer);
			}
		}, 10 * t);
	} else {
		return false;
	}
}
function scrollToPrev(n) {
	//stop animation
	if (animationInProgress) {
		return false;
	}
	animationInProgress = true;

	pos--;
	if (pos < 0) {
		var children = sliderList.children;
		startPosition = pos * slideWidth;
		sliderList.style.left = startPosition + 'px';
		sliderList.insertBefore(children[slideItem.length - 1], children[0]);
		pos++;
	}
	requestAnimationFrame(function(){
		requestAnimationFrame(function(){
			showSlides(n);
		})
	});

	setTimeout(function(){ animationInProgress = false; }, 1000);
}

function scrollToNext(n) {
	//stop animation
	if (animationInProgress) {
		return false;
	}
	animationInProgress = true;

	pos++;
	if (pos > slideItem.length -1) {
		startPosition = -(pos - 2) * slideWidth;
		sliderList.style.left = startPosition + 'px';
		var cloneElem = sliderList.children[0].cloneNode(true);
		sliderList.appendChild(cloneElem);
		sliderList.removeChild(sliderList.children[0]);
		pos--;
	}
	requestAnimationFrame(function(){
		requestAnimationFrame(function(){
			showSlides(n);
		})
	});

	setTimeout(function(){ animationInProgress = false; }, 1000);
}

function showSlides(n) {

	isLeftToRight = n;
	var start = Date.now();

	var timer = setInterval(function () {
		var timePassed = Date.now() - start;
		if (isLeftToRight) {
			loop.style.left = startPosition + timePassed + 'px';
		}
		else {
			loop.style.left = (startPosition - timePassed) + 'px';
		}
		if (timePassed > 1000) {
			timePassed = 1000;
			clearInterval(timer);
			if (isLeftToRight) {
				startPosition = startPosition + timePassed;
				loop.style.left = startPosition + 'px';
			} else {
				startPosition = startPosition - timePassed;
				loop.style.left = startPosition + 'px';
			}
		}
	}, 10);
	dots();
}
function dots() {
	for(i=0; i < dot.length; i++){
		dot[i].className = dot[i].className.replace("active","");
	}
	dot[pos].className += " active";
}