import React from "react";
import client from "./client";
import { urlForThumbnail } from "./image";
import { Link } from "react-router-dom";
import {
  RoundFacebook,
  BaselineTiktok,
  InstagramSolid,
  BaselineMailOutline,
  BaselineLocalPhone,
  Linkedin,
} from "../../Icons";
const Footer = () => {
  const [Data, setData] = React.useState([]);
  React.useEffect(() => {
    const getProduct = async () => {
      const orderData = await client.fetch(`*[_type=='blog']`);
      if (orderData && orderData.length > 0) {
        setData(orderData);
      }
    };
    getProduct();
  }, []);

  const recentPosts = [Data[0], Data[1]];

  return (
    <footer className="bg-yellow text-white w-[90%] md:w-[60%] mx-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 flex items-center">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-4xl md:text-6xl font-bold ml-2">
                <span className="text-yellow">Eler</span>
              </span>
            </div>
            <p className="text-white mb-4">
              ​Fatto Per Dei specializes in natural personal care products,
              offering lip butters, toothpastes, body scrubs, and hair oils made
              from 100% natural ingredients. Our mission is to provide
              high-quality, eco-friendly products that nourish and care for your
              body naturally.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61573812272294&mibextid=wwXIfr&rdid=wScxR7oQQKh0XlxO&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Bhz8zBQKj%2F%3Fmibextid%3DwwXIfr#"
                className="p-1 md:p-2 bg-yellow rounded-full hover:bg-white hover:text-yellow transition-colors"
                target="__blank"
              >
                <RoundFacebook />
              </a>
              <a
                href="https://www.tiktok.com/@fattoperdeillc"
                className="p-1 md:p-2 bg-yellow rounded-full hover:bg-white hover:text-yellow transition-colors"
                target="__blank"
              >
                {" "}
                <BaselineTiktok />
              </a>
              <a
                href="https://www.instagram.com/fattoperdei/?igsh=MTQzZWY4NDY2c2VrMg%3D%3D&utm_source=qr#"
                className="p-1 md:p-2 bg-yellow rounded-full hover:bg-white hover:text-yellow transition-colors"
                target="__blank"
              >
                <InstagramSolid />
              </a>
              <a
                href="https://www.linkedin.com/in/lydia-johnson-874a60100/"
                className="p-1 md:p-2 bg-yellow rounded-full hover:bg-white hover:text-yellow transition-colors"
                target="__blank"
              >
                <Linkedin />
              </a>
              <a
                href="tel:+18042779010"
                className="p-1 md:p-2 bg-yellow rounded-full hover:bg-white hover:text-yellow transition-colors"
                target="__blank"
              >
                <BaselineLocalPhone />
              </a>
              <a
                href="mailto:lydia@fattoperdei.com"
                className="p-1 md:p-2 bg-yellow rounded-full hover:bg-white hover:text-yellow transition-colors"
                target="__blank"
              >
                <BaselineMailOutline />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 text-sm">
              © Copyright 2025 by Fatto Per Dei
            </p>
            <nav className="flex gap-6 mt-4 md:mt-0">
              <a
                href="/home"
                className="text-gray-200 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-200 hover:text-white transition-colors"
              >
                About Us
              </a>
              <a
                href="/privacy"
                className="text-gray-200 hover:text-white transition-colors"
              >
                Our Products
              </a>
              <a
                href="/contact"
                className="text-gray-200 hover:text-white transition-colors"
              >
                Our Mission
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
