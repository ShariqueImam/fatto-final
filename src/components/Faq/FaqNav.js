import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Answer from "./Answer";

const style = {
  wrapper: " w-[100%] md:w-[60%] lg:w-[45%] mx-auto my-12 md:my-24",
  singleNav:
    "flex flex-col items-center text-white py-5 md:py-7 px-4 md:px-6 cursor-pointer rounded-lg border-2 m-4 border-lg border-neutral-600",
  heading:
    "text-sm md:text-xl  text-neutral-600 cursor-pointer flex-1 font-semibold",
  icon: "text-neutral-600 text-2xl md:text-2xl",
  questionSection: "flex justify-between w-[100%]",
};
const MobileCollctionNav = () => {
  const [Nav, setNav] = useState("");
  const handleNav = (value) => {
    if (value !== Nav) {
      setNav(value);
    } else {
      setNav("");
    }
  };
  return (
    <div className={style.wrapper}>
      <div className={style.singleNav} onClick={() => handleNav("1")}>
        <section className={style.questionSection}>
          <h2 className={style.heading}>
            How long does it take to develop a website?
          </h2>
          {Nav == "1" ? (
            <AiOutlineMinus className={style.icon} />
          ) : (
            <AiOutlinePlus className={style.icon} />
          )}
        </section>
        {Nav == "1" && (
          <Answer
            para1="The timeline for website development varies based on the complexity of the project. Simple websites can be completed in a few weeks, while larger or more customized projects may take several months.
 "
          />
        )}
      </div>

      <div className={style.singleNav} onClick={() => handleNav("2")}>
        <section className={style.questionSection}>
          <h2 className={style.heading}>
            What factors determine the cost of website development?
          </h2>
          {Nav == "2" ? (
            <AiOutlineMinus className={style.icon} />
          ) : (
            <AiOutlinePlus className={style.icon} />
          )}
        </section>
        {Nav == "2" && (
          <Answer
            para1=" The cost of website development depends on various factors like the size and complexity of the website, desired features and functionalities, custom design requirements, and additional services such as SEO or e-commerce integration.
"
          />
        )}
      </div>

      <div className={style.singleNav} onClick={() => handleNav("3")}>
        <section className={style.questionSection}>
          <h2 className={style.heading}>
            Do you offer custom website design or use templates?
          </h2>
          {Nav == "3" ? (
            <AiOutlineMinus className={style.icon} />
          ) : (
            <AiOutlinePlus className={style.icon} />
          )}
        </section>
        {Nav == "3" && (
          <Answer
            para1=" We specialize in custom website design tailored to your unique needs and brand identity. Our team of designers will work closely with you to create a visually appealing and user-friendly website.
"
          />
        )}
      </div>

      <div className={style.singleNav} onClick={() => handleNav("4")}>
        <section className={style.questionSection}>
          <h2 className={style.heading}>
            Can you assist with domain name registration and hosting?
          </h2>
          {Nav == "4" ? (
            <AiOutlineMinus className={style.icon} />
          ) : (
            <AiOutlinePlus className={style.icon} />
          )}
        </section>
        {Nav == "4" && (
          <Answer
            para1=" Yes, we can help you with domain name registration and recommend suitable hosting providers. We ensure seamless integration between your domain, hosting, and website.
"
          />
        )}
      </div>

      <div className={style.singleNav} onClick={() => handleNav("5")}>
        <section className={style.questionSection}>
          <h2 className={style.heading}>
            Will my website be mobile-friendly and responsive?
          </h2>
          {Nav == "5" ? (
            <AiOutlineMinus className={style.icon} />
          ) : (
            <AiOutlinePlus className={style.icon} />
          )}
        </section>
        {Nav == "5" && (
          <Answer
            para1="Absolutely! We prioritize mobile responsiveness to ensure your website looks and functions flawlessly across different devices and screen sizes, providing an optimal user experience.
 "
          />
        )}
      </div>

      <div className={style.singleNav} onClick={() => handleNav("6")}>
        <section className={style.questionSection}>
          <h2 className={style.heading}>
            Can you integrate e-commerce functionality into the website?
          </h2>
          {Nav == "6" ? (
            <AiOutlineMinus className={style.icon} />
          ) : (
            <AiOutlinePlus className={style.icon} />
          )}
        </section>
        {Nav == "6" && (
          <Answer
            para1=" Yes, we have expertise in developing e-commerce websites. We can implement secure payment gateways, product catalogs, shopping carts, and other essential features to create a seamless online shopping experience.
"
          />
        )}
      </div>
      <div className={style.singleNav} onClick={() => handleNav("7")}>
        <section className={style.questionSection}>
          <h2 className={style.heading}>
            Do you provide ongoing maintenance and support after the website is
            launched?
          </h2>
          {Nav == "7" ? (
            <AiOutlineMinus className={style.icon} />
          ) : (
            <AiOutlinePlus className={style.icon} />
          )}
        </section>
        {Nav == "7" && (
          <Answer
            para1=" Yes, we offer ongoing website maintenance and support packages to ensure your website remains up-to-date, secure, and optimized. Our team is readily available to assist you with any technical issues or updates.
"
          />
        )}
      </div>
      <div className={style.singleNav} onClick={() => handleNav("8")}>
        <section className={style.questionSection}>
          <h2 className={style.heading}>
            Can you optimize my website for search engines (SEO)?
          </h2>
          {Nav == "8" ? (
            <AiOutlineMinus className={style.icon} />
          ) : (
            <AiOutlinePlus className={style.icon} />
          )}
        </section>
        {Nav == "8" && (
          <Answer
            para1="Absolutely! We employ best practices for on-page optimization, including keyword research, meta tags, sitemap creation, and SEO-friendly URL structures, to improve your website's visibility in search engine rankings.
 "
          />
        )}
      </div>
      <div className={style.singleNav} onClick={() => handleNav("9")}>
        <section className={style.questionSection}>
          <h2 className={style.heading}>
            Can I make updates and changes to the website myself?
          </h2>
          {Nav == "9" ? (
            <AiOutlineMinus className={style.icon} />
          ) : (
            <AiOutlinePlus className={style.icon} />
          )}
        </section>
        {Nav == "9" && (
          <Answer
            para1=" Yes, we can incorporate a content management system (CMS) that allows you to update and manage your website easily. We'll provide training and documentation to ensure you feel confident in making changes.
 "
          />
        )}
      </div>
      <div className={style.singleNav} onClick={() => handleNav("10")}>
        <section className={style.questionSection}>
          <h2 className={style.heading}>
            What security measures do you implement to protect my website from
            cyber threats?
          </h2>
          {Nav == "10" ? (
            <AiOutlineMinus className={style.icon} />
          ) : (
            <AiOutlinePlus className={style.icon} />
          )}
        </section>
        {Nav == "10" && (
          <Answer
            para1=" We prioritize website security and implement various measures such as SSL encryption, regular software updates, strong user authentication, and robust firewall configurations to safeguard your website from potential cyber threats.
"
          />
        )}
      </div>
    </div>
  );
};

export default MobileCollctionNav;
