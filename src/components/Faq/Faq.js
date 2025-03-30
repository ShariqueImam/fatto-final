import React from "react";
import Header from "../UI/Header/Header";
import FaqNav from "./FaqNav";
import Footer from "../UI/Footer/Footer";
import Animator from "../UI/Animator";

const Faq = () => {  window.scrollTo(0, 0);

  const style = {
    wrapper: "font",
  };
  return (
    <Animator>
      <div className={style.wrapper}>
        <Header
          text="FAQs"
          para="Answers to Commonly Asked Questions about Building and Managing Your Online Presence"
          link="faq"
        />
        <FaqNav />
        <div className="bg-neutral-600">
          <Footer />
        </div>
      </div>
    </Animator>
  );
};

export default Faq;
