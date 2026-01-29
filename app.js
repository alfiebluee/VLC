document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            if (nav.style.display === 'flex') {
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.background = 'white';
                nav.style.padding = '2rem';
                nav.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            } else {
                nav.style = ''; // Reset
            }
        });
    }

    // Specifications Toggle
    const specsBtn = document.getElementById('toggleSpecsBtn');
    const specsContent = document.querySelector('.specs-expanded');

    if (specsBtn && specsContent) {
        specsBtn.addEventListener('click', () => {
            const isHidden = specsContent.classList.contains('hidden');

            if (isHidden) {
                specsContent.classList.remove('hidden');
                specsBtn.textContent = 'Hide Specifications';
            } else {
                specsContent.classList.add('hidden');
                specsBtn.textContent = 'View Full Specifications';
            }
        });
    }

    // Sticky Header Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Smooth scroll for anchor links (if browser native behavior fails)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            nav.style.display = ''; // Close mobile menu on click

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
