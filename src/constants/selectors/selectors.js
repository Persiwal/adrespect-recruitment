import headerSelectors from "./headerSelectors.js";
import heroSelectors from "./heroSelectors.js";
import realizationsSelectors from "./realizationsSelectors.js";

const bodyEl = document.querySelector("body");

const selectors = {
  bodyEl,
  header: headerSelectors,
  hero: heroSelectors,
  realizations: realizationsSelectors,
};

export default selectors;
