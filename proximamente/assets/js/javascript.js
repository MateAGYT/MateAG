let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const jsonData = `Done! Printing ???.html...

{
  "http_code": 503,
  "title": {
    "full": "(503) MateAG - Web Oficial",
    "short": "MateAG - Web"
  },
  "url": "https://mateag.com/proximamente/index.html",
  "locale": "es",
  "data": {
    "path": "/index.html",
    "content": {
      "title": "(503)",
      "description": "La página que intentas visitar está en construcción y será añadida proximamente. ¡Dame ideas en Discord!"
    }
  },
  "slug": [
    "index.html"
  ],
  "build": {
    "date": "1996-07-02",
    "version": "0.6.2"
  },
  "hint": "Usa la barra de navegación para volver a la página principal!"
}

C:/USERS/MateAG/Desktop/MateAG_Web> `;

function typeWriter(text, elementId, speed) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.classList.add('ms-dos-cursor');
    
    function type() {
        if (i < text.length) {
            let char = text.charAt(i);
            element.innerHTML += (char === '\n') ? '<br>' : char;
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

new Typed('.multiple-text', {
    strings: ['ERROR 503 - Proximamente'],
    typeSpeed: 60,
    cursorChar: '█',
    onComplete: () => {
        setTimeout(() => {
            typeWriter(jsonData, "typed-desc", 15);
        }, 500);
    }
});

ScrollReveal().reveal('.home-content', { origin: 'top', distance: '80px', duration: 2000 });

window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
};