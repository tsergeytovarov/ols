'use strict';

(function() {
  var deleteTest = document.querySelectorAll('.js-test-delete');

  if (deleteTest) {
    deleteTest = Array.prototype.slice.call(deleteTest, 0);

    deleteTest.forEach(function(test) {
      test.addEventListener('click', function(event) {
        event.preventDefault();

        var replacedNode = test.parentNode.parentNode;
        var newChild = document.createElement('div');
        newChild.classList.add('form-alert');
        newChild.classList.add('form-alert--edit-test');
        newChild.innerHTML = '<span class="form-alert__text">Question deleted</span><a href="#" class="form-alert__link">Restore</a>';

        replacedNode.parentNode.replaceChild(newChild, replacedNode);

      });
    });
  }
})();
