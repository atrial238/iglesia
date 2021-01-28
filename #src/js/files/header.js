function header (){

	const nav = document.querySelector('.nav'),
			burger = document.querySelector('.burger'),
			scrollWidth = `${window.innerWidth - document.documentElement.clientWidth}px`,
			userMenuIcon = document.querySelector('.userMenu__icon'),
			userMenu  = document.querySelector('.userMenu__menu'),
			empty = document.querySelector('.header__empty');

	let headerHieght  = document.querySelector('.header').offsetHeight;

	empty.style.height = (headerHieght - 6 ) + 'px';

	userMenuIcon.addEventListener('click', () => {

		let userMenuHeight = userMenu.offsetHeight;

		if(userMenu.style.bottom != '0px'){

			userMenu.style.bottom = `0px`;
			
		}else{
			nav.classList.remove('_active');
			nav.style.top = '-110%';
			burger.classList.remove('_active');
			userMenu.style.bottom = `-${userMenuHeight + headerHieght / 3}px`;
		}
	});
	
	burger.addEventListener('click', () => {

		headerHieght  = document.querySelector('.header').offsetHeight;

		if(nav.classList.contains('_active')){
				nav.style.top = '-110%';
		}else{
			userMenu.style.bottom = `0px`;
			nav.style.top = `${headerHieght - 5}px`;
		}
		

		burger.classList.toggle('_active');
		nav.classList.toggle('_active');

		window.document.body.classList.toggle('_lock');
		
		if(window.document.body.classList.contains('_lock')){
		
			window.document.body.style.marginRight = scrollWidth;
		}else{
			window.document.body.style.marginRight = '';
		}
		
	});

	window.addEventListener('resize', () => {
		userMenu.style.bottom = '0px';
		burger.classList.remove('_active');
		nav.classList.remove('_active');
		nav.style.top = '';
	});
	
}
export default header;