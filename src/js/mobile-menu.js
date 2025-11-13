(() => {
  const setupToggle = name => {
    const el = document.querySelector(`[data-${name}]`);
    const openBtn = document.querySelector(`[data-${name}-open]`);
    const closeBtn = document.querySelector(`[data-${name}-close]`);

    if (!el || !openBtn || !closeBtn) return;

    const toggle = () => {
      const isOpen = el.classList.toggle('is-open');
    };
    openBtn.addEventListener('click', toggle);
    closeBtn.addEventListener('click', toggle);
  };

  setupToggle('mobile');
})();
