export const scrollToEmailInput = () => {
  const btnWhite = document.querySelector('.newsletter__banner--subscribe-btn');
  const inputForm = document.querySelector('.newsletter__email-input');
  console.log(inputForm);

  btnWhite.addEventListener('click', e => {
    inputForm.scrollIntoView({ behavior: 'smooth' });
    inputForm.focus();
  });
};
