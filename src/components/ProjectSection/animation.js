export const back = {
  initial: {
    height: "0",
  },
  animate: {
    height: "100%",
    transition: {
      duration: 0.2,
    },
  },
};

export const text = {
  animate: {
    color: "#1C1C1E",
  },
};

export const scaleModal = {
  initial: {
    scale: 0,
  },
  open: {
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  close: {
    scale: 0,
    transition: {
      duration: 0.3,
      ease: [0.32, 0, 0.67, 0],
    },
  },
};
