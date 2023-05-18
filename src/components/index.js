import('../pages/index.css');

import FormValidator from './FormValidator.js';
import {formPay, formSettings} from '../utils/constants.js';

const formPayValidator = new FormValidator(formPay, formSettings);
formPayValidator.enableValidation();