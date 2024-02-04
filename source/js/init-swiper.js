const cardsSwiper = document.querySelector('.swiper');

const initSwiper = new Swiper(cardsSwiper, {
  initialSlide: 1,
  slidesPerView: 3,
  spaceBetween: 0,
  allowTouchMove: true,
  loop: false,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    depth: 100,
    modifier: 1, // 2,3
    slideShadows: false,
    stretch: 2,
  },

  centeredSlides: true,
  slideToClickedSlide: true,
  speed: 500,

  // breakpoints: {
  //   320: {
  //     slidesPerView: 1.14,
  //     spaceBetween: 30
  //   },
  //   420: {
  //     slidesPerView: 1.13,
  //     spaceBetween: 40
  //   },
  //   480: {
  //     slidesPerView: 1.13,
  //     spaceBetween: 50
  //   },
  //   768: {
  //     slidesPerView: 1.12,
  //     spaceBetween: 60
  //   }
  // }
});

