export function changeButton(button) {
  if (button.classList.contains('button_type_accordeon-checked')) {
    button.classList.remove('button_type_accordeon-checked')
  } else {
    document.querySelectorAll('.button_type_accordeon').forEach((el) =>
      el.classList.remove('button_type_accordeon-checked'))
    button.classList.add('button_type_accordeon-checked')
  }
}

export function openAccordion(parent) {
  if (parent.classList.contains('accordion__item-active')) {
    parent.classList.remove('accordion__item-active')
  } else {
    document.querySelectorAll('.accordion__item').forEach((child) =>
      child.classList.remove('accordion__item-active'))
    parent.classList.add('accordion__item-active')
  }
}