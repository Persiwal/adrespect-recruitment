const headerEl = document.getElementById("header");
const offerDropdownEl = document.getElementById("offer-dropdown");
const offerNavItemEl = document.getElementById("offer-nav-item");
const searchInputEl = document.getElementById("search-input");
const searchContainerEl = document.getElementById("search-container");
const searchButtonEl = document.getElementById("search-button");

let lastScroll = 0;

const toggleHeaderVisibility = () => {
  const currentScroll = window.scrollY;

  //Check if header is at the top of the page
  if (currentScroll > 0) {
    headerEl.classList.add("fixed");
  } else {
    headerEl.classList.remove("fixed");
  }

  if (currentScroll > lastScroll) {
    // Scroll down
    headerEl.classList.add(`-translate-y-full`);
  } else {
    // Scroll up
    headerEl.classList.remove(`-translate-y-full`);
  }

  lastScroll = currentScroll;
};

const hideOfferDropdown = () => {
  offerDropdownEl.classList.remove("animate-slide-up");
  offerDropdownEl.classList.add("animate-slide-down-and-dissapear");
  offerDropdownEl.classList.add("invisible");
};

const showOfferDropdown = () => {
  offerDropdownEl.classList.remove("animate-slide-down-and-dissapear");
  offerDropdownEl.classList.remove("invisible");
  offerDropdownEl.classList.add("animate-slide-up");
};

const showSearchInput = () => {
  searchInputEl.classList.remove("invisible");
  searchInputEl.classList.remove("w-0");
  searchInputEl.classList.add("w-[500px]");

  searchInputEl.focus();
};

const hideSearchInput = () => {
  searchInputEl.classList.remove("w-[500px]");
  searchInputEl.classList.add("w-0");
  searchInputEl.classList.add("invisible");
};

export {
  toggleHeaderVisibility,
  hideOfferDropdown,
  showOfferDropdown,
  offerDropdownEl,
  offerNavItemEl,
  showSearchInput,
  hideSearchInput,
  searchInputEl,
  searchButtonEl,
  searchContainerEl,
};
