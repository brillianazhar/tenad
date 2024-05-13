export const slideUp = {
  hidden: {
    y: "100%",
  },
  open: (i) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.03 * i },
  }),
};
