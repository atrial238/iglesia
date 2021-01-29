function menuActive() {
	const burger = document.querySelector('.header__burger'),
			menu = document.querySelector('.nav'),
			hederWrapper = document.querySelector('.header__wrapper');
	
	burger.addEventListener('click', () => {
		const widthWidow = window.innerWidth;
		burger.classList.toggle('header__burger_active');
		menu.classList.toggle('header__nav_active');
		hederWrapper.classList.toggle('header__wrapper_active');
		window.document.body.classList.toggle('_lock');
	});
	window.addEventListener('resize', () => {
		burger.classList.remove('header__burger_active');
		menu.classList.remove('header__nav_active');
		hederWrapper.classList.remove('header__wrapper_active');
		window.document.body.classList.remove('_lock');
	});
}
export default menuActive;
