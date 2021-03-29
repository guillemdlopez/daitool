export const scrollToEmailInput = () => {
  const btnWhite = document.querySelector('.newsletter__banner--subscribe-btn');
  const inputForm = document.querySelector('.newsletter__email-input');
  const btnBlack = document.querySelectorAll(
    '.newsletter__banner--subscribe-btn'
  )[1];

  btnWhite.addEventListener('click', () => {
    inputForm.scrollIntoView({ behavior: 'smooth' });
    inputForm.focus();

    if (window.innerWidth > 414) {
      inputForm.style.transition = 'transform 0.3s';
      inputForm.style.transform = 'scale(1.08)';

      btnBlack.style.transition = 'transform 0.3s';
      btnBlack.style.transform = 'scale(1.08)';

      setTimeout(() => {
        inputForm.style.transform = 'scale(1)';
        btnBlack.style.transform = 'scale(1)';
      }, 200);
    }
  });
};
