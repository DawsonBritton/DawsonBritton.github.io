// Crosshair + tooltip for line charts generated into _includes/*.html.
document.querySelectorAll('figure.chart[data-points]').forEach(function (fig) {
  var pts = JSON.parse(fig.dataset.points);
  var d = fig.dataset, W = +d.w, H = +d.h, L = +d.l, R = +d.r, T = +d.t, B = +d.b;
  var xmax = +d.xmax, ymax = +d.ymax;
  var svg = fig.querySelector('svg'), cross = svg.querySelector('.crosshair'),
      dot = svg.querySelector('.hover-dot'), tip = fig.querySelector('.chart-tip');
  var X = function (t) { return L + t / xmax * (W - L - R); };
  var Y = function (a) { return T + (1 - a / ymax) * (H - T - B); };

  function show(evt) {
    var box = svg.getBoundingClientRect();
    var sx = (evt.clientX - box.left) / box.width * W;
    var t = (sx - L) / (W - L - R) * xmax;
    if (t < 0 || t > pts[pts.length - 1][0]) return hide();
    var p = pts.reduce(function (a, b) { return Math.abs(b[0] - t) < Math.abs(a[0] - t) ? b : a; });
    var px = X(p[0]), py = Y(p[1]);
    cross.setAttribute('x1', px); cross.setAttribute('x2', px); cross.setAttribute('visibility', 'visible');
    dot.setAttribute('cx', px); dot.setAttribute('cy', py); dot.setAttribute('visibility', 'visible');
    tip.hidden = false;
    tip.textContent = p[0].toFixed(1) + ' s · ' + p[1].toLocaleString() + ' ft';
    var fbox = fig.getBoundingClientRect();
    tip.style.left = (box.left - fbox.left + px / W * box.width) + 'px';
    tip.style.top = (box.top - fbox.top + py / H * box.height) + 'px';
  }
  function hide() {
    cross.setAttribute('visibility', 'hidden'); dot.setAttribute('visibility', 'hidden'); tip.hidden = true;
  }
  svg.addEventListener('pointermove', show);
  svg.addEventListener('pointerleave', hide);
});
