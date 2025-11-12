const logo = document.querySelector('.header-logo');

logo.addEventListener('mouseenter', () => {
  logo.classList.add('spin');

  setTimeout(() => {
    logo.classList.remove('spin');
  }, 3000);
});
