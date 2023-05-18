window.onload = function() {
  const menuButton = document.querySelector('.header__menu');
  const menuIcon = document.querySelector('.header__menu-pic');

  menuButton.addEventListener('click', toggleMenu);

  function toggleMenu() {
    const menu = document.querySelector('.menu');
    console.log(menu.classList);
    if (menu.classList.contains('menu_hidden')) {
      menuIcon.classList.add('header__menu-pic_type_close');
      menu.classList.remove('menu_hidden');
    } else {
      menuIcon.classList.remove('header__menu-pic_type_close');
      menu.classList.add('menu_hidden');
    }
  }
};

const menuArrowElements = document.querySelectorAll('.menu__arrow');

menuArrowElements.forEach((arrowElement) => {
  arrowElement.addEventListener('click', () => {
    const columnElement = arrowElement.closest('.menu__column');
    const linkElements = columnElement.querySelectorAll('.menu__link');

    const isAccordion = !linkElements[1].classList.contains('menu__link_accordeon');

    linkElements.forEach((linkElement) => {
      if (isAccordion && !linkElement.parentElement.classList.contains('menu__column-header')) {
        linkElement.classList.add('menu__link_accordeon');
        arrowElement.classList.remove('menu__arrow_type_up');
      } else {
        linkElement.classList.remove('menu__link_accordeon');
        arrowElement.classList.add('menu__arrow_type_up');
      }
    });
  });
});