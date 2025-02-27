class Sliders {
  private readonly sliders = [
    {
      selector: ".testimonials__slider",
      options: {
        loop: true,
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: true,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          nextEl: ".testimonials-nav__button_next",
          prevEl: ".testimonials-nav__button_prev",
        },
        pagination: {
          el: ".testimonials-nav__pagination",
          clickable: true,
        },
      },
    },
  ];

  constructor() {
    this.initSliders();
  }

  initSliders() {
    this.sliders.forEach(slider => {
      if (document.querySelector(slider.selector)) {
        //@ts-expect-error Swiper is connected globally
        new Swiper(slider.selector, slider.options);
      }
    });
  }
}

export default Sliders;
