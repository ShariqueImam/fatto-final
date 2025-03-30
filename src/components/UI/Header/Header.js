import React from "react";
import bgImg from "../../../assets/banner.jpg";
import styled from "styled-components";
import useWindowSize from "../../../hooks/useWindowSize";
import Navbar from "../../UI/Navbar/Navbar";
import { Link } from "react-router-dom";
const Header = ({ text, para, link }) => {
  const { width } = useWindowSize();
  const FeaturedBackground1 = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url(${(width < 500 && bgImg) ||
      (width > 500 && width < 1000 && bgImg) ||
      (width > 1000 && bgImg)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 60vh;
    width: 100vw;
  `;
  const style = {
    wrapper: "",
    heading:
      "tracking-wide text-3xl md:text-6xl lg:text-7xl text-white  my-2 md:my-3 text-center md:text-left font-semibold text-center mx-auto",
    para: "w-[100%] md:w-[100%] lg:w-[95%] text-center my-2 md:my-4 text-white font-thin text-xs md:text-lg lg:text-lg mx-auto",
    btn: " px-7 md:px-5 py-2 md:py-3 transition duration-[200ms] max-w-fit mx-auto md:mx-0 text-text text-md",
    link: "w-[100%] md:w-[100%] lg:w-[95%] text-center my-2 md:my-0 text-white font-bold text-xs md:text-lg lg:text-lg mx-auto flex items-center justify-center font",
    homeText:
      "text-center my-2 md:my-4 text-white text-xs md:text-lg lg:text-lg mr-2",
    linkText:
      "text-center my-2 md:my-4 text-white  text-xs md:text-lg lg:text-lg text-yellow ",
    arrow: `text-lg text-text`,
    btnContainer:
      "font-thin cursor-pointer hover:opacity-[0.9]  mx-auto md:mx-0 my-2 flex items-center justify-start bg-white  px-4 rounded-lg",
    mainContent:
      "w-[90%] md:w-[40%] h-[80%] flex flex-col items-start justify-center  mx-auto font skew-y-[20deg]",
    innerContent:
      " flex flex-col items-start justify-center  mx-auto font  trasnform skew-y-[-20deg] ",
  };
  return (
    <FeaturedBackground1 className={style.wrapper}>
      <div className="backdrop-blur-[2px] h-full flex flex-col items-center justify-center ">
        <Navbar />
        <div className={style.mainContent}>
          <div className={style.innerContent}>
            <h2 className={style.heading}>{text}</h2>
            {/* <h2 className={style.link}>
              <Link to={"/"}>
                <p className={style.homeText}>Home / </p>
              </Link>
              <p className={style.linkText}>{link}</p>
            </h2>
            <p className={style.para}>{para}</p> */}
          </div>
        </div>
      </div>
    </FeaturedBackground1>
  );
};

export default Header;
