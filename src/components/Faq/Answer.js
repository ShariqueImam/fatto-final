import React from "react";

const style = {
  wrapper: "flex my-4 font flex-col text-neutral-600 ",
  para: "text-sm md:text-lg font-normal collection-para",
};
const Answer = ({ para1 }) => {
  return (
    <div className={style.wrapper}>
      {para1 && <p className={style.para}>{para1}</p>}
    </div>
  );
};

export default Answer;
