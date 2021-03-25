export const initSidebar = () => {
  const burger = document.querySelector('.navbar__burger-menu');
  const sidebar = document.querySelector('.sidebar');

  if (burger) {
    burger.addEventListener('click', e => {
      if (!e.target.classList.contains('navbar__burger-menu')) return;

      sidebar.classList.remove('sidebar__hide');
      sidebar.style.transition = 'transform 0.3s';
    });
  }
};
