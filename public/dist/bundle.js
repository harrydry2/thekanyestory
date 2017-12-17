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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem) {
    elem.on(name, fn);
  });
};

exports.$ = $;
exports.$$ = $$;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _bling = __webpack_require__(0);

__webpack_require__(4);

__webpack_require__(5);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bling = __webpack_require__(0);

var iframe = (0, _bling.$)(".scrollDownVideo");
var p1Container = (0, _bling.$)(".p1Container");
var fixedSection = (0, _bling.$)(".fixedSection");
var p2Container = (0, _bling.$)(".p2Container");
var footerSection = (0, _bling.$)(".footerSection");

// iframe width and Height
iframe.style.width = window.innerWidth + "px";
iframe.style.height = window.innerHeight + "px";
fixedSection.style.top = "-" + window.innerHeight + "px";

// iframeResize
window.on("resize", adjustHeight);
function adjustHeight() {
  iframe.style.width = window.innerWidth + "px";
  iframe.style.height = window.innerHeight + "px";
}

// CSS Transition
p1Container.style.top = "-" + window.innerHeight + "px";
window.on("load", animateiframeDown);
function animateiframeDown() {
  setTimeout(function () {
    p1Container.style.transform = "translateY(" + window.innerHeight + "px)";
    fixedSection.style.transform = "translateY(" + window.innerHeight + "px)";
    p2Container.style.transform = "translateY(" + window.innerHeight + "px)";
    footerSection.style.transform = "translateY(" + window.innerHeight + "px)";
    iframe.src += "&autoplay=1";
  }, 300);
  setTimeout(function () {
    iframe.style.opacity = "1";
  }, 1300);
}

// iframe play/pause
iframe.on("click", function () {
  return iframe.paused ? iframe.play() : iframe.pause();
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bling = __webpack_require__(0);

(0, _bling.$)("input").on("keypress", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
});

/***/ })
/******/ ]);