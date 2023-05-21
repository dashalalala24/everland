const projectSlider = document.querySelector('.slider');


function slide(slider) {
  const sliderList = slider.querySelector('.slider__list');
  console.log(sliderList);
  const previousButton = slider.querySelector('.button_type_slider_previous');
  const nextButton = slider.querySelector('.button_type_slider_next');

  previousButton.addEventListener('click', () => {
    const slideWidth = sliderList.offsetWidth;
    sliderList.style.transform = `translateX(-${slideWidth}px)`;
    sliderList.style.transition = 'transform 0.5s ease-in-out';

    setTimeout(() => {
      sliderList.insertBefore(sliderList.lastElementChild, sliderList.firstElementChild);
      sliderList.style.transform = 'translateX(0)';
      sliderList.style.transition = 'none';
    }, 500);
  });

  nextButton.addEventListener('click', () => {
    const slideWidth = sliderList.offsetWidth;
    sliderList.style.transform = `translateX(${slideWidth}px)`;
    sliderList.style.transition = 'transform 0.5s ease-in-out';

    setTimeout(() => {
      sliderList.appendChild(sliderList.firstElementChild);
      sliderList.style.transform = 'translateX(0)';
      sliderList.style.transition = 'none';
    }, 600);
  });
}

slide(projectSlider);
// const infoSlider = document.querySelector('.info-slider');
// slide(infoSlider);
