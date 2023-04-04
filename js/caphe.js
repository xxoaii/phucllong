var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 30,
  sliderPerGroup: 4,
  centerSlide: "true",
  fade: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    960: {
      slidesPerView: 3,
    },
    1240: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper(".slide-container2", {
  slidesPerView: 3,
  spaceBetween: 40,
  sliderPerGroup: 3,
  centerSlide: "true",
  fade: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    1240: {
      slidesPerView: 3,
    },
  },
});