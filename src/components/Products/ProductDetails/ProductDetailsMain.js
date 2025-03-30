import React, { useState, useEffect } from "react";
import Header from "../../UI/Header/Header";
import ProductDetails from "./ProductDetails";
import Footer from "../../UI/Footer/Footer";
import { useParams } from "react-router-dom";
import { ProductsData } from "../ProductsData";
export const BlogDetails = () => {
  window.scrollTo(0, 0);
  const { id } = useParams(); // Get the product ID from the URL
  const [Product, setProduct] = useState({});

  useEffect(() => {
    const filteredProduct = ProductsData.find((item) => item.productId === id);
    setProduct(filteredProduct);
  }, [id]);
  return (
    <div>
      <Header text={`${Product.productName}`} />
      <ProductDetails filteredProductData={Product} />
      <div className="w-full bg-yellow">
        <Footer />
      </div>
    </div>
  );
};
export default BlogDetails;
