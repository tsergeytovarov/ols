'use strict';

(function() {
  var collapse = document.querySelectorAll('.js-collapse');

  if (collapse) {
    collapse = Array.prototype.slice.call(collapse, 0);

    collapse.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();

        var btn = item.querySelector('.js-collapse-text');
        var text = item.dataset.text;

        btn.dataset.text = btn.innerHTML;
        btn.innerHTML = text;

        item.parentNode.parentNode.classList.toggle('collapse--open');
      });
    });
  }
})();
