let swiper1 = new Swiper(".mySwiper1", {
  effect: "coverflow",
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 2,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
  },
});

let swiper2 = new Swiper(".solutionSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
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
      slidesPerView: 4,
      spaceBetween: 8,
    },
  },
});
