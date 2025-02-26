import "../styles/main.scss";
import Header from "./components/Header";
import Sliders from "./components/Sliders";

document.addEventListener("DOMContentLoaded", () => {
  new Sliders();
  new Header();
});
