import heroSelectors from "../../../constants/selectors/heroSelectors";

const desktopBreakpoint = 1024;
let currentIndex = 0;

const disableSliderButton = (buttonSelector, buttonArrowSelector) => {
  buttonSelector.classList.add("opacity-50");
  buttonSelector.classList.remove("hover:bg-[#1b5b3169]");
  buttonSelector.classList.add("cursor-default");

  buttonArrowSelector.classList.remove("group-hover:animate-bounce-right");
  buttonArrowSelector.classList.remove("group-hover:animate-bounce-left");

  buttonSelector.setAttribute("disabled", "true");
};

const enableSliderButton = (buttonSelector, buttonArrowSelector) => {
  buttonSelector.classList.remove("opacity-50");
  buttonSelector.classList.add("hover:bg-[#1b5b3169]");
  buttonSelector.classList.remove("cursor-default");

  buttonArrowSelector.classList.add("group-hover:animate-bounce-right");
  buttonArrowSelector.classList.add("group-hover:animate-bounce-left");

  buttonSelector.removeAttribute("disabled", "true");
};

const scrollToGivenSlide = (index) => {
  enableSliderButton(
    heroSelectors.nextSlideButtonEl,
    heroSelectors.nextSlideButtonArrowEl
  );
  enableSliderButton(
    heroSelectors.previousSlideButtonEl,
    heroSelectors.previousSlideButtonArrowEl
  );

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

  if (currentIndex === slider.children.length - 1)
    disableSliderButton(
      heroSelectors.nextSlideButtonEl,
      heroSelectors.nextSlideButtonArrowEl
    );
  if (currentIndex === 0)
    disableSliderButton(
      heroSelectors.previousSlideButtonEl,
      heroSelectors.previousSlideButtonArrowEl
    );
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

//init slider

let sliderInterval = setInterval(scrollToNextSlide, 3000);

//initially disable previous slide button

disableSliderButton(
  heroSelectors.previousSlideButtonEl,
  heroSelectors.previousSlideButtonArrowEl
);

const resetSliderInterval = () => {
  clearInterval(sliderInterval);
  sliderInterval = setInterval(scrollToNextSlide, 3000);
};

export { scrollToNextSlide, scrollToPreviousSlide, resetSliderInterval };
