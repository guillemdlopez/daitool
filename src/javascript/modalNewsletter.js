import Swal from 'sweetalert2';
import validator from 'validator';

export const modalNewsletter = () => {
  const newsletterform = document.querySelector('.newsletter__form');
  const emailInput = document.querySelector('.newsletter__email-input');

  newsletterform.addEventListener('submit', e => {
    e.preventDefault();

    if (emailInput.value === '') {
      Swal.fire({
        confirmButtonColor: '#fb5341',
        title: 'Error ⛔️',
        text: 'You have to introduce your email',
        icon: 'error',
      });
    }

    if (!validator.isEmail(emailInput.value)) {
      Swal.fire({
        confirmButtonColor: '#fb5341',
        title: 'Not valid ⛔️',
        text: 'You have to introduce a valid email address ',
        icon: 'error',
      });
    }

    if (validator.isEmail(emailInput.value)) {
      Swal.fire({
        confirmButtonColor: '#fb5341',
        title: 'Congrats! 🥳🎉',
        text: 'Your email has been successfully submitted',
        icon: 'success',
      });
      emailInput.value = '';
      emailInput.blur();
    }
  });
};
