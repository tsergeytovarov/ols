'use strict';

(function() {
  var moreBtns = document.querySelectorAll('.js-button-more');

  if (moreBtns) {
    moreBtns = Array.prototype.slice.call(moreBtns, 0);

    moreBtns.forEach(function(moreBtn) {
      moreBtn.addEventListener('click', function(event) {
        event.preventDefault();
        var target = moreBtn.dataset.target;
        var targetBlock = document.querySelector('.' + target);
        if (targetBlock) {
          targetBlock.classList.toggle(target + '--open');
        }
      });
    });
  }
})();
