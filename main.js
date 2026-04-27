// =====================
// DRAWER (hamburger menu)
// =====================
const hamburger = document.getElementById('hamburger');
const drawer    = document.getElementById('drawer');
const overlay   = document.getElementById('overlay');
const drawerClose = document.getElementById('drawerClose');

function openDrawer()  { drawer.classList.add('open');    overlay.classList.add('open'); }
function closeDrawer() { drawer.classList.remove('open'); overlay.classList.remove('open'); }

hamburger.addEventListener('click', openDrawer);
drawerClose.addEventListener('click', closeDrawer);
overlay.addEventListener('click', closeDrawer);
document.querySelectorAll('.drawer-link').forEach(a => a.addEventListener('click', closeDrawer));

// =====================
// BOTTOM NAV ACTIVE STATE
// =====================
const sections  = document.querySelectorAll('section[id]');
const bnavLinks = document.querySelectorAll('.bnav-link');

function updateBottomNav() {
  let current = 'hero';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  bnavLinks.forEach(a => {
    const href   = a.getAttribute('href').replace('#', '');
    const isBook = a.classList.contains('bnav-book');
    if (!isBook) a.classList.toggle('active', href === current);
  });
}

window.addEventListener('scroll', updateBottomNav);

// =====================
// BOTTOM NAV CLICKS
// =====================
bnavLinks.forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});