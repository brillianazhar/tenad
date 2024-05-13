import React, { useRef } from "react";
import { motion, useSpring } from "framer-motion";

const FramerMagnetic = ({ children, size, stiffness = 150 }) => {
  const ref = useRef(null);

  const spring = {
    stiffness: stiffness,
    damping: 10,
    mass: 0.1,
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { top, left } = ref.current.getBoundingClientRect();
    const targetX = clientX - left - size / 2;
    const targetY = clientY - top - size / 2;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  const mouseLeave = () => {
    mousePosition.x.set(0);
    mousePosition.y.set(0);
  };

  const { x, y } = mousePosition;

  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
};

export default FramerMagnetic;
