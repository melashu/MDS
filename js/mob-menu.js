const menuIcon = document.getElementById('menu-icon');
const main = document.querySelector('main');
const header = document.querySelector('header');
const btnClose = document.getElementById("btn-close");
const navBar = document.querySelector('nav');
const body = document.querySelector('body');

menuIcon.addEventListener('click', () => {
    main.style.display = 'none';
    body.style.overflowY = "hidden";


    navBar.style.display = 'flex';
    header.style.height = '100vh';
    header.style.backgroundImage = "url('../image/mob-bac.png')";
});

btnClose.addEventListener('click', () => {
     main.style.display = "block";
     body.style.overflowY = "visible";

     navBar.style.display = "none";
     header.style.height = "0";
})
