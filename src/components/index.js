import('../pages/index.css');

document.querySelectorAll('.accordion__item-container').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode
    if (parent.classList.contains('accordion__item-active')) {
      parent.classList.remove('accordion__item-active')

    } else {
      document.querySelectorAll('.accordion__item').forEach((child) =>
        child.classList.remove('accordion__item-active'))
      parent.classList.add('accordion__item-active')
    }
  })
)

// Так можно открыть все блоки
// document.querySelectorAll('.accordion__item-triger').forEach((item) =>
//   item.addEventListener('click', () => {
//     item.parentNode.classList.toggle('accordion__item-active')
//   })
// )