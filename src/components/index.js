import('../pages/index.css');

import('./menu');
import('./navigation')

import ProjectSlider from './ProjectSlider.js';
import FormValidator from './FormValidator.js';
import FormPay from './FormPay.js';
import { formPaySelector, formSettings } from '../utils/constants.js';
import { scrollToAnchors } from './navigation';

const formPay = new FormPay(formPaySelector, formSettings);
const formPayValidator = new FormValidator(formPaySelector, formSettings);
formPayValidator.enableValidation();

const projectSlider = new ProjectSlider('.slider');
projectSlider.setEventListeners();