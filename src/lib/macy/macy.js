import Macy from "macy";

const createMacyImgGrid = (container) => {
  const macyImgGrid = new Macy({
    container: container,
    mobileFirst: true,
    columns: 2,
    breakAt: {
      600: 2,
      1024: 3,
    },
    margin: {
      x: 43,
      y: 42,
    },
    wait: 500,
  });

  return macyImgGrid;
};

const recalculateMacyImgGrid = (macyInstance) => {
  macyInstance.recalculate();
};

export { createMacyImgGrid, recalculateMacyImgGrid };
