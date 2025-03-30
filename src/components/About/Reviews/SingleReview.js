import React from "react";

const SingleReview = ({ name, message }) => {
  const style = {
    wrapper:
      "flex flex-col items-center justify-center text-neutral-600  mx-8 my-6 md:my-1 mx-auto  bg-white border-2",
  };
  return (
    <div className={style.wrapper}>
      <p className="text-md md:text-md text-center bg-amber-50 p-12 rounded-md h-72 md:h-64">
        {message.slice(0, 50)}
      </p>

      <h2 className="font-semibold text-xl md:text-2xl lg:text-2xl mt-2 md:mt-2">
        {name}
      </h2>
      <p className="border-b-[3px] border-stone-300 w-[12vw] md:w-[4vw] my-3 "></p>
    </div>
  );
};

export default SingleReview;
