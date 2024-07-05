console.log('hello js');

// Sticky Navbar Scroll 
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('bg-blend-transparent');
        header.classList.remove('bg-blend-banner');
    } else {
        header.classList.add('bg-blend-banner');
        header.classList.remove('bg-blend-transparent');
    }
});

//  Mobile Menu open close ------>
const mobileMenu = document.getElementById('mobileMenu');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

openMenu.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.classList.remove('hidden');
    setTimeout(() => {
        mobileMenu.classList.add('show');
    }, 10);
});

closeMenu.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.classList.remove('show');
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
    }, 300);
});

