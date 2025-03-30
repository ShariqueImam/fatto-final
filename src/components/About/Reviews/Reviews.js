import React, { useState } from "react";

import VisibilitySensor from "react-visibility-sensor";
import ReviewList from "./ReviewList";
const Reviews = () => {
  const [isVisible, setisVisible] = useState(false);
  const [IsSensor, setIsSensor] = useState(true);
  const style = {
    wrapper: "w-[95%] md:w-[100%] lg:w-[100%] mx-auto my-12 ",
    phoneImg: "hidden md:flex",
    card: "flex flex-col my-12 md:mb-24 md:mt-16 ",
    cardContainer:
      "flex flex-wrap md:no-wrap items-center justify-center gap-12",
    headingContainer: "flex items-center jusitfy-center flex-col my-8",
    heading:
      "max-w-fit mx-auto flex items-center jusitfy-center flex-col my-3 md:my-6 text-gray-900 text-3xl md:text-5xl font-semibold text-stone-600 text-center",
  };

  return (
    <div className={style.wrapper}>
      {/* <section className={style.headingContainer}>
          <p className="text-yellow font-medium tracking-wide text-2xl md:text-xl font">
            « OUR TESTIMONIAL SAY »
          </p>
          <p className="text-yellowDark font-semibold w-[90%] md:w-[70%] lg:w-[70%] text-4xl md:text-5xl lg:text-5xl text-center my-2 md:my-4 font">
            What Our Customers Say
          </p>
        </section> */}
      <ReviewList />
      {/* <section className="flex flex-col items-center justify-center md:flex-row">
          <section className={style.reviewLeft}>
            <SingleReview
              image={Client1Img}
              name="Ms Gracey's Lashes"
              designation="Local Business Owner"
              message="I actually landed here searching for a web designer in my area but no one wanted to work with urgency I had. They took on my website, worked with my step by step and had me on my way with a brand new e-commerce site for my business in less than 3 weeks. Awesome."
            />
          </section>{" "}
          <section className={style.reviewCenter}>
            <SingleReview
              image={Client2Img}
              name="Anne Marie P"
              designation="Business Manager"
              message="
I am glad I got introduced to you when I was starting my skin care business. I was able to hand off everything web related and I was able to focus on getting my business. I appreciate the support and recommendations over the years."
            />{" "}
          </section>{" "}
          <section className={style.reviewRight}>
            <SingleReview
              image={Client3Img}
              name="Leslie J"
              designation="Business Owner"
              message="I handed over my website built with six to them because the wix developer at the time was not able to manage it anymore. After the initial consult I just knew this is what I needed. I now have a great website that I own  (not on six, so no more monthly fees) and it is soo beautiful.
"
            />{" "}
          </section>
        </section> */}
    </div>
  );
};

export default Reviews;
