import React, { useState, useEffect } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
// import Reviews from "../../About/Reviews/Reviews";
import { CustomerFeedback } from "../ProductsData";
const ProductDetails = ({ filteredProductData }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-[90%] md:w-[70%] lg:w-[60%] mx-auto flex flex-col items-center">
      {/* Header Image Section */}
      <div className="mx-auto w-[70%] h-[500px] mb-8 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={filteredProductData.productImage}
          alt="Business team in meeting"
          className=""
        />
      </div>
      <h2 className="text-3xl md:text-4xl text-yellow font-semibold">
        {filteredProductData.productName}
      </h2>
      <div className="flex items-center justify-center my-5">
        {filteredProductData.productPrice?.map((item) => (
          <div className="bg-yellow rounded mx-5">
            <div
              className={`leading-relaxed max-w-fit text-white rounded-full ${
                item.size.length > 0 && "p-2"
              }`}
            >
              {item.size.length > 0 && `Size : ${item.size}`}
            </div>
            <div className=" leading-relaxed p-2">Price : {item.price}</div>
          </div>
        ))}
      </div>
      {/* Meta Information */}

      {/* Content Section */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
          {/* {filteredProductData.title} */}
        </h1>

        {filteredProductData.productDescription?.map((item) => (
          <div className="">
            {item.heading.length > 0 && (
              <div className="leading-relaxed bg-yellow max-w-fit text-white rounded-full p-2">
                {item.heading}
              </div>
            )}
            <div className="text-gray-600 leading-relaxed">{item.text}</div>
          </div>
        ))}
      </div>
      <a
        className="my-4 w-full"
        href="https://www.tiktok.com/@fattoperdeillc"
        target="__blank"
      >
        <button className=" transition duration-300 ease-in-out hover:scale-105 p-3 rounded bg-yellow text-white w-full">
          BUY NOW
        </button>
      </a>
      {/* adding the blog feature comment */}

      <p className="text-yellow font-medium tracking-wide text-md md:text-2xl font my-8 text-center">
        « OUR CUSTOMER FEEDBACKS »
      </p>
      {/* adding the blog comment of author */}
      {CustomerFeedback.map((singleFeedback) => (
        <div className="max-w-3xl mx-auto p-4 bg-amber-50 rounded-lg relative font my-8 md:my-4 w-full mx-auto ">
          <div className="text-yellowDark text-6xl  top-4 left-4">"</div>

          <div className="mb-8 px-8 text-black italic">
            {singleFeedback.feedbackText}
          </div>
          <div className="flex items-center">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">-</span>
                <h3 className="text-xl font-bold text-black">
                  {" "}
                  {singleFeedback.feedbackAuthor}{" "}
                </h3>{" "}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
