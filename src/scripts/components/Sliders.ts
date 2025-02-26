class Sliders {
  private readonly sliders = [
    {
      root: ".testimonials__slider",
      prevButton: ".testimonials-nav__button_prev",
      nextButton: ".testimonials-nav__button_next",
      pagination: ".testimonials-nav__pagination",
    },
  ];

  constructor() {
    this.initSliders();
  }

  initSliders() {
    this.sliders.forEach(slider => {
      if (document.querySelector(slider.root)) {
        //@ts-expect-error Swiper is connected globally
        new Swiper(slider.root, {
          loop: true,
          speed: 800,
          slidesPerView: 1,
          spaceBetween: 20,
          autoHeight: true,
          autoplay: {
            delay: 3000,
          },
          navigation: {
            nextEl: slider.nextButton,
            prevEl: slider.prevButton,
          },
          pagination: {
            el: slider.pagination,
            clickable: true,
          },
        });
      }
    });
  }
}

export default Sliders;
