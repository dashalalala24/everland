(self["webpackChunkeverland"] = self["webpackChunkeverland"] || []).push([[149],{

/***/ 149:
/***/ (() => {

var projectSlider = document.querySelector('.slider');
function slide(slider) {
  var sliderList = slider.querySelector('.slider__list');
  console.log(sliderList);
  var previousButton = slider.querySelector('.button_type_slider_previous');
  var nextButton = slider.querySelector('.button_type_slider_next');
  previousButton.addEventListener('click', function () {
    var slideWidth = sliderList.offsetWidth;
    sliderList.style.transform = "translateX(-".concat(slideWidth, "px)");
    sliderList.style.transition = 'transform 0.5s ease-in-out';
    setTimeout(function () {
      sliderList.insertBefore(sliderList.lastElementChild, sliderList.firstElementChild);
      sliderList.style.transform = 'translateX(0)';
      sliderList.style.transition = 'none';
    }, 500);
  });
  nextButton.addEventListener('click', function () {
    var slideWidth = sliderList.offsetWidth;
    sliderList.style.transform = "translateX(".concat(slideWidth, "px)");
    sliderList.style.transition = 'transform 0.5s ease-in-out';
    setTimeout(function () {
      sliderList.appendChild(sliderList.firstElementChild);
      sliderList.style.transform = 'translateX(0)';
      sliderList.style.transition = 'none';
    }, 600);
  });
}
slide(projectSlider);
// const infoSlider = document.querySelector('.info-slider');
// slide(infoSlider);

/***/ })

}]);