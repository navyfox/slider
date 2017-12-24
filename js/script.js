var slideIndex=0;
var isLeftToRight = 0;
var startPosition = 0;
var slidePosition = 1;
var sliderList = document.getElementsByClassName("mySlides");
var slides = document.getElementsByClassName("picture");
//showSlides(slideIndex);

function plusSlides(n){
	showSlides(n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n) {

	isLeftToRight = n;
	var start = Date.now(); // сохранить время начала

	var timer = setInterval(function () {
		// вычислить сколько времени прошло из opts.duration
		var timePassed = Date.now() - start;
		if (isLeftToRight) {
			train.style.left = startPosition + timePassed + 'px';
		}
		else {
			train.style.left = (startPosition - timePassed) + 'px';
		}
		if (timePassed > 1000) {
			timePassed = 1000;
			clearInterval(timer);
			if (isLeftToRight) {
				slidePosition -= 1;
				console.log(slidePosition);
				startPosition = startPosition + timePassed;
				train.style.left = startPosition + 'px';

			} else {
				slidePosition += 1;
				console.log(slidePosition);
				startPosition = startPosition - timePassed;
				train.style.left = startPosition + 'px';

			}
		}
	}, 10);

}