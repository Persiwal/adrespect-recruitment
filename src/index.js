import {
  toggleHeaderVisibility,
  showOfferDropdown,
  hideOfferDropdown,
  offerNavItemEl,
  showSearchInput,
  hideSearchInput,
  searchButtonEl,
  searchContainerEl,
  searchInputEl,
  toggleMobileMenu,
  hamburgerButtonEl,
  hideMobileOfferDropdown,
  showMobileOfferDropdown,
  mobileOfferNavItemEl,
  mobileOfferDropdownEl,
  offerDropdownEl,
} from "./components/header.js";
import {
  nextSlideButtonEl,
  scrollToNextSlide,
  scrollToPreviousSlide,
  previousSlideButtonEl,
} from "./components/hero.js";
import debounce from "./helpers/debounce.js";

const debouncedToggleHeaderVisibility = debounce(toggleHeaderVisibility, 50);

window.addEventListener("scroll", () => {
  debouncedToggleHeaderVisibility();
});

window.addEventListener("mouseover", (event) => {
  if (event.target === offerNavItemEl || offerNavItemEl.contains(event.target))
    showOfferDropdown();
});

window.addEventListener("mouseout", (event) => {
  console.log(event.target);

  if (offerNavItemEl.contains(event.target)) hideOfferDropdown();
});

window.addEventListener("click", (event) => {
  console.log(event.target);

  //handle search-icon click when search input is opened
  if (
    searchButtonEl.contains(event.target) &&
    !searchInputEl.classList.contains("invisible")
  ) {
    hideSearchInput();

    //handle search-icon click when search input is closed
  } else if (
    (searchContainerEl.contains(event.target) &&
      searchInputEl.classList.contains("invisible")) ||
    searchContainerEl.contains(event.target)
  ) {
    showSearchInput();

    //handle click outside of search container
  } else {
    hideSearchInput();
  }

  //toggle mobile menu open
  if (hamburgerButtonEl.contains(event.target)) {
    toggleMobileMenu();
  }

  //handle click on mobile offer nav item when its open
  if (
    mobileOfferNavItemEl.contains(event.target) &&
    mobileOfferDropdownEl.classList.contains("flex")
  ) {
    hideMobileOfferDropdown();
  } else if (mobileOfferNavItemEl.contains(event.target)) {
    //handle click on mobile offer nav item when its closed

    showMobileOfferDropdown();
  } else {
    //handle click outside of mobile offer nav item container
    hideMobileOfferDropdown();
  }

  //slider desktop buttons
  if (previousSlideButtonEl.contains(event.target)) {
    scrollToPreviousSlide();
  }

  if (nextSlideButtonEl.contains(event.target)) {
    scrollToNextSlide();
  }
});

//auto scroll hero slider every 3 secs
setInterval(scrollToNextSlide, 3000);
