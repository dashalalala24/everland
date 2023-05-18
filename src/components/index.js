import('../pages/index.css');


<<<<<<< HEAD
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
=======
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
>>>>>>> 224b609b5ddc3ec2640d81c7b76296d9f11baeef
