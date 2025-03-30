import React from "react";
import Header from "../UI/Header/Header";
import ContactForm from "./ContactForm";
import Footer from "../UI/Footer/Footer";
import Animator from "../UI/Animator";
import { InlineWidget } from "react-calendly";
import ContactSection from "./ContactSection";
const Contact = () => {
  window.scrollTo(0, 0);

  const style = {
    wrapper: "font text-neutral-600 ",
    smallHeading:
      "font-semibold text-2xl md:text-3xl max-w-fit mx-auto py-2  my-3 md:my-5 font flex items-center justify-center flex-col text-center",
  };
  return (
    <Animator>
      <div className={style.wrapper}>
        <Header
          text="CONTACT US"
          para="Reach out for premium shea butter, crafted for natural skin care"
          link="contact"
        />
        <p className="text-yellow font-medium tracking-wide text-md md:text-2xl font my-8 text-center">
          « SCHEDULE A MEETING WITH OUT TEAM »
        </p>

        <div className="App">
          <InlineWidget url="https://calendly.com/elerdatabase/30min" />
        </div>

        <ContactSection />
        {/* <ContactForm /> */}
        <div className="bg-yellowDark">
          <Footer />
        </div>
      </div>
    </Animator>
  );
};

export default Contact;
