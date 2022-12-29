const localhost = "http://localhost:3000/"; //Borrar para la produccion
const host = "https://marubolatti.com/";

// NAVBAR
const nav = document.querySelector('.nav-main');
const siteLogo = document.querySelector('.site-logo img');
const navContainer  = document.querySelector('.nav-container');
const navMain = document.querySelector('.nav-main');

function opener() {
    nav.classList.toggle('is-open'); 
    if(nav.classList.contains('is-open')) {
        if((window.location.href == host + 'produccion') || (window.location.href == localhost + 'produccion')) {
            siteLogo.src = "/img/logo-prod.png";
        }
        if((window.location.href == host + 'direccion') || (window.location.href == localhost + 'direccion')) {
            siteLogo.src = "/img/logo-direc.png";
        }
        if((window.location.href == host + 'contacto') || (window.location.href == localhost + 'contacto')) {
            siteLogo.src = "/img/logo-bw.png";
        }
        navContainer.style.display = "block";
    } else {
        siteLogo.src = "/img/logo.png";
        navContainer.style.display = "none";
    }
}

// PROD and DIREC Configuration
if((window.location.href == host + 'produccion') || (window.location.href == localhost + 'produccion')) {
    navMain.style.background = "var(--color-main-pink)";
}
if((window.location.href == host + 'direccion') || (window.location.href == localhost + 'direccion')) {
    navMain.style.background = "var(--color-main-blue)";
}

// FOOTER
const contactFooter = document.querySelector('.contact-footer');

// Cambiar el localhost por host
const footer = document.querySelector('.footer');
if((window.location.href != localhost + 'contacto')) {
    if((window.location.href == host) || (window.location.href == localhost)) {
        footer.style.position = 'absolute';
    } else {
        footer.style.position = 'static';
    }
} else {
    if(window.innerWidth <= 767) {
        contactFooter.style.position = 'static';
        contactFooter.style.margin = '7px auto';
    } else {
        contactFooter.style.position = 'absolute';
    }
}


// AOS Configuration
AOS.init();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});


// Animation Lottie 
// Sidebar
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animSidebar01'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: '/js/animations/A_02.json'
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animSidebar02'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: '/js/animations/A_02.json'
});
// Home
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animHome'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: '/js/animations/A_01.json'
});
// About
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animAbout01'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: '/js/animations/T_01.json'
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animAbout02'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: '/js/animations/T_02.json'
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animAbout04'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: '/js/animations/T_04.json'
});
// Production
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animProd01'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: '/js/animations/A_01.json'
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animProd02'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: '/js/animations/T_01.json'
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animProd03'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: '/js/animations/T_02.json'
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animProd04'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: '/js/animations/T_04.json'
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animProd05'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: '/js/animations/T_04.json'
});