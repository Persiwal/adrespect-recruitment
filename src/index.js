import "./index.css";
import selectors from "./constants/selectors/selectors.js";
import "./components/main/realizations/realizations.js";
import {
  toggleHeaderVisibility,
  showOfferDropdown,
  hideOfferDropdown,
  showSearchInput,
  hideSearchInput,
  toggleMobileMenu,
  hideMobileOfferDropdown,
  showMobileOfferDropdown,
  handleMobileNavItemClick,
  closeMobileMenu,
} from "./components/header/header.js";
import {
  resetSliderInterval,
  scrollToNextSlide,
  scrollToPreviousSlide,
} from "./components/main/hero/hero.js";
import { loadMoreImages } from "./components/main/realizations/realizations.js";
import debounce from "./helpers/debounce.js";
import { calculateScaleEffectForAboutImg } from "./components/main/about/about";

const debouncedToggleHeaderVisibility = debounce(toggleHeaderVisibility, 10);

window.addEventListener("scroll", () => {
  debouncedToggleHeaderVisibility();
  calculateScaleEffectForAboutImg();
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    closeMobileMenu();
  }
});

window.addEventListener("mouseover", (event) => {
  if (
    event.target === selectors.header.offerNavItemEl ||
    selectors.header.offerNavItemEl.contains(event.target)
  )
    showOfferDropdown();
});

window.addEventListener("mouseout", (event) => {
  if (selectors.header.offerNavItemEl.contains(event.target))
    hideOfferDropdown();
});

window.addEventListener("click", (event) => {
  //handle search-icon click when search input is opened
  if (
    selectors.header.searchButtonEl.contains(event.target) &&
    !selectors.header.searchInputEl.classList.contains("invisible")
  ) {
    hideSearchInput();

    //handle search-icon click when search input is closed
  } else if (
    (selectors.header.searchContainerEl.contains(event.target) &&
      selectors.header.searchInputEl.classList.contains("invisible")) ||
    selectors.header.searchContainerEl.contains(event.target)
  ) {
    showSearchInput();

    //handle click outside of search container
  } else {
    hideSearchInput();
  }

  //toggle mobile menu open
  if (selectors.header.hamburgerButtonEl.contains(event.target)) {
    toggleMobileMenu();
  }

  //handle click on mobile offer nav item when its open
  if (
    selectors.header.mobileOfferNavItemEl.contains(event.target) &&
    selectors.header.mobileOfferDropdownEl.classList.contains("flex")
  ) {
    hideMobileOfferDropdown();
  } else if (selectors.header.mobileOfferNavItemEl.contains(event.target)) {
    //handle click on mobile offer nav item when its closed

    showMobileOfferDropdown();
  } else {
    //handle click outside of mobile offer nav item container
    hideMobileOfferDropdown();
  }

  //slider desktop buttons
  if (selectors.hero.previousSlideButtonEl.contains(event.target)) {
    resetSliderInterval();
    scrollToPreviousSlide();
  }

  if (selectors.hero.nextSlideButtonEl.contains(event.target)) {
    resetSliderInterval();
    scrollToNextSlide();
  }

  if (selectors.realizations.showMoreButtonEl.contains(event.target)) {
    loadMoreImages();
  }

  if (event.target.classList.contains("mobile-menu-item")) {
    handleMobileNavItemClick();
  }
});
