const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav_menu');
hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});
navMenu.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});