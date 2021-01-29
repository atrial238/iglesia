/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./#src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./#src/js/files/dynamicAdapt.js":
/*!***************************************!*\
  !*** ./#src/js/files/dynamicAdapt.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function dynamicAdapt (numbr) {

	const	setArr = document.querySelector(`[data-move${numbr}]`).dataset[`move${numbr}`].split(', '),
			moveableElem = document.querySelector(`[data-move${numbr}]`),
			moveToElemChildren = document.querySelector(`.${setArr[0]}`).children,
			anchorSibling = moveableElem.previousElementSibling,
			anchorParent = moveableElem.parentElement;

	let widthWindowUser = document.documentElement.clientWidth;

	function move () {

		widthWindowUser = document.documentElement.clientWidth;
		
		if(widthWindowUser < setArr[2]) {

			if(moveToElemChildren.length < 1) {

				document.querySelector(`.${setArr[0]}`).appendChild(moveableElem);

			}else{
			
				moveToElemChildren[setArr[1] - 2].after(moveableElem);
			}
			
		}else if(anchorSibling){
			
			anchorSibling.after(moveableElem); 

		}else if(anchorParent) {

			anchorParent.prepend(moveableElem);

		}
	}

		window.addEventListener('resize', () => move());
		move ();
}
/* harmony default export */ __webpack_exports__["default"] = (dynamicAdapt);

/***/ }),

/***/ "./#src/js/files/imageToBackground.js":
/*!********************************************!*\
  !*** ./#src/js/files/imageToBackground.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isIE__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isIE */ "./#src/js/files/isIE.js");


function ibg(){
	const ibg = document.querySelectorAll('.img-bg');
	
	for (var i = 0; i < ibg.length; i++) {

		if(Object(_isIE__WEBPACK_IMPORTED_MODULE_0__["default"])()){

			if(ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {

				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
				ibg[i].querySelector('img').style.width = '0px';
				ibg[i].querySelector('img').style.height = '0px';

			}
		}else if(ibg[i].querySelector('source') && ibg[i].querySelector('source').getAttribute('srcset') != null){
			
			// ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('source').getAttribute('srcset') + ')';
			ibg[i].querySelector('img').style.width = '';
			ibg[i].querySelector('img').style.height = '';
		}	
	}
}
/* harmony default export */ __webpack_exports__["default"] = (ibg); 


/***/ }),

/***/ "./#src/js/files/isIE.js":
/*!*******************************!*\
  !*** ./#src/js/files/isIE.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isIE() {
	var ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
/* harmony default export */ __webpack_exports__["default"] = (isIE);

/***/ }),

/***/ "./#src/js/files/isSupportWebp.js":
/*!****************************************!*\
  !*** ./#src/js/files/isSupportWebp.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function testWebp () {
	function test(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	test(function (support) {
	
		if (support == true) {
			document.querySelector('body').classList.add('_webp');
		} else {
			document.querySelector('body').classList.add('_no-webp');
		}
	});
}
/* harmony default export */ __webpack_exports__["default"] = (testWebp);

/***/ }),

/***/ "./#src/js/files/menuActive.js":
/*!*************************************!*\
  !*** ./#src/js/files/menuActive.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (menuActive);


/***/ }),

/***/ "./#src/js/files/slider.js":
/*!*********************************!*\
  !*** ./#src/js/files/slider.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


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

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./#src/js/main.js":
/*!*************************!*\
  !*** ./#src/js/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _files_imageToBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files/imageToBackground */ "./#src/js/files/imageToBackground.js");
/* harmony import */ var _files_isSupportWebp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files/isSupportWebp */ "./#src/js/files/isSupportWebp.js");
/* harmony import */ var _files_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./files/slider */ "./#src/js/files/slider.js");
/* harmony import */ var _files_dynamicAdapt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files/dynamicAdapt */ "./#src/js/files/dynamicAdapt.js");
/* harmony import */ var _files_menuActive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files/menuActive */ "./#src/js/files/menuActive.js");




// import initMap from './files/map';
// import tabs from './files/tabs';

// import modals from './files/modal';
// import catalog from './files/catalog';
// import align from './files/alignTitle';

// import maskForNumberPhone from './files/maskForNumberPhone';
// import {smoothScrolling} from './files/scrolling';


		
	Object(_files_imageToBackground__WEBPACK_IMPORTED_MODULE_0__["default"])();
	Object(_files_isSupportWebp__WEBPACK_IMPORTED_MODULE_1__["default"])();
	Object(_files_menuActive__WEBPACK_IMPORTED_MODULE_4__["default"])();
	Object(_files_dynamicAdapt__WEBPACK_IMPORTED_MODULE_3__["default"])(1);
	Object(_files_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
	// modals('.btn-consultation', '#consultation', '.overlay', '#consultation .modal__close', '.pageup');
	// modals('.btn-order', '#order', '.overlay', '#order .modal__close', '.pageup');
	// catalog();
	// align('.catalog-item__subtitle');
	// forms();
	// maskForNumberPhone('[name = phone]');
	// smoothScrolling('.link');
	// footer();


	// =======================================For Google Maps======================================================
	
	
	// var isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent),
		// scriptMap = document.createElement('script'),
		// mainBody = document.querySelector('body');
	
	// if(!isMobile){
	// 	scriptMap.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD3QtL2IP05dPUR8aqsAIcooTjiyO8ay3w';
	// 	mainBody.appendChild(scriptMap);
	// 	scriptMap.onload = function(){
	// 		initMap();
	// 	};	
	// }

/***/ })

/******/ });
//# sourceMappingURL=script.js.map