export default class Slider {
  constructor(sliderSelector, elementSelector, textElement) {
    this._sliderSelector = sliderSelector;

    this._slider = document.querySelector(sliderSelector);

    this._sliderList = this._slider.querySelector('.slider__list');
    this._cardArray = Array.from(this._sliderList.querySelectorAll(elementSelector));
    this._previousButton = this._slider.querySelector('.button_type_slider-previous');
    this._nextButton = this._slider.querySelector('.button_type_slider-next');
    this._textElement = textElement;

    if (!this._previousButton) {
      this._previousButton = this._slider.parentNode.querySelector('.button_type_slider-previous');
    };
    if (!this._nextButton) {
      this._nextButton = this._slider.parentNode.querySelector('.button_type_slider-next');
    };

    this._elementCount = this._cardArray.length;
    this._position = 0;
    this._active = true;

    if (this._textElement) {
      this._textElement.textContent = `${1}/${this._elementCount}`;
    }
  }

  _move(position, status, isAnimation = true) {
    this._sliderList.style.transform = `translateX(-${position}px)`;
    if (isAnimation) {
      this._sliderList.style.transition = 'transform 0.5s ease-in-out';
    } else {
      this._sliderList.style.transition = 'none';
    }
    this._active = status;
  }
  _leftMove() {
    if (!this._active) {
      return;
    }

    if (this._position <= 0) {
      this._position = this._elementCount - 1;

      this._move(this._sliderList.offsetWidth * 1, false, false);

      const fakeNode = this._cardArray[this._cardArray.length - 1].cloneNode(true);
      this._sliderList.prepend(fakeNode);

      setTimeout(() => {this._move(0, false, true);}, 1);
      setTimeout(() => {
        fakeNode.remove();
        this._move((this._sliderList.offsetWidth * (this._elementCount - 1)), true, false);
      }, 500);
    } else {
      this._position--;
      this._move((this._sliderList.offsetWidth * this._position), true);
    }

    if (this._textElement) {
      this._textElement.textContent = `${this._position + 1}/${this._elementCount}`;
    }
  }
  _rightMove() {
    if (!this._active) {
      return;
    }

    if (this._position >= this._elementCount - 1) {
      this._position = 0;

      const fakeNode = this._cardArray[0].cloneNode(true);
      this._sliderList.append(fakeNode);

      this._move((this._sliderList.offsetWidth * this._elementCount), false);
      setTimeout(() => {
        this._move(0, true, false);
        fakeNode.remove();
      }, 500);
    } else {
      this._position++;
      this._move((this._sliderList.offsetWidth * this._position), true);
    }
    if (this._textElement) {
      this._textElement.textContent = `${this._position + 1}/${this._elementCount}`;
    }
  }

  setEventListeners() {
    this._previousButton.addEventListener('click', this._leftMove.bind(this));
    this._nextButton.addEventListener('click', this._rightMove.bind(this));
  }
}