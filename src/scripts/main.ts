declare const acfData: {
  smoothScroll?: boolean;
};

import "../styles/main.scss";
import "aos/dist/aos.css";

import Lenis from "lenis";
import AOS from "aos";
import Header from "./components/header";
import Sliders from "./components/sliders";
import ToTopButton from "./components/back-top-button";

document.addEventListener("DOMContentLoaded", () => {
  new Sliders();
  new Header();
  new ToTopButton();

  AOS.init({
    once: true,
    duration: 700,
  });

  if (acfData.smoothScroll) {
    new Lenis({
      autoRaf: true,
      anchors: true,
    });
  }
});
