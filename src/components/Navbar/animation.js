export const slideLeft = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "0%",
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
    },
  },
};

export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.1 * i + 0.2 },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};
