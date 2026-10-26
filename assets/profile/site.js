(function () {
  'use strict';
  var root = document.documentElement;
  var toggles = document.querySelectorAll('[data-theme-toggle]');
  function setTheme(next) {
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('cn-color-theme', next); } catch (e) {}
    toggles.forEach(function (button) {
      var isDark = next === 'dark';
      var text = button.querySelector('[data-theme-label]');
      if (text) text.textContent = isDark ? 'Light mode' : 'Dark mode';
      button.setAttribute('aria-label', 'Switch to ' + (isDark ? 'light' : 'dark') + ' mode');
      button.setAttribute('aria-pressed', String(isDark));
      button.title = 'Switch to ' + (isDark ? 'light' : 'dark') + ' mode';
    });
  }
  setTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  toggles.forEach(function (button) {
    button.addEventListener('click', function () {
      setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  });
  var mobileButton = document.getElementById('pf-menu-toggle');
  var sidebar = document.getElementById('pf-sidebar');
  var backdrop = document.getElementById('pf-backdrop');
  function closeMenu() {
    if (!sidebar || !mobileButton) return;
    sidebar.classList.remove('pf-sidebar--open');
    mobileButton.setAttribute('aria-expanded', 'false');
    mobileButton.setAttribute('aria-label', 'Open navigation');
    if (backdrop) backdrop.hidden = true;
    document.body.classList.remove('pf-menu-open');
  }
  if (sidebar && mobileButton) {
    mobileButton.addEventListener('click', function () {
      var isOpen = !sidebar.classList.contains('pf-sidebar--open');
      sidebar.classList.toggle('pf-sidebar--open', isOpen);
      mobileButton.setAttribute('aria-expanded', String(isOpen));
      mobileButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      if (backdrop) backdrop.hidden = !isOpen;
      document.body.classList.toggle('pf-menu-open', isOpen);
    });
    if (backdrop) backdrop.addEventListener('click', closeMenu);
    sidebar.querySelectorAll('nav a').forEach(function (anchor) {
      anchor.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) closeMenu();
    });
  }
  // Optional figure viewer. Direct image links remain usable if <dialog> is unavailable.
  var viewer = document.getElementById('pf-gallery-dialog');
  var galleryLinks = Array.prototype.slice.call(document.querySelectorAll('.pf-gallery-card'));
  if (viewer && galleryLinks.length && typeof viewer.showModal === 'function') {
    var fullImage = document.getElementById('pf-gallery-dialog-image');
    var fullCaption = document.getElementById('pf-gallery-dialog-caption');
    var closeViewer = viewer.querySelector('.pf-gallery-dialog-close');
    var current = 0;
    function showFigure(index) {
      current = (index + galleryLinks.length) % galleryLinks.length;
      var link = galleryLinks[current];
      var thumb = link.querySelector('img');
      fullImage.src = link.href;
      fullImage.alt = thumb ? thumb.alt : 'Research image';
      fullCaption.textContent = link.getAttribute('data-gallery-caption') || '';
    }
    galleryLinks.forEach(function (link, index) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        showFigure(index);
        viewer.showModal();
        closeViewer.focus();
      });
    });
    closeViewer.addEventListener('click', function () { viewer.close(); });
    viewer.querySelector('[data-gallery-prev]').addEventListener('click', function () { showFigure(current - 1); });
    viewer.querySelector('[data-gallery-next]').addEventListener('click', function () { showFigure(current + 1); });
    viewer.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') { event.preventDefault(); showFigure(current - 1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); showFigure(current + 1); }
    });
    viewer.addEventListener('click', function (event) { if (event.target === viewer) viewer.close(); });
    viewer.addEventListener('close', function () { fullImage.removeAttribute('src'); });
  }
})();
