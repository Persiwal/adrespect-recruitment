import "./index.css";
import selectors from "./constants/selectors/selectors.js";
import "./components/realizations.js";
import {
  toggleHeaderVisibility,
  showOfferDropdown,
  hideOfferDropdown,
  showSearchInput,
  hideSearchInput,
  toggleMobileMenu,
  hideMobileOfferDropdown,
  showMobileOfferDropdown,
} from "./components/header.js";
import { scrollToNextSlide, scrollToPreviousSlide } from "./components/hero.js";
import { loadMoreImages } from "./components/realizations.js";
import debounce from "./helpers/debounce.js";

const debouncedToggleHeaderVisibility = debounce(toggleHeaderVisibility, 10);

window.addEventListener("scroll", () => {
  debouncedToggleHeaderVisibility();
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
    scrollToPreviousSlide();
  }

  if (selectors.hero.nextSlideButtonEl.contains(event.target)) {
    scrollToNextSlide();
  }

  if (selectors.realizations.showMoreButtonEl.contains(event.target)) {
    loadMoreImages();
  }
});

//auto scroll hero slider every 3 secs
setInterval(scrollToNextSlide, 3000);
