function menuActive() {
	const burger = document.querySelector('.header__burger'),
			menu = document.querySelector('.nav'),
			hederWrapper = document.querySelector('.header__wrapper');

			burger.addEventListener('click', () => {
				
				burger.classList.toggle('header__burger_active');
				menu.classList.toggle('header__nav_active');
				hederWrapper.classList.toggle('header__wrapper_active');
				// window.document.body.classList.toggle('_lock');
				
			});
}
export default menuActive;
