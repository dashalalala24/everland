/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$j": () => (/* binding */ anchorDigits),
/* harmony export */   "FO": () => (/* binding */ menuIcon),
/* harmony export */   "FZ": () => (/* binding */ anchorfor),
/* harmony export */   "GI": () => (/* binding */ menu),
/* harmony export */   "HN": () => (/* binding */ anchorProject),
/* harmony export */   "Jn": () => (/* binding */ anchorGallery),
/* harmony export */   "Js": () => (/* binding */ anchorStories),
/* harmony export */   "Y3": () => (/* binding */ anchorNews),
/* harmony export */   "Yp": () => (/* binding */ anchorActivities),
/* harmony export */   "aR": () => (/* binding */ anchorFooter),
/* harmony export */   "dt": () => (/* binding */ anchorSlider),
/* harmony export */   "mT": () => (/* binding */ anchorSupport),
/* harmony export */   "vK": () => (/* binding */ anchorImportant)
/* harmony export */ });
var anchorSupport = document.querySelectorAll('.supportAnc');
var anchorFooter = document.querySelectorAll('#footerAnc');
var anchorProject = document.querySelectorAll('#aboutProjectAnc');
var anchorNews = document.querySelectorAll('.newsAnc');
var anchorActivities = document.querySelectorAll('.activitiesAnc');
var anchorDigits = document.querySelectorAll('.digitsAnc');
var anchorfor = document.querySelectorAll('#forAnc');
var anchorImportant = document.querySelectorAll('#importantAnc');
var anchorStories = document.querySelectorAll('#storiesAnc');
var anchorSlider = document.querySelectorAll('#sliderAnc');
var anchorGallery = document.querySelectorAll('#galleryAnc');
var menu = document.querySelector('.menu');
var menuIcon = document.querySelector('.header__menu-pic');

/***/ }),

/***/ 587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollToAnchors": () => (/* binding */ scrollToAnchors)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(688);

