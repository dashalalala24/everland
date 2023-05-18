import('../pages/index.css');


const slider = document.querySelector('.slider__list');
const previousButton = document.querySelector('.button_type_slider_previous');
const nextButton = document.querySelector('.button_type_slider_next');
const slideWidth = slider.offsetWidth;

previousButton.addEventListener('click', () => {
  slider.style.transform = `translateX(-${slideWidth}px)`;
  slider.style.transition = 'transform 0.5s ease-in-out';

  setTimeout(() => {
    slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
    slider.style.transform = 'translateX(0)';
    slider.style.transition = 'none';
  }, 500);
});

nextButton.addEventListener('click', () => {
  slider.style.transform = `translateX(${slideWidth}px)`;
  slider.style.transition = 'transform 0.5s ease-in-out';

  setTimeout(() => {
    slider.appendChild(slider.firstElementChild);
    slider.style.transform = 'translateX(0)';
    slider.style.transition = 'none';
  }, 600);
});