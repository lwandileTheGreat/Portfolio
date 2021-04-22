const navOpener = document.querySelector('.nav-opener');

const navLinks = document.querySelectorAll('.navLink');



navOpener.addEventListener('click', () => {
  document.body.classList.toggle('navOpen');
} )

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('navOpen');
  })
})

//date
document.getElementById('year').innerHTML = new Date().getFullYear();


