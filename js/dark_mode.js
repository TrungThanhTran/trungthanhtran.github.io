// Dark mode toggle
(function () {
  var saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var html = document.documentElement;
      var current = html.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      html.classList.add('transition');
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      setTimeout(function () { html.classList.remove('transition'); }, 400);
    });
  });
})();
