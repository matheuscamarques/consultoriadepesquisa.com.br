const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', function() {
  const isOpen = mobileMenu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', function() {
    mobileMenu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

const footerFlutuante = document.getElementById('footerFlutuante');
let footerDismissed = false;

window.addEventListener('scroll', function() {
  if (footerDismissed) return;
  if (window.scrollY > 500) {
    footerFlutuante.classList.remove('hidden');
  } else {
    footerFlutuante.classList.add('hidden');
  }
});

document.getElementById('btnFecharFooter').addEventListener('click', function() {
  footerDismissed = true;
  footerFlutuante.classList.add('hidden');
});