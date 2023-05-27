export default class FormPay {
  constructor(formSelector, options) {
    this._formSelector = formSelector;
    this._options = options;
    
    this._form = document.querySelector(this._formSelector);

    console.log(this._form);

    this._inputOtherSumm = this._form.querySelector(this._options.radioInput);
    this._radioOtherSumm = this._form.querySelector(this._options.radioSpanOther);
    this._localState = false;
    this._radios = [];

    console.log(this._inputOtherSumm);
    console.log(this._radioOtherSumm);


    Array.from(this._form.querySelectorAll(this._options.radio)).forEach((radio) => {
      if (radio.name === this._options.radioSumm) {
        this._radios.push(radio);
      }
    });

    this._setEventListeners();
  }

  _toggleInputState(evt) {
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

  _setEventListeners() {
    this._radios.forEach((radio) => {
      radio.addEventListener('change', this._toggleInputState.bind(this));
    });
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      console.log('submit');
    })
  }
}