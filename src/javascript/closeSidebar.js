export const closeSidebar = () => {
  const closeIcon = document.querySelector('.sidebar__close');
  const sidebar = document.querySelector('.sidebar');

  if (closeIcon) {
    closeIcon.addEventListener('click', e => {
      if (!e.target.classList.contains('sidebar__close')) return;

      sidebar.classList.add('sidebar__hide');
      sidebar.style.transition = 'transform 0.3s';
    });
  }
};
