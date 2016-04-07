'use strict';

(function() {
  var deleteTest = document.querySelectorAll('.js-test-delete');

  if (deleteTest) {
    deleteTest = Array.prototype.slice.call(deleteTest, 0);

    deleteTest.forEach(function(test) {
      test.addEventListener('click', function(event) {
        event.preventDefault();

        test.parentNode.parentNode.remove();
      });
    });
  }
})();
