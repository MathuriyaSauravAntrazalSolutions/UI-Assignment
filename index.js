import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'



/**
 * Mobile Drawer
 */

const webNavhamburger = document.querySelector(".wbNavHmbr");
const webNavbar1 = document.querySelector(".wbBar1");
const webNavbar2 = document.querySelector(".wbBar2");
const webNavbar3 = document.querySelector(".wbBar3");
const mobileNav = document.getElementById("mobileNav");

webNavhamburger.addEventListener("click", () => {
  webNavbar1.classList.toggle("animateBar1");
  webNavbar2.classList.toggle("animateBar2");
  webNavbar3.classList.toggle("animateBar3");
  webNavbar1.classList.toggle("wbColorBar");
  webNavbar2.classList.toggle("wbColorBar");
  webNavbar3.classList.toggle("wbColorBar");
  stickyNavbar1.classList.toggle("animateBar1");
  stickyNavbar2.classList.toggle("animateBar2");
  stickyNavbar3.classList.toggle("animateBar3");
  mobileNav.classList.toggle("openDrawer");
});


const stickyNavhamburger = document.querySelector(".stNavHmbr");
const stickyNavbar1 = document.querySelector(".stBar1");
const stickyNavbar2 = document.querySelector(".stBar2");
const stickyNavbar3 = document.querySelector(".stBar3");

stickyNavhamburger.addEventListener("click", () => {
  webNavbar1.classList.toggle("animateBar1");
  webNavbar2.classList.toggle("animateBar2");
  webNavbar3.classList.toggle("animateBar3");
  webNavbar1.classList.toggle("wbColorBar");
  webNavbar2.classList.toggle("wbColorBar");
  webNavbar3.classList.toggle("wbColorBar");
  stickyNavbar1.classList.toggle("animateBar1");
  stickyNavbar2.classList.toggle("animateBar2");
  stickyNavbar3.classList.toggle("animateBar3");
  mobileNav.classList.toggle("openDrawer");
});



/**
 * Sticky Navbar
 */

var navbar = document.getElementById("web-nav");
var stickyNav = document.getElementById("sticky-nav");
var home = document.getElementById("Home");
var sticky = home.offsetTop+100;

function myFunction() {
  console.log(window.scrollY);
  if (window.scrollY >= sticky) {
    navbar.style.display="none";
    stickyNav.style.display="flex";
  } else {
    navbar.style.display="flex";
    stickyNav.style.display="none";
  }
}

window.addEventListener("scroll", myFunction)



/**
 * Tilt Effect On Card
 */
const cards = document.querySelectorAll(".card");

function applyTiltOnMouserOver(event) {
  event.stopPropagation();
  
  const target = event.currentTarget;
  
  const targetInfo = {
    centerX: target.offsetWidth/2,
    centerY: target.offsetHeight/2
  }
  
  const rect = target.getBoundingClientRect();
  const mouseX = (event.clientX - targetInfo.centerX) - rect.left;
  const mouseY = (event.clientY - targetInfo.centerY) - rect.top;
  
  const transform = {
    x: (mouseY * 0.1).toFixed(2),
    y: (mouseX * -0.1).toFixed(2)
  }

    target.style.cssText += `
      transform: translate(0%, 0%) perspective(1000px) rotateX(${transform.x}deg) rotateY(${transform.y}deg);
    `;
}

cards.forEach(e => e.addEventListener("mousemove", applyTiltOnMouserOver));

cards.forEach(e => e.addEventListener("mouseout", (e) => {
    e.currentTarget.style.cssText += `
      transform: translate(0%, 0%) rotate3d(0,0, 0, 0deg);
    `;
}));


/**
 * Slider - Section
 */

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 350,
    modifier: 1,
    slideShadows: true
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 3
    },
    1560: {
      slidesPerView: 3
    }
  }
});

