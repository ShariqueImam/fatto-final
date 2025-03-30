import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import bgImg from "../../assets/mission.jpg";
import styled from "styled-components";
const MovingTextWithBackground = () => {
  window.scrollTo(0, 0);

  const { width } = useWindowSize();
  const FeaturedBackground1 = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${(width < 500 && bgImg) ||
      (width > 500 && width < 1000 && bgImg) ||
      (width > 1000 && bgImg)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 80vh;
    width: 100vw;
  `;
  const style = {
    heading:
      "text-5xl md:text-6xl lg:text-8xl text-white  my-2 md:my-3 w-[100%] md:w-[100%] text-center font-semibold font",
    para: "text-white text-sm md:text-lg my-3 md:my-8 text-center  mx-auto md:mx-auto w-[100%] md:w-[70%] font-light",
    btn: " px-7 md:px-5 py-2 md:py-3 transition duration-[200ms] max-w-fit mx-auto md:mx-0 text-white text-md",
    arrow: `text-lg text-white`,
    btnContainer:
      "font-thin mx-auto  my-2 flex items-center justify-start px-4 rounded-lg",
    mainContent:
      "w-[90%] md:w-[100%] h-[80%] flex flex-col items-start justify-center  mx-auto font1",
  };
  return (
    <div className="" id="mission">
      <FeaturedBackground1 className="">
        <div className="backdrop-blur-[2px] h-full w-full flex flex-col items-center justify-center w-[100%] md:w-[70%] mx-auto text-white">
          <h2 className="text-5xl md:text-6xl font-semibold my-6">
            Our Mission
          </h2>
          <h2 className="text-3xl md:text-3xl font-semibold my-5 text-center">
            We keep it Natural and Pure
          </h2>
          <p className="text-center">
            At Fatto Per Dei, our mission is to revolutionize personal care with
            pure, natural ingredients. We are committed to crafting
            chemical-free, eco-friendly products that nourish and protect your
            skin and hair. Our goal is to inspire a healthier, more sustainable
            self-care routine for a naturally radiant you.
          </p>
          <a
            href="https://www.tiktok.com/@fattoperdeillc"
            className="transition duration-300 ease-in-out hover:scale-105 text-yellow my-4 md:my-6 bg-yellow text-white max-w-fit p-3 rounded-lg border-move-animation"
            target="__blank"
          >
            Visit Us
          </a>
        </div>
      </FeaturedBackground1>
    </div>
  );
};
export default MovingTextWithBackground;
