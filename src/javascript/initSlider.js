export const initSlider = function () {
  const btnLeft = document.querySelector('.selected__prods--btn-left');
  const btnRight = document.querySelector('.selected__prods--btn-right');
  const sliderDiv = document.querySelector('.selected__prods-slider');
  const card = document.querySelector('.selected__prods-card');
  const controls = document.querySelector('.controls');
  console.log(controls);
  let initMoveRight = 0;
  let totalPixels = 0;

  controls.addEventListener('click', e => {
    if (!e.target.closest('.btn')) return;
    const right = e.target.closest('.selected__prods--btn-right');
    const left = e.target.closest('.selected__prods--btn-left');

    console.log(totalPixels);

    if (totalPixels === 1960) {
      btnRight.classList.add('inactive__btn');
      btnRight.classList.remove('active__primary__btn');
      btnRight.disabled = true;
    } else if (totalPixels < 1960) {
      btnRight.classList.remove('inactive__btn');
      btnRight.classList.add('active__primary__btn');
      btnRight.disabled = false;
    }

    if (right) {
      if (totalPixels === 1960) return;

      // enable btnLeft
      btnLeft.classList.add('active__primary__btn');

      // get width and the margin right of the card
      const pixelsToMove =
        +card.style.width.substring(0, 3) +
        +card.style.marginRight.substring(0, 2);

      totalPixels = initMoveRight += pixelsToMove;
      // move the div
      sliderDiv.style.transform = `translate3d(-${totalPixels}px, 0px, 0px)`;

      console.log(totalPixels);
    }

    if (left && btnLeft.classList.contains('active__primary__btn')) {
      const pixelsToMove =
        +card.style.width.substring(0, 3) +
        +card.style.marginRight.substring(0, 2);

      totalPixels -= pixelsToMove;

      initMoveRight -= pixelsToMove;

      sliderDiv.style.transform = `translate3d(-${totalPixels}px, 0px, 0px)`;

      if (totalPixels === 0) {
        btnLeft.classList.remove('active__primary__btn');
      }
    }
  });
};
