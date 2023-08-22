import selectors from "../../../constants/selectors/selectors.js";
import { createMacyImgGrid } from "../../../lib/macy/macy.js";
import allRealizationsGalleryImagesNames from "../../../constants/allRealizationsGalleryImages.js";
import {
  initGallery,
  refreshGallery,
} from "../../../lib/lightgallery/gallery.js";

let macyInstance = null;
let lightGalleryInstance = null;
let loadedImages = 0;
const imagesToLoadPerClick = 8;

const createRealizationsGalleryImageEl = (src, index) => {
  const lightBoxContainer = document.createElement("a");
  lightBoxContainer.href = src;
  lightBoxContainer.classList.add("relative");
  lightBoxContainer.classList.add("group");
  lightBoxContainer.classList.add("hover:cursor-pointer");

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
      const fullImgPath = `./assets/${allRealizationsGalleryImagesNames[loadedImages]}`;
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
  refreshGallery(lightGalleryInstance);
};

const initRealizationsGrid = () => {
  addImagesToHtml();
  macyInstance = createMacyImgGrid("#realizations-grid");
  lightGalleryInstance = initGallery(
    selectors.realizations.realizationsGridContainerEl
  );
};

initRealizationsGrid();

export { loadMoreImages };
