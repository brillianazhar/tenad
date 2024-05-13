export const slideUp = {
  hidden: {
    y: "100%",
  },
  animate: {
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
};

export const slideRight = {
  hidden: {
    x: "-100%",
  },
  animate: (i) => ({
    x: "0%",
    transition: {
      duration: 0.8,
      delay: 0.05 * i,
    },
  }),
};

export const slideLeft = {
  hidden: {
    x: "100%",
  },
  animate: (i) => ({
    x: "0%",
    transition: {
      duration: 0.8,
      delay: 0.05 * i,
    },
  }),
};
