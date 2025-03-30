import React from "react";
import {
  RoundFacebook,
  BaselineTiktok,
  InstagramSolid,
  BaselineMailOutline,
  BaselineLocalPhone,
  Linkedin,
} from "../Icons";
const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center bg-gray-50 w-[100%] md:w-[75%] mx-auto my-10 p-5 rounded-lg shadow-lg"
    >
      <div className="text-black font-5xl md:text-4xl font-bold">
        Welcome to Fatto Per Dei
      </div>
      <p className="text-center my-8 p-5">
        At Fatto Per Dei, we believe in the power of royal nature to heal,
        restore, and beautify. Our journey began with a simple mission: to
        create personal care products that are free from harmful chemicals and
        rich in natural goodness.Our foudner Lydia Johnson has always been
        passionate about the healing properties of nature. After years of
        research and experimentation with an associate desgree, she discovered
        the incredible benefits of natural ingredients like honey, beeswax, and
        essential oils. Inspired by her findings, she decided to share her
        knowledge and create a line of personal care products that harness the
        power of nature.
      </p>
      <div className="flex space-x-4">
        <a
          href="https://www.facebook.com/profile.php?id=61573812272294&mibextid=wwXIfr&rdid=wScxR7oQQKh0XlxO&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Bhz8zBQKj%2F%3Fmibextid%3DwwXIfr#"
          className="p-2 bg-yellow rounded-full hover:bg-white hover:text-yellow transition-colors"
          target="__blank"
        >
          <RoundFacebook />
        </a>
        <a
          href="https://www.tiktok.com/@fattoperdeillc"
          className="p-2 bg-yellow rounded-full hover:bg-white hover:text-yellow transition-colors"
          target="__blank"
        >
          {" "}
          <BaselineTiktok />
        </a>
        <a
          href="https://www.instagram.com/fattoperdei/?igsh=MTQzZWY4NDY2c2VrMg%3D%3D&utm_source=qr#"
          className="p-2 bg-yellow rounded-full hover:bg-white hover:text-yellow transition-colors"
          target="__blank"
        >
          <InstagramSolid />
        </a>
        <a
          href="https://www.linkedin.com/in/lydia-johnson-874a60100/"
          className="p-2 bg-yellow rounded-full hover:bg-white hover:text-yellow transition-colors"
          target="__blank"
        >
          <Linkedin />
        </a>
        <a
          href="tel:+18042779010"
          className="p-2 bg-yellow rounded-full hover:bg-white hover:text-yellow transition-colors"
          target="__blank"
        >
          <BaselineLocalPhone />
        </a>
        <a
          href="mailto:lydia@fattoperdei.com"
          className="p-2 bg-yellow rounded-full hover:bg-white hover:text-yellow transition-colors"
          target="__blank"
        >
          <BaselineMailOutline />
        </a>
      </div>
    </div>
  );
};

export default About;
