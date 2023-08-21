import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const initGallery = (lightgalleryElement) => {
  const lightGalleryInstance = lightGallery(lightgalleryElement, {
    plugins: [lgZoom, lgThumbnail],
    animateThumb: false,
    zoomFromOrigin: false,
    allowMediaOverlap: true,
    toggleThumb: true,
    controls: true,
  });

  return lightGalleryInstance;
};

const refreshGallery = (galleryInstance) => {
  galleryInstance.refresh();
};

export { initGallery, refreshGallery };
