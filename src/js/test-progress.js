'use strict';

(function() {
  var testProgress = document.querySelector('.test-progress');

  if (testProgress) {
    var width = testProgress.clientWidth;

    var hrefs = testProgress.querySelectorAll('.test-progress__step');
    var hrefWidth = hrefs[0].clientWidth;
    var HREF_MARGIN = 7;

    var hrefsWidth = hrefs.length * hrefWidth + hrefs.length * HREF_MARGIN;

    if ( hrefsWidth > width ) {
      hrefs = Array.prototype.slice.call(hrefs, 0);

      hrefs.forEach(function(hrefsItem) {
        hrefsItem.innerHTML = '';
        hrefsItem.style.width = '15px';
      });
    }
  }
})();
