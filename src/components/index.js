import('../pages/index.css');
import('./menu');
import('./slider')
import FormValidator from './FormValidator.js';
import {formPay, formSettings} from '../utils/constants.js';

const formPayValidator = new FormValidator(formPay, formSettings);
formPayValidator.enableValidation();


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
    openAccordion(parent);
  })
)