import Swal from 'sweetalert2';
import validator from 'validator';

export const modalNewsletter = () => {
  const newsletterform = document.querySelector('.newsletter__form');
  const emailInput = document.querySelector('.newsletter__email-input');

  newsletterform.addEventListener('submit', e => {
    e.preventDefault();

    if (!emailInput.value) {
      Swal.fire('Error', 'You have to introduce your email', 'error');
    }

    if (!validator.isEmail(emailInput.value)) {
      Swal.fire(
        'Error',
        'You have to introduce a valid email address',
        'error'
      );
    }

    if (validator.isEmail(emailInput.value)) {
      Swal.fire(
        'Congrats!',
        'Your email has been successfully submitted',
        'success'
      );
      emailInput.value = '';
      emailInput.blur();
    }
  });
};