function scrollToAnchor(anchors) {
  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var sectionID = anchor.getAttribute('href');
      _constants__WEBPACK_IMPORTED_MODULE_0__/* .menuIcon.classList.remove */ .FO.classList.remove('header__menu-pic_type_close');
      _constants__WEBPACK_IMPORTED_MODULE_0__/* .menu.classList.add */ .GI.classList.add('menu_hidden');
      document.querySelector(sectionID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
}
function scrollToAnchors() {
  scrollToAnchor(_constants__WEBPACK_IMPORTED_MODULE_0__/* .anchorSupport */ .mT);
  scrollToAnchor(_constants__WEBPACK_IMPORTED_MODULE_0__/* .anchorFooter */ .aR);
  scrollToAnchor(_constants__WEBPACK_IMPORTED_MODULE_0__/* .anchorActivities */ .Yp);
  scrollToAnchor(_constants__WEBPACK_IMPORTED_MODULE_0__/* .anchorNews */ .Y3);
  scrollToAnchor(_constants__WEBPACK_IMPORTED_MODULE_0__/* .anchorProject */ .HN);
  scrollToAnchor(_constants__WEBPACK_IMPORTED_MODULE_0__/* .anchorDigits */ .$j);
  scrollToAnchor(_constants__WEBPACK_IMPORTED_MODULE_0__/* .anchorImportant */ .vK);
  scrollToAnchor(_constants__WEBPACK_IMPORTED_MODULE_0__/* .anchorStories */ .Js);
  scrollToAnchor(_constants__WEBPACK_IMPORTED_MODULE_0__/* .anchorGallery */ .Jn);
  scrollToAnchor(_constants__WEBPACK_IMPORTED_MODULE_0__/* .anchorSlider */ .dt);
  scrollToAnchor(_constants__WEBPACK_IMPORTED_MODULE_0__/* .anchorfor */ .FZ);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "everland:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"289":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkeverland"] = self["webpackChunkeverland"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./src/components/FormValidator.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(formSelector, options) {
    _classCallCheck(this, FormValidator);
    this._formSelector = formSelector;
    this._options = options;
    this._form = document.querySelector(this._formSelector);
    this._inputs = Array.from(this._form.querySelectorAll(this._options.input));
    this._checkboxs = Array.from(this._form.querySelectorAll(this._options.checkbox));
    this._button = this._form.querySelector(this._options.button);
  }
  _createClass(FormValidator, [{
    key: "_disableButton",
    value: function _disableButton() {
      this._button.disabled = true;
    }
  }, {
    key: "_enableButton",
    value: function _enableButton() {
      this._button.disabled = false;
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return this._inputs.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      var checkboxActive = this._checkboxs.every(function (checkbox) {
        return checkbox.checked;
      });
      if (this._hasInvalidInput() || !checkboxActive) {
        this._disableButton();
      } else {
        this._enableButton();
      }
    }
  }, {
    key: "_showInputError",
    value: function _showInputError(inputElement, errorMessage) {
      var errorElement = inputElement.parentNode.querySelector(this._options.inputError);
      inputElement.classList.add(this._options.inputInvalid);
      errorElement.classList.add(this._options.inputErrorActive);
      errorElement.textContent = errorMessage;
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(inputElement) {
      var errorElement = inputElement.parentNode.querySelector(this._options.inputError);
      inputElement.classList.remove(this._options.inputInvalid);
      errorElement.classList.remove(this._options.inputErrorActive);
      errorElement.textContent = '';
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputElement) {
      inputElement.setCustomValidity(inputElement.validity.patternMismatch ? inputElement.dataset.errorMessage : "");
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this._toggleButtonState();
      this._inputs.forEach(function (inputElement) {
        inputElement.addEventListener('input', function () {
          _this._checkInputValidity(inputElement);
          _this._toggleButtonState();
        });
      });
      this._checkboxs.forEach(function (checkboxElement) {
        checkboxElement.addEventListener('change', function () {
          _this._toggleButtonState();
        });
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._setEventListeners();
    }
  }]);
  return FormValidator;
}();

;// CONCATENATED MODULE: ./src/components/FormPay.js
function FormPay_typeof(obj) { "@babel/helpers - typeof"; return FormPay_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, FormPay_typeof(obj); }
function FormPay_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function FormPay_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, FormPay_toPropertyKey(descriptor.key), descriptor); } }
function FormPay_createClass(Constructor, protoProps, staticProps) { if (protoProps) FormPay_defineProperties(Constructor.prototype, protoProps); if (staticProps) FormPay_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function FormPay_toPropertyKey(arg) { var key = FormPay_toPrimitive(arg, "string"); return FormPay_typeof(key) === "symbol" ? key : String(key); }
function FormPay_toPrimitive(input, hint) { if (FormPay_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (FormPay_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormPay = /*#__PURE__*/function () {
  function FormPay(formSelector, options) {
    var _this = this;
    FormPay_classCallCheck(this, FormPay);
    this._formSelector = formSelector;
    this._options = options;
    this._form = document.querySelector(this._formSelector);
    this._inputOtherSumm = this._form.querySelector(this._options.radioInput);
    this._radioOtherSumm = this._form.querySelector(this._options.radioSpanOther);
    this._localState = false;
    this._radios = [];
    Array.from(this._form.querySelectorAll(this._options.radio)).forEach(function (radio) {
      if (radio.name === _this._options.radioSumm) {
        _this._radios.push(radio);
      }
    });
    this._setEventListeners();
  }
  FormPay_createClass(FormPay, [{
    key: "_toggleInputState",
    value: function _toggleInputState(evt) {
      if (evt.target.id === this._options.radioDonatOther) {
        this._radioOtherSumm.classList.add(this._options.radioDisable);
        this._inputOtherSumm.classList.add(this._options.radioInputActive);
        this._localState = true;
        this._inputOtherSumm.focus();
      } else {
        if (this._localState) {
          this._inputOtherSumm.classList.remove(this._options.radioInputActive);
          this._radioOtherSumm.classList.remove(this._options.radioDisable);
          this._localState = false;
        }
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;
      this._radios.forEach(function (radio) {
        radio.addEventListener('change', _this2._toggleInputState.bind(_this2));
      });
      this._form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        console.log('submit');
      });
    }
  }]);
  return FormPay;
}();

;// CONCATENATED MODULE: ./src/utils/constants.js
var formPaySelector = '.form-pay';
var formSettings = {
  input: '.form-pay__input',
  inputInvalid: 'form-pay__input_invalid',
  inputError: '.form-pay__input-error',
  inputErrorActive: 'form-pay__input-error_active',
  checkbox: '.form-pay__checkbox-invisible',
  button: '.form-pay__button',
  radioSpanOther: '.form-pay__radio_type_other',
  radioInput: '.form-pay__radio-input',
  radioInputActive: 'form-pay__radio-input_active',
  radio: '.form-pay__radio-invisible',
  radioSumm: 'donat_summ',
  radioDonatOther: 'donat_other',
  radioDisable: 'form-pay__radio_disabled'
};
// EXTERNAL MODULE: ./src/components/navigation.js
var navigation = __webpack_require__(587);
;// CONCATENATED MODULE: ./src/components/index.js
__webpack_require__.e(/* import() */ 289).then(__webpack_require__.bind(__webpack_require__, 289));
__webpack_require__.e(/* import() */ 792).then(__webpack_require__.bind(__webpack_require__, 792));
__webpack_require__.e(/* import() */ 149).then(__webpack_require__.t.bind(__webpack_require__, 149, 23));
Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 587));




var formPay = new FormPay(formPaySelector, formSettings);
var formPayValidator = new FormValidator(formPaySelector, formSettings);
formPayValidator.enableValidation();

// const slider = document.querySelector('.slider');
// const sliderList = slider.querySelector('.slider__list');
// const slides = slider.querySelectorAll('.slider__slide');
// const prevButton = slider.querySelector('.button_type_slider_previous');
// const nextButton = slider.querySelector('.button_type_slider_next');

var items = document.querySelectorAll('.slider__slide');
var itemLength = items.length;
var nextButton = document.querySelector(".button_type_slider_next");
var previousButton = document.querySelector(".button_type_slider_previous");
var slider = [];
for (var i = 0; i < itemLength; i++) {
  slider.push(items[i]);
  items[i].remove();
}
var step = 0;
var offset = 0;
function infoSlider() {
  var slideElement = document.createElement('li');
  slideElement.classList.add('card', 'card_type_horizontal', 'card_color_blue', 'slider__slide');
  slideElement.innerHTML = slider[slider.length - 1].innerHTML;
  document.querySelector('.slider__list').appendChild(slideElement);
  slideElement = document.createElement('li');
  slideElement.classList.add('card', 'card_type_horizontal', 'card_color_blue', 'slider__slide');
  slideElement.style.left = offset * 1360 + 'px';
  slideElement.innerHTML = slider[step].innerHTML;
  document.querySelector('.slider__list').appendChild(slideElement);
  slideElement = document.createElement('li');
  slideElement.classList.add('card', 'card_type_horizontal', 'card_color_blue', 'slider__slide');
  slideElement.style.left = offset * 1360 + 1360 + 'px';
  slideElement.innerHTML = slider[step + 1].innerHTML;
  document.querySelector('.slider__list').appendChild(slideElement);
  offset = 1;
}
function infoSliderNext() {
  if (step === slider.length - 1) {
    step = 1;
  } else {
    if (step === slider.length - 2) {
      step = 0;
    } else {
      step = step + 2;
    }
  }
  var slideElement = document.createElement('li');
  slideElement.classList.add('card', 'card_type_horizontal', 'card_color_blue', 'slider__slide');
  slideElement.style.left = offset * 1360 + 'px';
  slideElement.innerHTML = slider[step].innerHTML;
  document.querySelector('.slider__list').appendChild(slideElement);
  document.querySelector('.slider__list').style.transform = "translateX(-".concat(slideElement.offsetWidth, "px)");
  document.querySelector('.slider__list').style.transition = 'transform 0.5s ease-in-out';
  if (step === 0) {
    step = slider.length - 1;
  } else {
    step = step - 1;
  }
  offset = 1;
}
function next() {
  nextButton.onclick = null;
  var sliderItems = document.querySelectorAll('.slider__slide');
  var offset2 = -1;
  for (var _i = 0; _i < sliderItems.length; _i++) {
    sliderItems[_i].style.left = offset2 * 1360 - 1360 + 'px';
    offset2++;
  }
  setTimeout(function () {
    sliderItems[0].remove();
    document.querySelector('.slider__list').style.transform = 'translateX(0)';
    document.querySelector('.slider__list').style.transition = 'none';
    infoSliderNext();
    nextButton.onclick = next;
  }, 700);
}
function infoSliderPrevious() {
  if (step === 0) {
    step = slider.length - 2;
  } else {
    if (step === 1) {
      step = slider.length - 1;
    } else {
      step = step - 2;
    }
  }
  var offset = -1;
  var slideElement = document.createElement('li');
  slideElement.classList.add('card', 'card_type_horizontal', 'card_color_blue', 'slider__slide');
  slideElement.style.left = offset * 100 + 'px';
  slideElement.innerHTML = slider[step].innerHTML;
  document.querySelector('.slider__list').insertBefore(slideElement, document.querySelector('.slider__slide'));
  document.querySelector('.slider__list').style.transform = "translateX(-".concat(slideElement.offsetWidth, "px)");
  document.querySelector('.slider__list').style.transition = 'transform 0.5s ease-in-out';
  if (step === slider.length - 1) {
    step = 0;
  } else {
    step = step + 1;
  }
  offset = 1;
}
function previous() {
  previousButton.onclick = null;
  var sliderItems = document.querySelectorAll('.slider__slide');
  var offset2 = sliderItems.length - 1;
  for (var _i2 = sliderItems.length - 1; _i2 >= 0; _i2--) {
    sliderItems[_i2].style.left = offset2 * 1360 + 'px';
    offset2--;
  }
  setTimeout(function () {
    sliderItems[sliderItems.length - 1].remove();
    document.querySelector('.slider__list').style.transform = 'translateX(0)';
    document.querySelector('.slider__list').style.transition = 'none';
    infoSliderPrevious();
    previousButton.onclick = previous;
  }, 700);
}
infoSlider();
step = 0;
nextButton.onclick = next;
previousButton.onclick = previous;

// const slider = document.querySelector('.slider__list');
// const previousButton = document.querySelector('.button_type_slider_previous');
// const nextButton = document.querySelector('.button_type_slider_next');

// previousButton.addEventListener('click', () => {
//   slider.style.transform = `translateX(-${slideWidth}px)`;
//   slider.style.transition = 'transform 0.5s ease-in-out';

//   setTimeout(() => {
//     slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
//     slider.style.transform = 'translateX(0)';
//     slider.style.transition = 'none';
//   }, 500);
// });

// nextButton.addEventListener('click', () => {
//   slider.style.transform = `translateX(${slideWidth}px)`;
//   slider.style.transition = 'transform 0.5s ease-in-out';

//   setTimeout(() => {
//     slider.appendChild(slider.firstElementChild);
//     slider.style.transform = 'translateX(0)';
//     slider.style.transition = 'none';
//   }, 600);
// });

function openAccordion(parent) {
  if (parent.classList.contains('accordion__item-active')) {
    parent.classList.remove('accordion__item-active');
  } else {
    document.querySelectorAll('.accordion__item').forEach(function (child) {
      return child.classList.remove('accordion__item-active');
    });
    parent.classList.add('accordion__item-active');
  }
}
document.querySelectorAll('.accordion__item-container').forEach(function (item) {
  return item.addEventListener('click', function () {
    var parent = item.parentNode;
    openAccordion(parent);
  });
});
(0,navigation.scrollToAnchors)();
})();

/******/ })()
;