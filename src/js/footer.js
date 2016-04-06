'use strict';

(function() {
  var footerOpen = document.querySelectorAll('.footer__open-version');

  if (footerOpen) {
    footerOpen = Array.prototype.slice.call(footerOpen, 0);

    footerOpen.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();

        var footer = document.querySelector('.footer');
        footer.classList.toggle('footer--open');
      });
    });
  }
})();

(function() {
  var footerClose = document.querySelectorAll('.js-footer-hide');

  if (footerClose) {
    footerClose = Array.prototype.slice.call(footerClose, 0);

    footerClose.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();

        var footer = document.querySelector('.footer');
        footer.classList.toggle('footer--open');
      });
    });
  }
})();
