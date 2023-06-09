import { anchorSupport, anchorDigits, anchorFooter,anchorActivities, anchorNews, anchorProject, anchorImportant, anchorfor, anchorSlider, anchorGallery,  anchorStories,menu, menuIcon } from "../utils/constants.js";


function scrollToAnchor(anchors) {
  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const sectionID = anchor.getAttribute('href');
      menuIcon.classList.remove('header__menu-pic_type_close');
      menu.classList.add('menu_hidden');
      document.querySelector(sectionID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
}

export function scrollToAnchors() {
  scrollToAnchor(anchorSupport);
  scrollToAnchor(anchorFooter);
  scrollToAnchor(anchorActivities);
  scrollToAnchor(anchorNews);
  scrollToAnchor(anchorProject);
  scrollToAnchor(anchorDigits);
  scrollToAnchor(anchorImportant);
  scrollToAnchor(anchorStories);
  scrollToAnchor(anchorGallery);
  scrollToAnchor(anchorSlider);
  scrollToAnchor(anchorfor);
}