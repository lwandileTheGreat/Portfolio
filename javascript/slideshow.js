const navOpener = document.querySelector(".nav-opener");

const navLinks = document.querySelectorAll(".navLink");

function setNavOpen(open) {
  document.body.classList.toggle("navOpen", open);
  navOpener.setAttribute("aria-expanded", String(open));
  navOpener.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  if (open && window.startParticles) window.startParticles();
}

navOpener.addEventListener("click", () => {
  setNavOpen(!document.body.classList.contains("navOpen"));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setNavOpen(false));
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && document.body.classList.contains("navOpen")) {
    setNavOpen(false);
    navOpener.focus();
  }
});

//date
document.getElementById("year").textContent = new Date().getFullYear();

$(".search-item").search(function () {}, 3000);
