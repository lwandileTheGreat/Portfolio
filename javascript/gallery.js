// Rotating pictures with pause, previous and next buttons. WCAG 2.2.2 needs a
// way to stop anything that moves on its own for longer than five seconds, and
// people who ask for reduced motion get no automatic rotation at all.
(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll(".slideshow").forEach(function (figure) {
    var img = figure.querySelector("img[data-slides]");
    if (!img) return;

    var slides = img.dataset.slides.split(";").map(function (entry) {
      var parts = entry.split("|");
      return { src: parts[0], alt: parts[1] };
    });
    var index = 0;
    var timer = null;
    var playing = !reduceMotion;
    var hovered = false;

    function show(i) {
      index = (i + slides.length) % slides.length;
      img.src = slides[index].src;
      img.alt = slides[index].alt;
      new Image().src = slides[(index + 1) % slides.length].src;
    }

    function schedule() {
      clearInterval(timer);
      timer = playing && !hovered ? setInterval(function () { show(index + 1); }, Number(figure.dataset.interval) || 7000) : null;
    }

    var controls = document.createElement("div");
    controls.className = "slideshow-controls";

    function button(label, text, onClick) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "slideshow-btn";
      b.setAttribute("aria-label", label);
      b.textContent = text;
      b.addEventListener("click", onClick);
      controls.appendChild(b);
      return b;
    }

    button("Previous picture", "‹ Prev", function () { show(index - 1); schedule(); });
    var toggle = button("", "", function () {
      playing = !playing;
      updateToggle();
      schedule();
    });
    button("Next picture", "Next ›", function () { show(index + 1); schedule(); });

    function updateToggle() {
      toggle.textContent = playing ? "Pause" : "Play";
      toggle.setAttribute("aria-label", playing ? "Pause slideshow" : "Play slideshow");
    }

    img.insertAdjacentElement("afterend", controls);
    figure.addEventListener("mouseenter", function () { hovered = true; schedule(); });
    figure.addEventListener("mouseleave", function () { hovered = false; schedule(); });
    updateToggle();
    schedule();
  });
})();
