import { delay } from "framer-motion";

export const popUp = {
  initial: {
    y: "100%",
  },
  animate: {
    y: "0%",
    transition: {
      duration: 0.8,
    },
  },
  animate2: {
    y: "0%",
    transition: {
      duration: 0.8,
      delay: 0.5,
    },
  },
};

export const slideUp = {
  initial: {
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
  open: {
    y: "-100%",
    transition: {
      duration: 1.2,
      delay: 0.3,
    },
  },
  close: {
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
};

export const scrollOpacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  close: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
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
      duration: 0.1,
      ease: [0.32, 0, 0.67, 0],
    },
  },
};
