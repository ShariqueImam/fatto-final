import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductsData } from "./ProductsData";
const Product = () => {
  return (
    <section
      className="py-12 w-[90%] md:w-[80%] lg:w-[85%] mx-auto"
      id="products"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-yellow font-medium tracking-wide text-md md:text-2xl font my-8 text-center md:text-center">
            « OUR PRODUCTS »
          </p>
          {/* <h2 className="text-4xl font-bold text-yellowDark">
            Latest News from the Blog
          </h2> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-content-center justify-center items-center">
          {ProductsData.map((member) => (
            <Link
              to={`/${member.productId}`}
              key={member.productId}
              className=" p-4 bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-lg flex flex-col items-center justify-center cursor-pointer" // Hover effects added here
            >
              <div className="mx-auto">
                {" "}
                <img
                  src={member.productImage}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg w-72 h-84"
                />
              </div>

              <div className="p-6 text-center md:text-left">
                <h3 className="text-center text-2xl font-semibold text-gray-800 mb-2 border-move-animation">
                  {member.productName}
                </h3>
                <p className="text-gray-600">
                  {member.productDescription[0].text.slice(0, 120)} ...
                </p>
                {/* <p className="text-gray-600">{member.details[0]}</p> */}
                <div className="flex items-center justify-start">
                  <a
                    href="https://www.tiktok.com/@fattoperdeillc"
                    target="__blank"
                    className="text-yellow my-4 md:my-6 bg-yellow text-white max-w-fit p-3 rounded-lg border-move-animation transition duration-300 ease-in-out hover:scale-105"
                  >
                    Visit Store
                  </a>
                  <a
                    href={`/${member.productId}`}
                    className="text-yellow my-4 md:my-6 bg-yellow text-white max-w-fit p-3 rounded-lg border-move-animation ml-5 transition duration-300 ease-in-out hover:scale-105"
                  >
                    {" "}
                    View Details
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
