import headerSelectors from "./headerSelectors.js";
import heroSelectors from "./heroSelectors.js";
import realizationsSelectors from "./realizationsSelectors.js";

const bodyEl = document.querySelector("body");
const parallaxImage = document.querySelector(".parallax-image");
const parallaxContainer = document.querySelector(".parallax-container");

const selectors = {
  bodyEl,
  parallaxContainer,
  parallaxImage,
  header: headerSelectors,
  hero: heroSelectors,
  realizations: realizationsSelectors,
};

export default selectors;
