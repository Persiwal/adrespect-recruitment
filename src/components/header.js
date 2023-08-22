import headerSelectors from "../constants/selectors/headerSelectors";
import selectors from "../constants/selectors/selectors";
const { bodyEl } = selectors;

let lastScroll = 0;

const toggleHeaderVisibility = () => {
  const currentScroll = window.scrollY;

  //Check if header is at the top of the page
  if (currentScroll > 70) {
    headerSelectors.headerEl.classList.add("fixed");
    headerSelectors.headerEl.classList.remove("relative");
  } else {
    headerSelectors.headerEl.classList.add("relative");
    headerSelectors.headerEl.classList.remove("fixed");
  }

  if (currentScroll > lastScroll) {
    // Scroll down
    headerSelectors.headerEl.classList.add(`-translate-y-full`);
  } else {
    // Scroll up
    headerSelectors.headerEl.classList.remove(`-translate-y-full`);
  }

  lastScroll = currentScroll;
};

const hideOfferDropdown = () => {
  headerSelectors.offerDropdownEl.classList.remove("animate-slide-up");
  headerSelectors.offerDropdownEl.classList.add(
    "animate-slide-down-and-dissapear"
  );
  headerSelectors.offerDropdownEl.classList.add("invisible");
};

const showOfferDropdown = () => {
  headerSelectors.offerDropdownEl.classList.remove(
    "animate-slide-down-and-dissapear"
  );
  headerSelectors.offerDropdownEl.classList.remove("invisible");
  headerSelectors.offerDropdownEl.classList.add("animate-slide-up");
};

const showSearchInput = () => {
  headerSelectors.searchInputEl.classList.remove("invisible");
  headerSelectors.searchInputEl.classList.remove("w-0");
  headerSelectors.searchInputEl.classList.add("w-[500px]");

  headerSelectors.searchInputEl.focus();
};

const hideSearchInput = () => {
  headerSelectors.searchInputEl.classList.remove("w-[500px]");
  headerSelectors.searchInputEl.classList.add("w-0");
  headerSelectors.searchInputEl.classList.add("invisible");
};

const toggleMobileMenu = () => {
  if (headerSelectors.mobileMenuEl.classList.contains("open")) {
    //handle close
    headerSelectors.mobileMenuEl.classList.remove("open");
    headerSelectors.mobileMenuEl.classList.add("-translate-x-[100%]");

    headerSelectors.hamburgerLineOneEl.classList.remove(
      "rotate-45",
      "translate-x-[2px]",
      "-translate-y-[4px]"
    );
    headerSelectors.hamburgerLineTwoEl.classList.remove("!hidden");
    headerSelectors.hamburgerLineThreeEl.classList.remove(
      "-rotate-45",
      "translate-x-[2px]",
      "translate-y-[7px]"
    );

    //enable scrolling
    bodyEl.classList.remove("overflow-hidden");
  } else {
    //handle open
    headerSelectors.mobileMenuEl.classList.add("open");
    headerSelectors.mobileMenuEl.classList.remove("-translate-x-[100%]");

    headerSelectors.hamburgerLineOneEl.classList.add(
      "rotate-45",
      "translate-x-[2px]",
      "-translate-y-[4px]"
    );
    headerSelectors.hamburgerLineTwoEl.classList.add("!hidden");
    headerSelectors.hamburgerLineThreeEl.classList.add(
      "-rotate-45",
      "translate-x-[2px]",
      "translate-y-[7px]"
    );

    //block scrolling
    bodyEl.classList.add("overflow-hidden");
  }
};

const showMobileOfferDropdown = () => {
  headerSelectors.mobileOfferDropdownEl.classList.remove("hidden");
  headerSelectors.mobileOfferDropdownEl.classList.add("flex");
};

const hideMobileOfferDropdown = () => {
  headerSelectors.mobileOfferDropdownEl.classList.remove("flex");
  headerSelectors.mobileOfferDropdownEl.classList.add("hidden");
};

const handleMobileNavItemClick = (target) => {
  toggleMobileMenu();
};

export {
  toggleHeaderVisibility,
  hideOfferDropdown,
  showOfferDropdown,
  showSearchInput,
  hideSearchInput,
  toggleMobileMenu,
  hideMobileOfferDropdown,
  showMobileOfferDropdown,
  handleMobileNavItemClick,
};
