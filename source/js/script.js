'use strict';

(function () {
  var header = document.querySelector('.header');
  var openBtn = document.querySelector('.header__btn--open');
  var closeBtn = document.querySelector('.header__btn--close');

  if (!header || !openBtn || !closeBtn) {
    return;
  }

  header.classList.remove('header--nojs');
  header.classList.remove('header--menu-open');

  openBtn.addEventListener('click', function () {
    header.classList.add('header--menu-open');
  });

  closeBtn.addEventListener('click', function () {
    header.classList.remove('header--menu-open');
  });
})();
