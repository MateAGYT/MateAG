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

const jsonData = `{
  "http_code": 200,
  "title": {
    "full": "(404) MateAG - Web Oficial",
    "short": "MateAG - Web"
  },
  "url": "https://mateag.com/404.html",
  "locale": "es",
  "data": {
    "path": "/404.html",
    "content": {
      "title": "(404)",
      "description": "La página o ruta que intentas visitar no se ha podido encontrar o no existe. Prueba de nuevo más tarde."
    }
  },
  "slug": [
    "404.html"
  ],
  "build": {
    "date": "1996-07-02",
    "version": "0.3.8"
  },
  "hint": "Usa la barra de navegación para volver a la página principal!"
}`;

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
    strings: ['ERROR 404 - ¡Página no encontrada! :('],
    typeSpeed: 60,
    cursorChar: '|',
    onComplete: () => {
        setTimeout(() => {
            typeWriter(jsonData, "typed-desc", 15);
        }, 500);
    }
});

ScrollReveal().reveal('.home-content', { origin: 'top', distance: '80px', duration: 2000 });