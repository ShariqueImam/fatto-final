import React from "react";
import Header from "../UI/Header/Header";
import Footer from "../UI/Footer/Footer";
import Animator from "../UI/Animator";
import OurServices from "./Services";
import FAQSection from "./FAQ";
import Counter from "./Counter/Counter";
import Reviews from "./Reviews/Reviews";
import AboutSection from "./AboutText";
const About = () => {
  window.scrollTo(0, 0);

  const style = {
    wrapper: "font",
  };
  return (
    <Animator>
      <div className={style.wrapper}>
        <Header
          text="About Us"
          para="We bring you the finest Shea Butter—crafted with care to nourish your skin and soul."
          link="about"
        />
        <AboutSection />
        <Counter />
        <OurServices />
        <FAQSection />
        <Reviews />
        <div className="bg-yellowDark">
          <Footer />
        </div>
      </div>
    </Animator>
  );
};

export default About;
