export const imgPop = {
  hidden: {
    opacity: 0,
  },
  animate: (i) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i,
    },
  }),
};

export const main = {
  hidden: {
    x: "100%",
  },
  animate: (i) => ({
    x: "0%",
    transition: {
      duration: 1.3,
      delay: i,
    },
  }),
};

export const second = {
  hidden: {
    x: "100%",
  },
  animate: (i) => ({
    x: "0%",
    transition: {
      duration: 1.2,
      delay: i,
    },
  }),
};

export const typing = {
  hidden: {
    y: "100%",
  },
  animate: (i) => ({
    y: "0%",
    transition: {
      duration: 1,
      delay: i,
    },
  }),
};
