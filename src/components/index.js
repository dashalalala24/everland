import('../pages/index.css');

import('./menu');
import('./navigation')

import Slider from './Slider.js';
import FormValidator from './FormValidator.js';
import FormPay from './FormPay.js';
import { formPaySelector, formSettings } from '../utils/constants.js';
import { scrollToAnchors } from './navigation';

import { changeButton, openAccordion } from './accordion';

const formPay = new FormPay(formPaySelector, formSettings);
const formPayValidator = new FormValidator(formPaySelector, formSettings);
formPayValidator.enableValidation();

const projectSlider = new Slider('.projects__slider', '.card');
projectSlider.setEventListeners();

const infoSlider = new Slider('.slider_type_info', '.info__slider-item', document.querySelector('.info__slider-controller-text'));
infoSlider.setEventListeners();


const accordionButton = document.querySelectorAll('.accordion__item-container');

accordionButton.forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode
    const button = item.querySelector('.button_type_accordeon')
    openAccordion(parent);
    changeButton(button)
  })
)

scrollToAnchors()