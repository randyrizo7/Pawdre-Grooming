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
const snapContainer = document.getElementById('snapContainer');
const sections      = document.querySelectorAll('section[id]');
const bnavLinks     = document.querySelectorAll('.bnav-link');

function updateBottomNav() {
  let current = 'hero';
  const scrollTop = snapContainer ? snapContainer.scrollTop : window.scrollY;
  sections.forEach(s => {
    if (scrollTop >= s.offsetTop - 100) current = s.id;
  });
  bnavLinks.forEach(a => {
    const href   = a.getAttribute('href').replace('#', '');
    const isBook = a.classList.contains('bnav-book');
    if (!isBook) a.classList.toggle('active', href === current);
  });
}

if (snapContainer) snapContainer.addEventListener('scroll', updateBottomNav);
window.addEventListener('scroll', updateBottomNav);

// =====================
// SNAP SCROLL — bottom nav clicks on mobile
// =====================
bnavLinks.forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (snapContainer && target && window.innerWidth <= 768) {
      e.preventDefault();
      snapContainer.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    }
  });
});
