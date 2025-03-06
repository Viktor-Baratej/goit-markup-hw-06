(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'), // Кнопка відкриття меню
    closeMenuBtn: document.querySelector('[data-menu-close]'), // Кнопка закриття меню
    menu: document.querySelector('[data-menu]'), // Саме меню
    menuLinks: document.querySelectorAll('.mobile-menu-link'), // Посилання в меню
    body: document.body, // Блокування скролу сторінки
  };

  // Обробники подій для кнопок відкриття/закриття меню
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  // Закриваємо меню при натисканні на будь-яке посилання в мобільному меню
  refs.menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll'); // Блокуємо/розблоковуємо прокрутку
  }

  function closeMenu() {
    refs.menu.classList.remove('is-open');
    refs.body.classList.remove('no-scroll'); // Розблоковуємо прокрутку
  }
})();
