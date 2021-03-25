export const initScroll = () => {
  const menu = document.querySelector('.menu');

  menu.addEventListener('click', e => {
    if (!e.target.dataset.section) return;
    const menuItem = e.target.dataset.section;
    const section = document.querySelector(`section[id=${menuItem}]`);

    section.scrollIntoView({ behavior: 'smooth' });
  });
};
