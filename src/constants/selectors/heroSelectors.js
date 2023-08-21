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

const heroSelectors = {
  mobileSliderContainerEl,
  mobileSliderEl,
  desktopSliderContainerEl,
  desktopSliderEl,
  previousSlideButtonEl,
  nextSlideButtonEl,
};

export default heroSelectors;
