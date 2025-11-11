(() => {
  const setupModal = name => {
    const modal = document.querySelector(`[data-modal-${name}]`);
    const openBtn = document.querySelector(`[data-modal-open-${name}]`);
    const closeBtn = document.querySelector(`[data-modal-close-${name}]`);

    if (!modal || !openBtn || !closeBtn) return;

    const toggle = () => {
      const isOpen = modal.classList.toggle('is-open');
      if (isOpen) {
        attachListeners();
        document.body.style.overflow = 'hidden';
      } else {
        detachListeners();
        document.body.style.overflow = '';
      }
    };

    const handleBackdropClick = e => {
      if (e.target === modal) toggle();
    };

    const attachListeners = () => {
      closeBtn.addEventListener('click', toggle);
      modal.addEventListener('click', handleBackdropClick);
    };

    const detachListeners = () => {
      closeBtn.removeEventListener('click', toggle);
      modal.removeEventListener('click', handleBackdropClick);
    };

    // Open modal - always listening:
    openBtn.addEventListener('click', toggle);
  };

  // Modals init:
  ['cheap', 'average', 'premium', 'premium-one'].forEach(setupModal);
})();

//test message
//test message2
