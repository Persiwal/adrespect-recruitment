const initGallery = (lightgalleryElement) => {
  lightGallery(lightgalleryElement, {
    plugins: [lgZoom, lgThumbnail],
    animateThumb: false,
    zoomFromOrigin: false,
    allowMediaOverlap: true,
    toggleThumb: true,
    controls: true,
  });
};

export default initGallery;
