export default class FormValidator {
  constructor(formSelector, options) {
    this._formSelector = formSelector;
    this._options = options;
    
    this._form = document.querySelector(this._formSelector);

    this._inputs = Array.from(this._form.querySelectorAll(this._options.input));
    this._checkboxs = Array.from(this._form.querySelectorAll(this._options.checkbox));
    this._button = this._form.querySelector(this._options.button);
  }
  _disableButton() {
    this._button.disabled = true;
  }
  _enableButton() {
    this._button.disabled = false;
  }
  _hasInvalidInput() {
    return this._inputs.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };
  _toggleButtonState() {
    const checkboxActive = this._checkboxs.every((checkbox) => {
      return(checkbox.checked);
    })
    if (this._hasInvalidInput() || !checkboxActive) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  };
  _showInputError(inputElement, errorMessage) {
    const errorElement = inputElement.parentNode.querySelector(this._options.inputError);
    inputElement.classList.add(this._options.inputInvalid);
    errorElement.classList.add(this._options.inputErrorActive);
    errorElement.textContent = errorMessage;
  };
  _hideInputError(inputElement) {
    const errorElement = inputElement.parentNode.querySelector(this._options.inputError);
    inputElement.classList.remove(this._options.inputInvalid);
    errorElement.classList.remove(this._options.inputErrorActive);
    errorElement.textContent = '';
  };
  _checkInputValidity(inputElement) {
    inputElement.setCustomValidity((inputElement.validity.patternMismatch) ? inputElement.dataset.errorMessage : "");
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };
  _setEventListeners() {
    this._toggleButtonState();
    this._inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
    this._checkboxs.forEach((checkboxElement) => {
      checkboxElement.addEventListener('change', () => {
        this._toggleButtonState();
      });
    });
  };
  enableValidation() {
    this._setEventListeners();
  }
}