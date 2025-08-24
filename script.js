// JavaScript for responsive navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close the menu when a link is clicked
navMenu.addEventListener('click', () => {
    navMenu.classList.remove('active');
});
