const openNav = document.querySelector('.btn-open');
const closeNav = document.querySelector('.btn-close');
const menu = document.querySelector('.nav-list');

openNav.addEventListener('click', () => {
  menu.classList.add('show');
});

closeNav.addEventListener('click', () => {
  menu.classList.remove('show');
});
