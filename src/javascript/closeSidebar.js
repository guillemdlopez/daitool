export const closeSidebar = () => {
  const closeIcon = document.querySelector('.sidebar__close');
  const sidebar = document.querySelector('.sidebar');

  if (closeIcon) {
    closeIcon.addEventListener('click', e => {
      sidebar.style.transform = 'translateX(-328px)';
      sidebar.style.transition = 'transform 0.3s';
    });
  }
};
