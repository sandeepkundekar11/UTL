var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 2,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
});

// let swiper2 = new Swiper(".solutionSwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination2",
//     clickable: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 1,
//       spaceBetween: 2,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 5,
//     },
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 8,
//     },
//   },
// });
