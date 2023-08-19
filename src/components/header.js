const body = document.querySelector("body");
const headerEl = document.getElementById("header");
const offerDropdownEl = document.getElementById("offer-dropdown");
const offerNavItemEl = document.getElementById("offer-nav-item");
const searchInputEl = document.getElementById("search-input");
const searchContainerEl = document.getElementById("search-container");
const searchButtonEl = document.getElementById("search-button");
const hamburgerButtonEl = document.getElementById("hamburger-button");
const mobileMenuEl = document.getElementById("mobile-menu");
const mobileOfferNavItemEl = document.getElementById("mobile-offer-nav-item");
const mobileOfferDropdownEl = document.getElementById("mobile-offer-dropdown");
const hamburgerLineOneEl = document.getElementById("hamburger-line-1");
const hamburgerLineTwoEl = document.getElementById("hamburger-line-2");
const hamburgerLineThreeEl = document.getElementById("hamburger-line-3");

let lastScroll = 0;

const toggleHeaderVisibility = () => {
  const currentScroll = window.scrollY;

  //Check if header is at the top of the page
  if (currentScroll > 70) {
    headerEl.classList.add("fixed");
    headerEl.classList.remove("relative");
  } else {
    headerEl.classList.add("relative");
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

const toggleMobileMenu = () => {
  if (mobileMenuEl.classList.contains("open")) {
    //handle close
    mobileMenuEl.classList.remove("open");
    mobileMenuEl.classList.add("-translate-x-[100%]");

    hamburgerLineOneEl.classList.remove(
      "rotate-45",
      "translate-x-[2px]",
      "-translate-y-[4px]"
    );
    hamburgerLineTwoEl.classList.remove("!hidden");
    hamburgerLineThreeEl.classList.remove(
      "-rotate-45",
      "translate-x-[2px]",
      "translate-y-[7px]"
    );

    //enable scrolling
    body.classList.remove("overflow-hidden");
  } else {
    //handle open
    mobileMenuEl.classList.add("open");
    mobileMenuEl.classList.remove("-translate-x-[100%]");

    hamburgerLineOneEl.classList.add(
      "rotate-45",
      "translate-x-[2px]",
      "-translate-y-[4px]"
    );
    hamburgerLineTwoEl.classList.add("!hidden");
    hamburgerLineThreeEl.classList.add(
      "-rotate-45",
      "translate-x-[2px]",
      "translate-y-[7px]"
    );

    //block scrolling
    body.classList.add("overflow-hidden");
  }
};

const showMobileOfferDropdown = () => {
  mobileOfferDropdownEl.classList.remove("hidden");
  mobileOfferDropdownEl.classList.add("flex");
};

const hideMobileOfferDropdown = () => {
  mobileOfferDropdownEl.classList.remove("flex");
  mobileOfferDropdownEl.classList.add("hidden");
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
  toggleMobileMenu,
  hamburgerButtonEl,
  mobileMenuEl,
  hideMobileOfferDropdown,
  showMobileOfferDropdown,
  mobileOfferNavItemEl,
  mobileOfferDropdownEl,
};
