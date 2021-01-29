

function slider () {

	var mainSlider = new Swiper('.swiper-container', {
	
		loop: true,
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	 
	 });
	 var sliderVolountears = new Swiper('.slider-volountears', {
	
		loop: false,
		navigation: {
		  nextEl: '.volountears-next',
		  prevEl: '.volountears-prev',
		},
		slidesPerView: 1,
      slidesPerColumn: 2,
		spaceBetween: 6,
		breakpoints: {
			680: {
				slidesPerView: 2,
				slidesPerColumn: 2,
				spaceBetween: 6
			},
			992: {
				slidesPerView: 3,
				slidesPerColumn: 2,
				spaceBetween: 6,
			}
		 }
	 
	 });

	 var sliderFooter = new Swiper('.slider-footer', {
	
		loop: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		 },
		 simulateTouch: true,
		 
	 
	 });
}

export default slider;