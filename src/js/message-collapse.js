'use strict';

(function() {
  var messagesCollapse = document.querySelectorAll('.js-messages-collapse');

  if (messagesCollapse) {
    messagesCollapse = Array.prototype.slice.call(messagesCollapse, 0);

    messagesCollapse.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();
        item.parentNode.classList.toggle('messages__col--open');
      });
    });
  }
})();
