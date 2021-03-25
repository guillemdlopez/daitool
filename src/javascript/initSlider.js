export const initSlider = function () {
  const btnLeft = document.querySelector('.selected__prods--btn-left');
  const btnRight = document.querySelector('.selected__prods--btn-right');
  const sliderDiv = document.querySelector('.selected__prods-slider');
  const card = document.querySelector('.selected__prods-card');
  const controls = document.querySelector('.controls');
  console.log(controls);
  let initMove = 0;

  controls.addEventListener('click', e => {
    btnLeft.disabled = true;
    if (!e.target.closest('.selected__prods--btn-right')) return;
    // enable btnLeft
    btnLeft.classList.add('active__primary__btn');

    // get width of the card
    const width =
      +card.style.width.substring(0, 3) +
      +card.style.marginRight.substring(0, 2);

    const pixels = (initMove += width);
    // move the div
    sliderDiv.style.transform = `translate3d(-${pixels}px, 0px, 0px)`;

    console.log('right!');
  });
};
