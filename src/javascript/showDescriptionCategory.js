export const showDescriptionCategory = function () {
  const cardsDiv = document.querySelector('.categories__cards');
  const cardContents = document.querySelectorAll('.categories__card-content');

  cardsDiv.addEventListener('mouseover', e => {
    const card = e.target.closest('.categories__card');
    if (!card) return;

    cardContents.forEach(cont =>
      cont.classList.remove('categories__content--up')
    );

    const content = card.dataset.card;

    const cardContent = document.querySelector(`.content-${content}`);
    cardContent.classList.add('categories__content--up');
  });

  document.addEventListener('mouseover', e => {
    if (!e.target.closest('.categories__card')) {
      cardContents.forEach(cont =>
        cont.classList.remove('categories__content--up')
      );
    }
  });
};
