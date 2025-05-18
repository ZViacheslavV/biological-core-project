(() => {
  const refs = {
    // Desktop
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-modal-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-modal-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-modal]'),

    // Mobile
    openMobileBtn: document.querySelector('[data-mobile-open]'),
    closeMobileBtn: document.querySelector('[data-mobile-close]'),
    mobile: document.querySelector('[data-mobile]'),
  };

  // Desktop
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  // Mobile
  refs.openMobileBtn.addEventListener('click', toggleMobile);
  refs.closeMobileBtn.addEventListener('click', toggleMobile);

  // Desktop
  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }

  // Mobile
  function toggleMobile() {
    refs.mobile.classList.toggle('is-open');
  }
})();
