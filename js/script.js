// бургер
$(document).ready(function() {
  $('select').niceSelect();
});
$('.burger').click(function(){
	$('.menu-for-768px').toggle(1000);
})

$('.burger').click(function(){
	$('.phone-320').toggle(1000);
})

// ГРАФИК РАБОТЫ

const workTime = document.querySelector('.work-time')
const pointTime = document.querySelector('.green-dot')

window.onload = function(){
	window.setInterval(function(){
		let now = new Date();
		let time = now.toLocaleTimeString()
	}, 1000);
    checkTime()
};
checkTime = () => {
	let close = time.slice(0,-6);
	if (close > 19 && close < 10) {
		pointTime.classList.remove('green')
		pointTime.classList.add('red')
		workTime.innerHTML = 'В данный момент офис продаж не работает'
	}
}


// СЛАЙДЕР

$(document).ready(function(){

	function slider(item) {

		let path = item.attr('data-path');
		// let text = item.attr('value');

		setTimeout(function(){
			$('.demonstraition-img img').attr('src', path);
			// $('.low-energy-info').innerHTML = this.text
		}, 200);
	}

	$('body').on('click', '.material-img-item', function(e){
		e.preventDefault();

		let item = $(this);

		slider(item);
	});

});


$('.slick-main').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear'
});

 $('.rev-images').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  speed: 500,
  fade: true,
  prevArrow: '<button class="left"></button>',
  nextArrow: '<button class="right"></button>',
  speed: 1500
});

 $('.sec-order').click(function(){
	$('.one-stage').removeClass('fst-stage');
	$('.one-stage').removeClass('th-stage');
	$('.one-stage').removeClass('fourth-stage');
	$('.one-stage').removeClass('fifth-stage');
	$('.order-item').removeClass('active');
	$(this).toggleClass('active');
	$('.one-stage').toggleClass('sec-stage');
})
  $('.fst-order').click(function(){
	$('.one-stage').removeClass('sec-stage');
	$('.one-stage').removeClass('th-stage');
	$('.one-stage').removeClass('fourth-stage');
	$('.one-stage').removeClass('fifth-stage');
	$('.order-item').removeClass('active');
	$(this).toggleClass('active');
	$('.one-stage').toggleClass('fst-stage');
})

  $('.th-order').click(function(){
	$('.one-stage').removeClass('sec-stage');
	$('.one-stage').removeClass('fst-stage');
	$('.one-stage').removeClass('fourth-stage');
	$('.one-stage').removeClass('fifth-stage');
	$('.order-item').removeClass('active');
	$(this).toggleClass('active');
	$('.one-stage').toggleClass('th-stage');
})

 $('.fourh-order').click(function(){
	$('.one-stage').removeClass('sec-stage');
	$('.one-stage').removeClass('fst-stage');
	$('.one-stage').removeClass('th-stage');
	$('.one-stage').removeClass('fifth-stage');
	$('.order-item').removeClass('active');
	$(this).toggleClass('active');
	$('.one-stage').toggleClass('fourth-stage');
})

  $('.fif-order').click(function(){
	$('.one-stage').removeClass('sec-stage');
	$('.one-stage').removeClass('fst-stage');
	$('.one-stage').removeClass('th-stage');
	$('.one-stage').removeClass('fourth-stage');
	$('.order-item').removeClass('active');
	$(this).toggleClass('active');
	$('.one-stage').toggleClass('fifth-stage');
})
