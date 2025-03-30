import React from "react";
import Footer from "../UI/Footer/Footer";
import PrivacyContent from "./PrivacyContent";
import Header from "../UI/Header/Header";
import Animator from "../UI/Animator";

const Privacy = () => {
  window.scrollTo(0, 0);
  const style = { wrapper: "" };
  return (
    <Animator>
      <div className={style.wrapper}>
        <Header
          text="PRIVACY POLICY"
          para="Protecting Your Personal Information: Understanding Our Website's Privacy Policy and Data Handling Practices"
          link="privacy"
        />
        <PrivacyContent />
        <div className="bg-neutral-600">
          <Footer />
        </div>
      </div>
    </Animator>
  );
};

export default Privacy;
