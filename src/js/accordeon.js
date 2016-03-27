'use strict';

(function() {
  var accordeon = document.querySelectorAll('.js-accordeon');

  if (accordeon) {
    accordeon = Array.prototype.slice.call(accordeon, 0);

    accordeon.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();
        item.parentNode.classList.toggle('test-result__item--active');
      });
    });
  }
})();
