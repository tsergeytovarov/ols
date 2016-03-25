'use strict';

(function() {
  var filterCollapse = document.querySelectorAll('.js-filter-collapse');

  if (filterCollapse) {
    filterCollapse = Array.prototype.slice.call(filterCollapse, 0);

    filterCollapse.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();
        item.parentNode.classList.toggle('filter--open');
      });
    });
  }
})();
