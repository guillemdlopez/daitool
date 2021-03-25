export const initSidebar = () => {
  const burger = document.querySelector('.navbar__burger-menu');
  const sidebar = document.querySelector('.sidebar');

  if (burger) {
    console.log(burger);
    burger.addEventListener('click', e => {
      if (!e.target.classList.contains('navbar__burger-menu')) return;
      console.log(sidebar);
      sidebar.style.transform = 'translateX(0px)';
      sidebar.style.transition = 'transform 0.3s';
    });
  }
};
