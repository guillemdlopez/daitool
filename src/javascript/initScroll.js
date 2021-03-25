export const initScroll = () => {
  const menu = document.querySelector('.menu');
  const footer = document.querySelector('footer');

  menu.addEventListener('click', e => {
    if (!e.target.dataset.section) return;
    const menuItem = e.target.dataset.section;
    const section = document.querySelector(`section[id=${menuItem}]`);

    if (menuItem === 'about') {
      footer.scrollIntoView({ behavior: 'smooth' });
    } else {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
};
