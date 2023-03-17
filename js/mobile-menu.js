(() => {
  // const mobileMenu = document.querySelector('.js-menu-container');
  const menuBtn = document.querySelector('.js-btn-menu');
  // const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
    menuBtn.getAttribute('aria-expanded') === 'true' || false;
    menuBtn.setAttribute('aria-expanded', !isMenuOpen);
    menuBtn.classList.toggle('menu-button--pressed');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  menuBtn.addEventListener('click', toggleMenu);
  // closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    menuBtn.classList.remove('menu-button--pressed');
    menuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();