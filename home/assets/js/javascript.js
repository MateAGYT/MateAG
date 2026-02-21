let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =  () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header .classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portafolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Creador de Contenido', 'Developer con +6 años de exp.', 'Developer de Bots', 'Developer de webs', 'Developer de Discord', 'Developer de Plugins', 'Programador', 'Programador en Batch', 'Programador en Visual Basic', 'Programador en NodeJS', 'Programador en HTML', 'Programador en CSS', 'Programador en JS', 'Programador de Plugins', 'Gamer', 'Gamer de Minecraft', 'Gamer de Roblox', 'Gamer de Geometry Dash', 'Configurador', 'Configurador de Servidores', 'Configurador de Bots', 'Configurador de Plugins', 'Configurador de máquinas', 'Staff especializado con +4 años de exp.', 'Estudiante', 'YouTuber', 'TikToker', 'Instagramer', 'Streamer', 'Owner', 'Twittero'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

ScrollReveal({
    distance: '60px',
    duration: 800,
    delay: 50,  
    reset: false
});

ScrollReveal().reveal('.home-content, .home-img, .heading, .about-img, .about-content, .services-box, .skills-container, .skill-bar-box, .btn, .contact form, .footer', { 
    origin: 'top',
    interval: 80
});

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX - 15}px`;
    cursorOutline.style.top = `${posY - 15}px`;
});

const interactiveElements = document.querySelectorAll('a, .btn, i, .services-box');

interactiveElements.forEach(el => {
    el.addEventListener('mouseover', () => {
        cursorOutline.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
        cursorOutline.classList.remove('cursor-hover');
    });
});

window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
};