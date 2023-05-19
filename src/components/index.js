import('../pages/index.css');

// const slider = document.querySelector('.slider');
// const sliderList = slider.querySelector('.slider__list');
// const slides = slider.querySelectorAll('.slider__slide');
// const prevButton = slider.querySelector('.button_type_slider_previous');
// const nextButton = slider.querySelector('.button_type_slider_next');

const sliderList = document.querySelector('.slider__list');
const slide = document.querySelectorAll('.slider__slide');
const slideLength = slide.length;

const nextButton = document.querySelector(".button_type_slider_next");
const previousButton = document.querySelector(".button_type_slider_previous");
let slider = [];

for (let i = 0; i < slideLength; i++) {
  slider[i] = slide[i];
  slide[i].remove();
}

let step = 0;
let offset = 0;

function infoSlider() {
  let elementSlide = document.createElement('li');
  elementSlide = slider[slider.length - 1];
  elementSlide.classList.add('slider__slide');
  elementSlide.style.left = -1360 + 'px';
  sliderList.appendChild(elementSlide);

  elementSlide = slider[step];
  elementSlide.classList.add('slider__slide');
  elementSlide.style.left = offset * 1360 + 'px';
  sliderList.appendChild(elementSlide);

  elementSlide = slider[step + 1];
  elementSlide.classList.add('slider__slide');
  elementSlide.style.left = offset*1360 + 1360 + 'px';
  sliderList.appendChild(elementSlide);

  offset = 1;
}

function infoSliderPrevious() {
  if (step == 0) {
    step = slider.length - 2;
  } else {
    if (step == 1) {
      step = slider.length - 1;
    } else {
      step = step - 2;
    }
  }

  let offset = -1;
  let elementSlide = document.createElement('li');
  elementSlide = slider[step];
  elementSlide.classList.add('slider__slide');
  elementSlide.style.left = offset*1360 + 'px';
  sliderList.insertBefore(elementSlide, sliderList.firstElementChild);

  if (step == slider.length - 1) {
    step = 0;
  } else {
    step = step + 1;
  }
  
  offset = 1;

}
 

function previous() {
  previousButton.onclick = null;
  let slider2 = document.querySelectorAll('.slider__slide');
  let offset2 = -1;

  for (let i = 0; i < slider2.length; i++) {
    slider2[i].style.left = offset2*1360 - 1360 + 'px';
    offset2++;
  }


  setTimeout(function () {
    slider2[0].remove();
    infoSliderPrevious();
    previousButton.onclick = previous;
  }, 400);
}

function infoSliderNext() {
 
  if (step == slider.length - 1) {
    step = 1;
  } else {
    if (step == slider.length - 2) {
      step = 0;
    } else {
      step = step + 2;
    }
  }

  let elementSlide = document.createElement('li');
  elementSlide = slider[step];
  elementSlide.classList.add('slider__slide');
  elementSlide.style.left = offset*1360 + 'px';
  sliderList.appendChild(elementSlide);

  if (step == 0) {
    step = slider.length - 1;
  } else {
    step = step - 1;
  }

  offset = 1;
}

function next() {
  nextButton.onclick = null;

  let slider2 = document.querySelectorAll('.slider__slide');
  let offset2 = slider2.length - 1;

  for (let i = slider2.length - 1; i >= 0; i--) {
    slider2[i].style.left = offset2*1360 + 'px';
    offset2--;
  }

  setTimeout(function () {
    slider2[slider2.length - 1].remove();
    infoSliderNext();
    nextButton.onclick = next;
  }, 400);
}

infoSlider();
step = 0;

previousButton.onclick = previous;
nextButton.onclick = next;

// const slider = document.querySelector('.slider__list');
// const previousButton = document.querySelector('.button_type_slider_previous');
// const nextButton = document.querySelector('.button_type_slider_next');
// const slideWidth = slider.offsetWidth;

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
