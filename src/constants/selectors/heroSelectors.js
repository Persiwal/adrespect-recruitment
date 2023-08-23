const mobileSliderContainerEl = document.getElementById(
  "hero-slider-mobile-container"
);
const mobileSliderEl = document.getElementById("hero-slider-mobile");
const desktopSliderContainerEl = document.getElementById(
  "hero-slider-desktop-container"
);
const desktopSliderEl = document.getElementById("hero-slider-desktop");
const previousSlideButtonEl = document.getElementById("previous-slide-button");
const nextSlideButtonEl = document.getElementById("next-slide-button");
const nextSlideButtonArrowEl = nextSlideButtonEl.querySelector("img");
const previousSlideButtonArrowEl = previousSlideButtonEl.querySelector("img");

const heroSelectors = {
  mobileSliderContainerEl,
  mobileSliderEl,
  desktopSliderContainerEl,
  desktopSliderEl,
  previousSlideButtonEl,
  nextSlideButtonEl,
  nextSlideButtonArrowEl,
  previousSlideButtonArrowEl,
};

export default heroSelectors;
