import { useState } from "react";
import ImageFounder from "../../assets/client1.jpg";
import ImageForAbout from "../../assets/butter1.jpg";
import useWindowSize from "../../hooks/useWindowSize";
import { use } from "react";
const AboutSection = () => {
  const width = useWindowSize().width;
  return (
    <section className="bg-white py-12 font w-[90%] md:w-[70%] mx-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: imgs */}
        <div className="">
          <div className="">
            <img
              src={ImageForAbout}
              alt="Team collaboration"
              width={width < 500 ? 300 : 700}
              height={width < 500 ? 300 : 700}
              className=" shadow-lg"
            />
          </div>
          {/* <div className="relative">
            <img
              src="/path-to-img2.jpg"
              alt="Discussion"
              width={300}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div> */}
        </div>

        {/* Right Section: Content */}
        <div className="text-center md:text-left">
          <p className="text-yellow font-medium tracking-wide text-2xl md:text-2xl font my-8">
            « OUR ABOUT NOW »
          </p>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            We have over <span className="text-yellow">15+</span> Natural Shea
            Butter Products
          </h2>
          <p className="text-gray-600 mb-6">
            Empowering healthy skin with pure, ethically sourced shea butter
            crafted for natural nourishment and care.
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6 font-semibold">
            <li>100% Pure and Natural</li>
            <li>Deep Moisturization</li>
          </ul>
          <div className="flex items-center space-x-4 mb-6 justify-center md:justify-start">
            <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center">
              <span className="text-yellow font-bold">99%</span>
            </div>
            <div>
              <h3 className="text-gray-800 font-semibold">Pure Shea Butter</h3>
            </div>
          </div>
          <blockquote className="bg-amber-50 p-4 rounded-lg border-l-4 border-yellowDark mb-6">
            <p className="text-gray-700 italic">
              "Naturally sourced shea butter for radiant skin, crafted with care
              and sustainability."
            </p>
          </blockquote>
          <div className="flex items-center space-x-12">
            <button className="bg-yellow text-white py-2 px-4 rounded-lg flex items-center">
              Watching Video
            </button>
            <div className="flex items-center justify-between">
              <img
                src={ImageFounder}
                alt="Smith Paul"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="ml-2">
                <p className="text-gray-800 font-semibold">Smith Paul</p>
                <p className="text-sm text-gray-600">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
