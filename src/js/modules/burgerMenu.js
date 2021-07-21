const burgerMenu = () => {
  const burgerBtn = document.querySelector('.header__mobile-btn');
  const crossBtn = document.querySelector('.header__nav-mobile-cross');
  const menu = document.querySelector('.header__nav');
  const body = document.querySelector('body');

  burgerBtn.addEventListener('click', () => {
    menu.classList.add('header__nav--open');
    body.style.overflow = 'hidden';
  });

  crossBtn.addEventListener('click', () => {
    menu.classList.remove('header__nav--open');
    body.style.overflow = 'initial';
  });
};

export default burgerMenu;