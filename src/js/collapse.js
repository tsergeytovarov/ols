'use strict';

(function() {
  var collapse = document.querySelectorAll('.js-collapse');

  if (collapse) {
    collapse = Array.prototype.slice.call(collapse, 0);

    collapse.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();

        var btn = item.querySelector('.js-collapse-text');
        var btnText = btn.innerHTML;
        var text = item.dataset.texte;

        console.log(btn.dataset.texte);

        btn.innerHTML = text;
        item.dataset.texte = btnText;

        item.parentNode.parentNode.classList.toggle('collapse--open');
      });
    });
  }
})();
