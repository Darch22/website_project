const toggleButton = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const closeButton = document.getElementById('close-menu');

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('sidebar-open');
    toggleButton.classList.toggle('hamburger-hidden');
});

closeButton.addEventListener('click', () => {
    navMenu.classList.remove('sidebar-open');
    toggleButton.classList.remove('hamburger-hidden');
});