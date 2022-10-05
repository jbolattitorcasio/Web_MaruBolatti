const bars = document.getElementById("bars");
// Function for the sidebar display and bars animation
function side_open() {
    // Sidebar display
    document.getElementById("sidebar").style.display = "block";
    // Bars animation
    bars.classList.add('bars-animation');
    // Change the onclick function
    bars.onclick = side_close;
}
function side_close() {
    // Sidebar display
    document.getElementById("sidebar").style.display = "none";
    //Bars animation
    bars.classList.remove('bars-animation');
    //Change the onclick function
    bars.onclick = side_open;
}

// Function for the navbar animation and anchors display
const navbar = document.querySelector('.header');
const navbarAnchors = document.querySelector('.navbar-anchors');
const documentWidth = document.body.clientWidth;
const logo = document.querySelector('.logo');

window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
        logo.classList.add('logo-active');
        bars.classList.add('button-bars-active')

        if (documentWidth < 768) {
            navbarAnchors.classList.remove('display-none');
            navbarAnchors.classList.add('display-flex');
        }
    } else {
        navbar.classList.remove('nav-active');
        logo.classList.remove('logo-active');
        bars.classList.remove('button-bars-active')

        if (documentWidth < 768) {
            navbarAnchors.classList.add('display-none');
            navbarAnchors.classList.remove('display-flex');
        }
    }
}

// // Bars
// var McButton = document.querySelector("[data=hamburger-menu]");
// var McBar1 = document.querySelector('.McBar1');
// var McBar2 = document.querySelector('.McBar2');
// var McBar3 = document.querySelector('.McBar3');

// McButton.addEventListener('click', function() {
//   this.classList.toggle("active");
  
//   if (McButton.classList.contains("active")) {
//     McBar1.style.left = "-50%";
//     McBar3.style.left = "-50%";
//     // McBar1.velocity({ top: "50%" }, {duration: 200, easing: "swing"});
//     // McBar3.velocity({ top: "50%" }, {duration: 200, easing: "swing"})
//     // 			.velocity({rotateZ:"90deg"}, {duration: 800, delay: 200, easing: [500,20] });
//     // McButton.velocity({rotateZ:"135deg"}, {duration: 800, delay: 200, easing: [500,20] });
//   } else {
//     // McButton.velocity("reverse");
// 	// 	McBar3.velocity({rotateZ:"0deg"}, {duration: 800, easing: [500,20] })
//     // 			.velocity({ top: "100%" }, {duration: 200, easing: "swing"});
//   	// McBar1.velocity("reverse", {delay: 800});
//   }
// });

// /*$element.velocity({ 
//     width: "500px",
//     property2: value2
// }, {
//     duration: 400,
//     easing: "swing",
//     queue: "",
//     begin: undefined,
//     progress: undefined,
//     complete: undefined,
//     display: undefined,
//     visibility: undefined,
//     loop: false,
//     delay: false,
//     mobileHA: true
// });*/

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

