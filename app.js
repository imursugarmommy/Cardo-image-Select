const carousell = document.querySelector('.carousell');
const afterElem = getComputedStyle(carousell, '::after');
const carousellElem = document.querySelectorAll('.carousell > *');

document.addEventListener('click', (e) => {
  const target = e.target;
  let index;

  if (target.classList.contains('picture')) {
    index = target.getAttribute('index');

    carousell.style.setProperty('--multiplier', index);
  } else if (target.classList.contains('carousell-image')) {
    index = target.parentNode.getAttribute('index');

    carousell.style.setProperty('--multiplier', index);
  } else return;

  const image = target.closest('img');
  const source = image.src;
  const bigImgDiv = document.querySelector('.big-img');

  bigImgDiv.innerHTML = `<img src="${source}" />`;
});
