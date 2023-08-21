import selectors from "../constants/selectors/selectors.js";
import { createMacyImgGrid, recalculateMacyImgGrid } from "../lib/macy/macy.js";
import allRealizationsGalleryImagesNames from "../constants/allRealizationsGalleryImages.js";
import initGallery from "../lib/lightgallery/gallery.js";

let macyInstance = null;
let loadedImages = 0;
const imagesToLoadPerClick = 8;

const createRealizationsGalleryImageEl = (src, index) => {
  const lightBoxContainer = document.createElement("a");
  lightBoxContainer.href = src;
  lightBoxContainer.classList.add("relative");
  lightBoxContainer.classList.add("group");
  lightBoxContainer.classList.add("hover:cursor-pointer");
  lightBoxContainer.classList.add("transition-all");
  lightBoxContainer.classList.add("transition-delay-200");

  const img = document.createElement("img");
  img.src = src;
  img.alt = `Fotografia Projektu ${index + 1}`;
  img.classList.add("w-full", "h-full");
  // img.setAttribute("loading", "lazy");

  const imgOverlay = document.createElement("div");
  imgOverlay.classList.add(
    "absolute",
    "left-0",
    "top-0",
    "w-full",
    "h-full",
    "bg-white",
    "bg-opacity-10",
    "group-hover:bg-opacity-0"
  );

  lightBoxContainer.appendChild(img);
  lightBoxContainer.appendChild(imgOverlay);
  selectors.realizations.realizationsGridContainerEl.append(lightBoxContainer);
};

const addImagesToHtml = () => {
  for (let i = 0; i < imagesToLoadPerClick; i++) {
    if (loadedImages < allRealizationsGalleryImagesNames.length) {
      const fullImgPath = `./images/${allRealizationsGalleryImagesNames[loadedImages]}`;
      createRealizationsGalleryImageEl(fullImgPath, loadedImages);

      loadedImages++;
    } else {
      selectors.realizations.showMoreButtonEl.classList.add("hidden");
      selectors.realizations.realizationsGridShowMoreOverlayEl.classList.add(
        "hidden"
      );

      break;
    }
  }
};

const loadMoreImages = async () => {
  addImagesToHtml();
  macyInstance = createMacyImgGrid("#realizations-grid");
  initGallery(selectors.realizations.realizationsGridContainerEl);
};

const initRealizationsGrid = () => {
  addImagesToHtml();
  macyInstance = createMacyImgGrid("#realizations-grid");
  initGallery(selectors.realizations.realizationsGridContainerEl);
};

initRealizationsGrid();

export { loadMoreImages };
