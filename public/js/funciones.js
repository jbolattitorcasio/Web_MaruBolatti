function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

const localhost = "http://localhost:3000/"; //Borrar para la produccion
const host = "https://marubolatti.com/";

const nav = document.querySelector('.nav-main');
const siteLogo = document.querySelector('.site-logo img');
const navMedia = document.querySelector('.nav-media');
const navBackground = document.querySelector('.background');
function opener() {
    nav.classList.toggle('is-open'); 
    if(nav.classList.contains('is-open')) {
        siteLogo.src = "/img/logo-bw.png";
        navMedia.style.display = "flex";
        navBackground.classList.remove('background-animation-reverse');
        navBackground.classList.add('background-animation');
    } else {
        siteLogo.src = "/img/logo.png";
        navMedia.style.display = "none";
        navBackground.classList.remove('background-animation');
        navBackground.classList.add('background-animation-reverse');
    }
}

if((window.location.href == host + 'produccion') || (window.location.href == localhost + 'produccion')) {
    navBackground.style.background = "var(--color-main-pink)";
}
if((window.location.href == host + 'direccion') || (window.location.href == localhost + 'direccion')) {
    navBackground.style.background = "var(--color-main-blue)";
}




// const bars = document.getElementById("bars");
// // Function for the sidebar display and bars animation
// function side_open() {
//     // Sidebar display
//     document.getElementById("sidebar").style.display = "block";
//     // Bars animation
//     bars.classList.remove('bars-animation-reverse');
//     bars.classList.add('bars-animation');
//     // Change the onclick function
//     bars.onclick = side_close;
// }
// function side_close() {
//     // Sidebar display
//     document.getElementById("sidebar").style.display = "none";
//     //Bars animation
//     bars.classList.remove('bars-animation')
//     bars.classList.add('bars-animation-reverse');
//     //Change the onclick function
//     bars.onclick = side_open;
// }

// // Function for the navbar animation and anchors display
// const navbar = document.querySelector('.header');
// const navbarAnchors = document.querySelector('.navbar-anchors');
// const documentWidth = document.body.clientWidth;
// const logo = document.querySelector('.logo');

// window.onscroll = () => {
//     if (window.scrollY > 100) {
//         navbar.classList.add('nav-active');
//         logo.classList.add('logo-active');
//         bars.classList.add('button-bars-active')

//         if (documentWidth < 768) {
//             navbarAnchors.classList.remove('display-none');
//             navbarAnchors.classList.add('display-flex');
//         }
//     } else {
//         navbar.classList.remove('nav-active');
//         logo.classList.remove('logo-active');
//         bars.classList.remove('button-bars-active')

//         if (documentWidth < 768) {
//             navbarAnchors.classList.add('display-none');
//             navbarAnchors.classList.remove('display-flex');
//         }
//     }
// }

// // Production and Direction Navbar
// const host = "https://marubolatti.com/";
// const localhost = "http://localhost:3000/"; //Borrar para la produccion

// if ((window.location.href == host) || (window.location.href == localhost)) {
//     document.querySelector('.navbar-anchors a:nth-child(1)').style.color = "#000";
//     document.querySelector('.navbar-anchors a:nth-child(2)').style.color = "#000";
// }
// if ((window.location.href == host + "produccion") || (window.location.href == localhost + "produccion")) {
//     document.querySelector('.navbar-anchors a:nth-child(1)').classList.add("navbar-prod");
//     document.querySelector('.button-bars span:nth-child(1)').style.backgroundColor = "var(--color-main-pink)";
//     document.querySelector('.button-bars span:nth-child(2)').style.backgroundColor = "var(--color-main-pink)";
//     document.querySelector('.button-bars span:nth-child(3)').style.backgroundColor = "var(--color-main-pink)";
//     document.querySelector('.button-bars span:nth-child(4)').style.backgroundColor = "var(--color-main-pink)";
//     document.querySelector('.button-bars span:nth-child(5)').style.backgroundColor = "var(--color-main-pink)";
// }
// if ((window.location.href == host + "direccion") || (window.location.href == localhost + "direccion")) {
//     document.querySelector('.navbar-anchors a:nth-child(2)').classList.add("navbar-direc");
//     document.querySelector('.button-bars span:nth-child(1)').style.backgroundColor = "var(--color-main-blue)";
//     document.querySelector('.button-bars span:nth-child(2)').style.backgroundColor = "var(--color-main-blue)";
//     document.querySelector('.button-bars span:nth-child(3)').style.backgroundColor = "var(--color-main-blue)";
//     document.querySelector('.button-bars span:nth-child(4)').style.backgroundColor = "var(--color-main-blue)";
//     document.querySelector('.button-bars span:nth-child(5)').style.backgroundColor = "var(--color-main-blue)";
// }

// // AOS Configuration
// AOS.init();
// AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
// });

