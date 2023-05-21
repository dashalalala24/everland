import('../pages/index.css');

import('./menu');
import('./navigation')

import Slider from './Slider.js';
import FormValidator from './FormValidator.js';
import FormPay from './FormPay.js';
import { formPaySelector, formSettings } from '../utils/constants.js';
import { scrollToAnchors } from './navigation';

const formPay = new FormPay(formPaySelector, formSettings);
const formPayValidator = new FormValidator(formPaySelector, formSettings);
formPayValidator.enableValidation();

const projectSlider = new Slider('.slider_type_projects', '.card');
projectSlider.setEventListeners();

const infoSlider = new Slider('.slider_type_info', '.info__slider-item', document.querySelector('.info__slider-controller-text'));
infoSlider.setEventListeners();


/*
  Аккордион
*/
function changeButton(button) {
  if (button.classList.contains('button_type_accordeon-checked')) {
    button.classList.remove('button_type_accordeon-checked')
  } else {
    document.querySelectorAll('.button_type_accordeon').forEach((el) =>
      el.classList.remove('button_type_accordeon-checked'))
    button.classList.add('button_type_accordeon-checked')
  }
}

function openAccordion(parent) {
  if (parent.classList.contains('accordion__item-active')) {
    parent.classList.remove('accordion__item-active')
  } else {
    document.querySelectorAll('.accordion__item').forEach((child) =>
      child.classList.remove('accordion__item-active'))
    parent.classList.add('accordion__item-active')
  }
}

document.querySelectorAll('.accordion__item-container').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode
    const button = item.querySelector('.button_type_accordeon')
    openAccordion(parent);
    changeButton(button)
  })
)

scrollToAnchors()