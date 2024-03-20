import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'


// const hamburger = document.querySelector(".hamburger");
// const bar1 = document.querySelector(".bar1");
// const bar2 = document.querySelector(".bar2");
// const bar3 = document.querySelector(".bar3");
// const mobileNav = document.querySelector(".mobileNav");

// hamburger.addEventListener("click", () => {
//   bar1.classList.toggle("animateBar1");
//   bar2.classList.toggle("animateBar2");
//   bar3.classList.toggle("animateBar3");
//   mobileNav.classList.toggle("openDrawer");
// });


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
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
    1560: {
      slidesPerView: 3
    }
  }
});

