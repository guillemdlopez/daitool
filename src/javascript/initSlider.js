export const initSlider = function () {
  const btnLeft = document.querySelector('.selected__prods--btn-left');
  const btnRight = document.querySelector('.selected__prods--btn-right');
  const sliderDiv = document.querySelector('.selected__prods-slider');
  const card = document.querySelector('.selected__prods-card');
  const controlsDiv = document.querySelector('.controls');
  let initMoveRight = 0;
  let totalPixels = 0;
  const pixelsToMove =
    +card.style.width.substring(0, 3) + +card.style.marginRight.substring(0, 2);

  controlsDiv.addEventListener('click', e => {
    if (!e.target.closest('.btn')) return;
    const right = e.target.closest('.selected__prods--btn-right');
    const left = e.target.closest('.selected__prods--btn-left');

    if (right && btnRight.classList.contains('active__primary__btn')) {
      // enable btnLeft
      btnLeft.classList.add('active__primary__btn');

      totalPixels = initMoveRight += pixelsToMove;
      // move the div
      sliderDiv.style.transform = `translate3d(-${totalPixels}px, 0px, 0px)`;

      if (totalPixels === 1960) {
        btnRight.classList.remove('active__primary__btn');
        btnRight.classList.add('inactive__btn');
      }
    }

    if (left && btnLeft.classList.contains('active__primary__btn')) {
      if (totalPixels <= 1960) {
        btnRight.classList.remove('inactive__btn');
        btnRight.classList.add('active__primary__btn');
      }

      totalPixels -= pixelsToMove;

      initMoveRight -= pixelsToMove;

      sliderDiv.style.transform = `translate3d(-${totalPixels}px, 0px, 0px)`;

      if (totalPixels === 0) {
        btnLeft.classList.remove('active__primary__btn');
        btnLeft.diabled = true;
      }
    }
  });
};
