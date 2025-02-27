import "../styles/main.scss";
import Header from "./components/Header";
import Sliders from "./components/Sliders";
import TabsCollection from "./components/Tabs";

document.addEventListener("DOMContentLoaded", () => {
  new Sliders();
  new Header();
  new TabsCollection();
});
