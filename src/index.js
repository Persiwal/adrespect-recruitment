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
} from "./components/header.js";

window.addEventListener("scroll", () => {
  toggleHeaderVisibility();
});

window.addEventListener("mouseover", (event) => {
  if (event.target === offerNavItemEl || offerNavItemEl.contains(event.target))
    showOfferDropdown();
});

window.addEventListener("mouseout", (event) => {
  if (event.target === offerNavItemEl || offerNavItemEl.contains(event.target))
    hideOfferDropdown();
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
});
