// Opens photos in an overlay instead of navigating to the bare image file.
// Close with the X button, a tap outside the photo, Esc, or the phone's back button.
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('figure.photo > a'));
  if (!links.length) return;

  var box = document.createElement('div');
  box.className = 'lightbox';
  box.hidden = true;
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.innerHTML =
    '<button class="lb-close" aria-label="Close">&times;</button>' +
    '<button class="lb-prev" aria-label="Previous photo">&#8249;</button>' +
    '<figure><img alt=""><figcaption></figcaption></figure>' +
    '<button class="lb-next" aria-label="Next photo">&#8250;</button>';
  document.body.appendChild(box);
  var img = box.querySelector('img'), cap = box.querySelector('figcaption');
  var prev = box.querySelector('.lb-prev'), next = box.querySelector('.lb-next');
  var i = 0, opener = null;

  function show(n) {
    i = (n + links.length) % links.length;
    var a = links[i], thumb = a.querySelector('img'), fc = a.parentNode.querySelector('figcaption');
    img.src = a.href;
    img.alt = thumb ? thumb.alt : '';
    cap.textContent = fc ? fc.textContent : '';
    cap.hidden = !cap.textContent;
  }
  function open(n) {
    opener = document.activeElement;
    show(n);
    prev.hidden = next.hidden = links.length < 2;
    box.hidden = false;
    document.body.style.overflow = 'hidden';
    history.pushState({ lightbox: true }, '');
    box.querySelector('.lb-close').focus();
  }
  function close(fromHistory) {
    if (box.hidden) return;
    box.hidden = true;
    img.src = '';
    document.body.style.overflow = '';
    if (!fromHistory && history.state && history.state.lightbox) history.back();
    if (opener) opener.focus();
  }

  links.forEach(function (a, n) {
    a.addEventListener('click', function (e) {
      if (e.ctrlKey || e.metaKey || e.shiftKey) return; // let "open in new tab" work
      e.preventDefault();
      open(n);
    });
  });
  box.addEventListener('click', function (e) {
    if (e.target === box || e.target.closest('.lb-close')) close();
  });
  prev.addEventListener('click', function () { show(i - 1); });
  next.addEventListener('click', function () { show(i + 1); });
  document.addEventListener('keydown', function (e) {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(i - 1);
    else if (e.key === 'ArrowRight') show(i + 1);
  });
  window.addEventListener('popstate', function () { close(true); });

  // Swipe left/right on phones
  var x0 = null;
  box.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', function (e) {
    if (x0 === null || links.length < 2) return;
    var dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) show(dx < 0 ? i + 1 : i - 1);
  });
})();
