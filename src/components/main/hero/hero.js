import heroSelectors from "../../../constants/selectors/heroSelectors";

const desktopBreakpoint = 1024;
let currentIndex = 0;

const scrollToGivenSlide = (index) => {
  const slider =
    window.innerWidth >= desktopBreakpoint
      ? heroSelectors.desktopSliderEl
      : heroSelectors.mobileSliderEl;
  const sliderContainer =
    window.innerWidth >= desktopBreakpoint
      ? heroSelectors.desktopSliderContainerEl
      : heroSelectors.mobileSliderContainerEl;

  const slideWidth = slider.clientWidth;

  const scrollPosition = slideWidth * index;

  sliderContainer.scrollTo({ left: scrollPosition, behavior: "smooth" });
};

const scrollToNextSlide = () => {
  const slider =
    window.innerWidth >= desktopBreakpoint
      ? heroSelectors.desktopSliderEl
      : heroSelectors.mobileSliderEl;

  currentIndex =
    currentIndex === slider.children.length - 1 ? 0 : currentIndex + 1;

  scrollToGivenSlide(currentIndex);
};

const scrollToPreviousSlide = () => {
  currentIndex = currentIndex === 0 ? 0 : currentIndex - 1;

  scrollToGivenSlide(currentIndex);
};

export { scrollToNextSlide, scrollToPreviousSlide };
