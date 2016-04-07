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

  var deleteImage = document.querySelectorAll('.edit-quest__item-img button');

  if (deleteImage) {
    deleteImage = Array.prototype.slice.call(deleteImage, 0);

    deleteImage.forEach(function(image) {
      image.addEventListener('click', function(event) {
        event.preventDefault();
        image.parentNode.remove();
      });
    });
  }

  var deleteVideo = document.querySelectorAll('.edit-videos__item-delete');

  if (deleteVideo) {
    deleteVideo = Array.prototype.slice.call(deleteVideo, 0);

    deleteVideo.forEach(function(image) {
      image.addEventListener('click', function(event) {
        event.preventDefault();
        image.parentNode.remove();
      });
    });
  }
})();
