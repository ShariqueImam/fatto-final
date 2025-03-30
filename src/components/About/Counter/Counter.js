import React from "react";
import SingleCounter from "./SingleCounter";
import { FaMale } from "react-icons/fa";
import { GiButter } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";

const style = {
  wrapper: "h-[60%] flex flex-col py-8 font",
  singleCounter:
    "flex items-center justify-center w-[45%] p-4 text-yello border-r-2 ",
  singleCounterEstablished:
    "flex flex-col items-center justify-center w-[45%] p-4 text-yello",
  details: " text-gray-900 text-sm md:text-xl lg:text-3xl text-yellowDark",
  details1:
    " text-yellow text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ",
  counterDetailsContainer: "flex items-center justify-center flex-col",
  icon: "text-yellow text-5xl md:text-5xl mr-4 md:mr-6 ",
};
const Counter = () => {
  return (
    <div className={style.wrapper}>
      <div className=" flex justify-around my-8 md:my-16 mx-auto md:w-[75%] flex-wrap md:flex-nowrap">
        <div className={style.singleCounterEstablished}>
          <p className={style.details1}>Established</p>
          <p className="text-sm md:text-2xl text-yellow">December 2016</p>
        </div>
        <div className={style.singleCounter}>
          <FaMale className={style.icon} />
          <div className={style.counterDetailsContainer}>
            <SingleCounter start={0} end={800} duration={1} />
            <p className={style.details}>Products Sold</p>
          </div>
        </div>

        <div className={style.singleCounter}>
          {" "}
          <FaShoppingBag className={style.icon} />
          <div className={style.counterDetailsContainer}>
            <SingleCounter start={0} end={300} duration={1} />
            <p className={style.details}>Happy Customers</p>
          </div>
        </div>
        <div className={style.singleCounter}>
          {" "}
          <GiButter className={style.icon} />
          <div className={style.counterDetailsContainer}>
            <SingleCounter start={0} end={15} duration={2} />
            <p className={style.details}>Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
