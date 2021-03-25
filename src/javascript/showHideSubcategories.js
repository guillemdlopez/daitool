export const showHideSubCategories = () => {
  const menu = document.querySelector('.menu');
  const allSubCategories = document.querySelectorAll('.menu__subcategories');

  menu.addEventListener('mouseover', e => {
    if (!e.target.dataset.cat) return;

    allSubCategories.forEach(subcat => subcat.classList.add('hidden'));

    const category = e.target;
    const data = category.dataset.cat;

    const subCategories = document.querySelector(`.${data}-sub`);
    subCategories.classList.remove('hidden');
  });

  document.addEventListener('mouseover', e => {
    if (
      e.target.classList.contains('menu__item') ||
      e.target.closest('.menu__subcategories')
    )
      return;

    allSubCategories.forEach(subcat => subcat.classList.add('hidden'));
  });
};
