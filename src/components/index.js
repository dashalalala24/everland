import('../pages/index.css');


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