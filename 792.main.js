"use strict";
(self["webpackChunkeverland"] = self["webpackChunkeverland"] || []).push([[792],{

/***/ 792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(688);

window.onload = function () {
  var menuButton = document.querySelector('.header__menu');
  menuButton.addEventListener('click', toggleMenu);
  function toggleMenu() {
    console.log(_constants__WEBPACK_IMPORTED_MODULE_0__/* .menu.classList */ .GI.classList);
    if (_constants__WEBPACK_IMPORTED_MODULE_0__/* .menu.classList.contains */ .GI.classList.contains('menu_hidden')) {
      _constants__WEBPACK_IMPORTED_MODULE_0__/* .menuIcon.classList.add */ .FO.classList.add('header__menu-pic_type_close');
      _constants__WEBPACK_IMPORTED_MODULE_0__/* .menu.classList.remove */ .GI.classList.remove('menu_hidden');
    } else {
      _constants__WEBPACK_IMPORTED_MODULE_0__/* .menuIcon.classList.remove */ .FO.classList.remove('header__menu-pic_type_close');
      _constants__WEBPACK_IMPORTED_MODULE_0__/* .menu.classList.add */ .GI.classList.add('menu_hidden');
    }
  }
};
var menuArrowElements = document.querySelectorAll('.menu__arrow');
menuArrowElements.forEach(function (arrowElement) {
  arrowElement.addEventListener('click', function () {
    var columnElement = arrowElement.closest('.menu__column');
    var linkElements = columnElement.querySelectorAll('.menu__link');
    var isAccordion = !linkElements[1].classList.contains('menu__link_accordeon');
    linkElements.forEach(function (linkElement) {
      if (isAccordion && !linkElement.parentElement.classList.contains('menu__column-header')) {
        linkElement.classList.add('menu__link_accordeon');
        arrowElement.classList.remove('menu__arrow_type_up');
      } else {
        linkElement.classList.remove('menu__link_accordeon');
        arrowElement.classList.add('menu__arrow_type_up');
      }
    });
  });
});

/***/ })

}]);