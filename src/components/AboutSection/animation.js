export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.03 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

export const variants = {
  default: {
    mixBlendMode: "difference",
  },
  hover: {
    width: "200px",
    height: "200px",
    backgroundColor: "#BF2A3E",
    mixBlendMode: "difference",
    origin: "x-0",
    opacity: 1,
  },
};
