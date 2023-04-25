const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const uwu = document.querySelector('#uwu');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('navini')
    navMenu.classList.toggle('navnull')
    uwu.classList.toggle('navini')
});