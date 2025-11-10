// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuLine1 = document.querySelector('.menu-line-1');
const menuLine2 = document.querySelector('.menu-line-2');
const menuLine3 = document.querySelector('.menu-line-3');

mobileMenuBtn?.addEventListener('click', () => {
    const isOpen = !mobileMenu?.classList.contains('translate-x-full');
    
    if (isOpen) {
        mobileMenu?.classList.add('translate-x-full');
        menuLine1?.classList.remove('rotate-45', 'translate-y-2');
        menuLine2?.classList.remove('opacity-0');
        menuLine3?.classList.remove('-rotate-45', '-translate-y-2');
    } else {
        mobileMenu?.classList.remove('translate-x-full');
        menuLine1?.classList.add('rotate-45', 'translate-y-2');
        menuLine2?.classList.add('opacity-0');
        menuLine3?.classList.add('-rotate-45', '-translate-y-2');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu?.contains(e.target) && !mobileMenuBtn?.contains(e.target)) {
        mobileMenu?.classList.add('translate-x-full');
        menuLine1?.classList.remove('rotate-45', 'translate-y-2');
        menuLine2?.classList.remove('opacity-0');
        menuLine3?.classList.remove('-rotate-45', '-translate-y-2');
    }
});

// Close mobile menu on link click
mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        menuLine1?.classList.remove('rotate-45', 'translate-y-2');
        menuLine2?.classList.remove('opacity-0');
        menuLine3?.classList.remove('-rotate-45', '-translate-y-2');
    });
});