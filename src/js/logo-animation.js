import { refs } from './refs';

refs.header.addEventListener('mouseenter', () => {
  refs.logo.classList.add('spin');

  setTimeout(() => {
    refs.logo.classList.remove('spin');
  }, 3000);
});
