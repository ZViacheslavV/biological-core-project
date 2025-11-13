import { refs } from './refs';

let lastY = window.scrollY;

const toggleHeaderOnScroll = () => {
  const y = window.scrollY;
  refs.header.classList.toggle('hide', y > lastY && y > 40);

  // If moving - close header
  if (y !== lastY) {
    refs.mobileMenu.classList.remove('is-open');
    refs.burger.classList.remove('hide');
    refs.closeBtn.classList.replace('visible', 'hide');
  }

  lastY = y;
};

const toggleButtons = isBurgerVisible => {
  refs.burger.classList.toggle('hide', !isBurgerVisible);
  refs.closeBtn.classList.toggle('hide', isBurgerVisible);
  refs.closeBtn.classList.toggle('visible', !isBurgerVisible);
};

window.addEventListener('scroll', toggleHeaderOnScroll);
refs.burger.addEventListener('click', () => toggleButtons(false));
refs.closeBtn.addEventListener('click', () => toggleButtons(true));
