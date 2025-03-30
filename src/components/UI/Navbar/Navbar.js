import React, { useState, useEffect } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import NavDrawer from "./NavDrawer";
import {
  RoundFacebook,
  BaselineTiktok,
  InstagramSolid,
  BaselineMailOutline,
  BaselineLocalPhone,
  Linkedin,
} from "../../Icons";
import "animate.css";
const Navbar = (props) => {
  const style = {
    navDrawer: "flex sm:hidden items-center text-white",
    wrapper:
      "text-gray-900 pt-1 md:py-6 z-10 w-[100%] md:w-[100%] bg-white bg-opacity-[0.9] mx-auto self-center font text-black",
    mainNav:
      "flex items-center justify-between py-1 md:py-1 hidden sm:flex w-[100%] md:w-[90%] mx-auto",
    list: "font-light border-move-animation list-none cursor-pointer md:mx-4  text-md tracking-wide",
    navContainer: "flex items-center justify-center",
    contactButton:
      " font-light rounded-lg bg-yellow text-white font-semibold  tracking-wider flex items-center justify-center mx-5 bg-red px-3 py-2 text-md hover:opacity-[0.90] transition duration-[250ms]",
    img: "cursor-pointer",
    input: "bg-transparent text-white cursor-pointer",
  };
  const [Enter, setEnter] = useState(false);
  const [Item, setItem] = useState("home");

  // props.onScroll(Item);
  const handleScroll = (val) => {
    setItem(val);
  };

  return (
    // install the mui first for the Navdrawer
    <div className={style.wrapper}>
      <nav className={style.mainNav}>
        <div className={style.img}>
          <p>
            <h2 className="text-3xl font-bold text-yellow  tracking-wide">
              Fatto Per Dei
            </h2>
          </p>
        </div>
        <div className="flex items-center justify-center ">
          <ul className={style.navContainer}>
            <Link to="/">
              <li className={style.list}>Home</li>
            </Link>
            <a href="#about">
              <li className={style.list} onClick={() => setItem("about")}>
                About Me
              </li>
            </a>
            <a href="#products">
              <li className={style.list} onClick={() => setItem("features")}>
                Our Products
              </li>
            </a>
            <a href="#mission">
              <li className={style.list} onClick={() => setItem("features")}>
                Our Mission
              </li>
            </a>
          </ul>
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
      </nav>
      <div className={style.navDrawer}>
        <NavDrawer onScroll={handleScroll} />
      </div>
    </div>
  );
};

export default Navbar;
