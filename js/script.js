var slideIndex=0;
var isLeftToRight = 0;
var startPosition = 0;
var slidePosition = 1;
var pos = 0;
var slideWidth = 1000;
var sliderList = document.querySelector(".mySlides");
var slides = document.querySelectorAll(".picture");
//showSlides(slideIndex);

function plusSlides(n){
	showSlides(n);
}
function scrollToPrev(n) {
	pos--;
	console.log(pos);
	console.log(startPosition);
	if (pos < 0) {
		var children = sliderList.children;
		sliderList.style.left = 0 + 'px';
		startPosition = -1000;
		console.log(sliderList.style.left);
		//sliderList.style.left = -(pos + 2) * slideWidth + 'px';
		sliderList.insertBefore(children[slides.length - 1], children[0]);
		pos++;
	}
	requestAnimationFrame(function(){ //ожидаем следующего запланированного reflow/repain;
		requestAnimationFrame(function(){
			//предыдущий reflow рассчитал новый dom элемент
			//можно делать анимацию.
			showSlides(n);
		})
	});
}

function scrollToNext(n) {
	console.log(pos);
	pos++;
	console.log(pos);
	console.log(startPosition);
	if (pos > slides.length -1) {
		sliderList.style.left = "0px";
		sliderList.style.left = -1000 + 'px';
		startPosition = -1000;
		var cloneElem = sliderList.children[0].cloneNode(true);
		sliderList.appendChild(cloneElem);
		sliderList.removeChild(sliderList.children[0]);
		pos--;
	}
	requestAnimationFrame(function(){ //ожидаем следующего запланированного reflow/repain;
		requestAnimationFrame(function(){
			//предыдущий reflow рассчитал новый dom элемент
			//можно делать анимацию.
			showSlides(n);
		})
	});
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
				console.log(startPosition);
				startPosition = startPosition + timePassed;
				train.style.left = startPosition + 'px';

			} else {
				console.log(startPosition);
				startPosition = startPosition - timePassed;
				train.style.left = startPosition + 'px';

			}
		}
	}, 10);

}