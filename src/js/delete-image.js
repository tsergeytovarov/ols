'use strict';

(function() {
  var deleteImage = document.querySelectorAll('.js-delete-image');

  if (deleteImage) {
    deleteImage = Array.prototype.slice.call(deleteImage, 0);

    deleteImage.forEach(function(image) {
      image.addEventListener('click', function(event) {
        event.preventDefault();
        var target = image.dataset.target;
        var targetBlock = document.querySelector('.' + target);
        console.log(targetBlock);
        if (targetBlock) {
          targetBlock.style.backgroundImage = '';
        }
      });
    });
  }
})();
