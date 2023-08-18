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
    (event.target === searchButtonEl &&
      searchInputEl.classList.contains("invisible")) ||
    searchContainerEl.contains(event.target)
  ) {
    showSearchInput();

    //handle click outside of search container
  } else {
    hideSearchInput();
  }
});
