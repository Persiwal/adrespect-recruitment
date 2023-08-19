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

const desktopBreakpoint = 1024;
let currentIndex = 0;

const scrollToGivenSlide = (index) => {
  const slider =
    window.innerWidth >= desktopBreakpoint ? desktopSliderEl : mobileSliderEl;
  const sliderContainer =
    window.innerWidth >= desktopBreakpoint
      ? desktopSliderContainerEl
      : mobileSliderContainerEl;

  const slideWidth = slider.clientWidth;

  const scrollPosition = slideWidth * index;

  sliderContainer.scrollTo({ left: scrollPosition, behavior: "smooth" });
};

const scrollToNextSlide = () => {
  const slider =
    window.innerWidth >= desktopBreakpoint ? desktopSliderEl : mobileSliderEl;

  currentIndex =
    currentIndex === slider.children.length - 1 ? 0 : currentIndex + 1;

  scrollToGivenSlide(currentIndex);
};

const scrollToPreviousSlide = () => {
  currentIndex = currentIndex === 0 ? 0 : currentIndex - 1;

  scrollToGivenSlide(currentIndex);
};

export {
  scrollToNextSlide,
  scrollToPreviousSlide,
  desktopSliderContainerEl,
  previousSlideButtonEl,
  nextSlideButtonEl,
};
