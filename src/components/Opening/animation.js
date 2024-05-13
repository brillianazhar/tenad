export const slideUp = {
  initial: {
    top: "0",
  },
  animate: {
    top: "-100vh",
    transition: {
      duration: 0.5,
      delay: 1,
      ease: [0, 0.55, 0.45, 1],
    },
    transitionEnd: {
      scaleY: 0,
      top: "0vh",
    },
  },
  exit: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.55, 0, 1, 0.45],
    },
  },
};

export const slideLeft = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "0%",
    transition: {
      duration: 0.5,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  exit: {
    x: "-100%",
    transition: {
      duration: 0.5,
      ease: [0.55, 0, 1, 0.45],
    },
  },
};
