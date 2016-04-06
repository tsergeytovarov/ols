'use strict';

(function() {
  var closeAlert = document.querySelectorAll('.js-close-alert');

  if (closeAlert) {
    closeAlert = Array.prototype.slice.call(closeAlert, 0);

    closeAlert.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();

        item.parentNode.remove();
      });
    });
  }
})();
