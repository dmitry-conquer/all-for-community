class Sliders {
  private readonly sliders = [
    {
      selector: ".testimonials__slider",
      options: {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: true,
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
        if (typeof Swiper !== "undefined") {
          //@ts-expect-error Swiper is connected globally
          new Swiper(slider.selector, slider.options);
        }
      }
    });
  }
}

export default Sliders;
