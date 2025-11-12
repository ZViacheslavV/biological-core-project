(() => {
  const header = document.querySelector('.page-header');
  const mobileMenu = document.querySelector('.mobile-menu');
  const burger = document.querySelector('.burger-btn');
  const closeBtn = document.querySelector('.close-btn');
  let lastY = window.scrollY;

  const toggleHeaderOnScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('hide', y > lastY && y > 40);

    // If moving - close header
    if (y !== lastY) {
      mobileMenu.classList.remove('is-open');
      burger.classList.remove('hide');
      closeBtn.classList.replace('visible', 'hide');
    }

    lastY = y;
  };

  const toggleButtons = isBurgerVisible => {
    burger.classList.toggle('hide', !isBurgerVisible);
    closeBtn.classList.toggle('hide', isBurgerVisible);
    closeBtn.classList.toggle('visible', !isBurgerVisible);
  };

  window.addEventListener('scroll', toggleHeaderOnScroll);
  burger.addEventListener('click', () => toggleButtons(false));
  closeBtn.addEventListener('click', () => toggleButtons(true));
})();
