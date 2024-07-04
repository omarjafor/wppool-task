console.log('hello js');
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