(() => {
  const refs = {
    // Modal-10
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalCheapBtn: document.querySelector('[data-modal-open-cheap]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalCheapBtn: document.querySelector('[data-modal-close-cheap]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal_cheap: document.querySelector('[data-modal-cheap]'),

    // Modal-65
    openModalAverageBtn: document.querySelector('[data-modal-open-average]'),
    closeModalAverageBtn: document.querySelector('[data-modal-close-average]'),
    modal_average: document.querySelector('[data-modal-average]'),

    // Modal-80
    openModalPremiumBtn: document.querySelector('[data-modal-open-premium]'),
    closeModalPremiumBtn: document.querySelector('[data-modal-close-premium]'),
    modal_premium: document.querySelector('[data-modal-premium]'),

    // Modal-81
    openModalPremiumOneBtn: document.querySelector(
      '[data-modal-open-premium-one]'
    ),
    closeModalPremiumOneBtn: document.querySelector(
      '[data-modal-close-premium-one]'
    ),
    modal_premium_one: document.querySelector('[data-modal-premium-one]'),

    // Mobile
    openMobileBtn: document.querySelector('[data-mobile-open]'),
    closeMobileBtn: document.querySelector('[data-mobile-close]'),
    mobile: document.querySelector('[data-mobile]'),
  };

  // Desktop
  refs.openModalCheapBtn.addEventListener('click', toggleModalCheap);
  refs.closeModalCheapBtn.addEventListener('click', toggleModalCheap);

  refs.openModalAverageBtn.addEventListener('click', toggleModalAverage);
  refs.closeModalAverageBtn.addEventListener('click', toggleModalAverage);

  refs.openModalPremiumBtn.addEventListener('click', toggleModalPremium);
  refs.closeModalPremiumBtn.addEventListener('click', toggleModalPremium);

  refs.openModalPremiumOneBtn.addEventListener('click', toggleModalPremium);
  refs.closeModalPremiumOneBtn.addEventListener('click', toggleModalPremium);

  // Mobile
  refs.openMobileBtn.addEventListener('click', toggleMobile);
  refs.closeMobileBtn.addEventListener('click', toggleMobile);

  // Desktop
  function toggleModalCheap() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal_cheap.classList.toggle('is-open');
  }

  function toggleModalAverage() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal_average.classList.toggle('is-open');
  }

  function toggleModalPremium() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal_premium.classList.toggle('is-open');
  }

  // Mobile
  function toggleMobile() {
    refs.mobile.classList.toggle('is-open');
  }
})();
