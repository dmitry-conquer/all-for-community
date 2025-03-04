declare const acfData: {
  smoothScroll?: boolean;
};

import "../styles/main.scss";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Sliders from "./components/Sliders";
import Lenis from "lenis";
import AOS from "aos";

document.addEventListener("DOMContentLoaded", () => {
  new Sliders();
  new Header();
  AOS.init({
    once: true,
    duration: 1000,
  });

  if (acfData.smoothScroll) {
    new Lenis({
      autoRaf: true,
    });
  }
});
