import('../pages/index.css');

import('./menu');
import('./slider')
import('./navigation')
import FormValidator from './FormValidator.js';
import FormPay from './FormPay.js';
import {formPaySelector, formSettings} from '../utils/constants.js';
import { scrollToAnchors } from './navigation';

const formPay = new FormPay(formPaySelector, formSettings);
const formPayValidator = new FormValidator(formPaySelector, formSettings);
formPayValidator.enableValidation();

// const slider = document.querySelector('.slider');
// const sliderList = slider.querySelector('.slider__list');
// const slides = slider.querySelectorAll('.slider__slide');
// const prevButton = slider.querySelector('.button_type_slider_previous');
// const nextButton = slider.querySelector('.button_type_slider_next');

const items = document.querySelectorAll('.slider__slide');
const itemLength = items.length;

const nextButton = document.querySelector(".button_type_slider_next");
const previousButton = document.querySelector(".button_type_slider_previous");

let slider = [];
for (let i = 0; i < itemLength; i++) {
  slider.push(items[i]);
  items[i].remove();
}

let step = 0;
let offset = 0;

function infoSlider() {
  let slideElement = document.createElement('li');
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

  let slideElement = document.createElement('li');
  slideElement.classList.add('card', 'card_type_horizontal', 'card_color_blue', 'slider__slide');
  slideElement.style.left = offset * 1360 + 'px';
  slideElement.innerHTML = slider[step].innerHTML;
  document.querySelector('.slider__list').appendChild(slideElement);
  document.querySelector('.slider__list').style.transform = `translateX(-${slideElement.offsetWidth}px)`;
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

  let sliderItems = document.querySelectorAll('.slider__slide');
  let offset2 = -1;

  for (let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].style.left = offset2 * 1360 - 1360 + 'px';
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
  let offset = -1;
  let slideElement = document.createElement('li');
  slideElement.classList.add('card', 'card_type_horizontal', 'card_color_blue', 'slider__slide');
  slideElement.style.left = offset * 100 + 'px';
  slideElement.innerHTML = slider[step].innerHTML;

  document.querySelector('.slider__list').insertBefore(slideElement, document.querySelector('.slider__slide'));
  document.querySelector('.slider__list').style.transform = `translateX(-${slideElement.offsetWidth}px)`;
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

  let sliderItems = document.querySelectorAll('.slider__slide');
  let offset2 = sliderItems.length - 1;

  for (let i = sliderItems.length - 1; i >= 0; i--) {
    sliderItems[i].style.left = offset2 * 1360 + 'px';
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
  if (parent.classList.contains('accordion__slide-active')) {
    parent.classList.remove('accordion__slide-active')
  } else {
    document.querySelectorAll('.accordion__slide').forEach((child) =>
      child.classList.remove('accordion__slide-active'))
    parent.classList.add('accordion__slide-active')
  }
}

document.querySelectorAll('.accordion__slide-container').forEach((slide) =>
  slide.addEventListener('click', () => {
    const parent = slide.parentNode
    openAccordion(parent);
  })
)

scrollToAnchors()