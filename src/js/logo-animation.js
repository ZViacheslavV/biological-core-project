const logo = document.querySelector('.header-logo');

logo.addEventListener('mouseenter', () => {
  logo.classList.add('spin');

  // Якщо хочеш обмежити 3 секундами
  setTimeout(() => {
    logo.classList.remove('spin'); // видаляє клас після завершення
  }, 3000);
});
