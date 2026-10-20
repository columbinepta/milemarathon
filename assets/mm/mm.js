// The phone menu button in the Mile Marathon header.
(function () {
  var header = document.querySelector('.mm-header');
  var button = header && header.querySelector('.mm-menu-btn');
  if (!button) return;
  button.addEventListener('click', function () {
    var open = header.classList.toggle('is-open');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('is-open')) {
      header.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      button.focus();
    }
  });
})();
