import React from "react";

const Title = ({
  children,
  w = "w-20",
  h = "h-20",
  bg = "bg-white",
  text = "text-black",
}) => {
  return (
    <div
      className={`${w} ${h} ${bg} ${text} flex justify-center items-center rounded-full text-center selection:text-primaryLight selection:bg-primary`}
    >
      {children}
    </div>
  );
};

export default Title;
