const burger = document.querySelector('.humburger-menu'),
  menu = document.querySelector('.menu'),
  menuLinks = document.querySelectorAll('.menu-list__item');

burger.addEventListener('click', () => {
  menu.classList.add('menu-active');
})

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu-active');
  })
});

document.addEventListener('click', (e) => {
  if (!(e.target.closest('.menu') || e.target.closest('.humburger-menu'))) {
    menu.classList.remove('menu-active');
  }
})