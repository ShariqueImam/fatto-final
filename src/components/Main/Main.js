import React, { useEffect, useState } from "react";
import Home from "./Home";
import Footer from "../UI/Footer/Footer";
import Mission from "./Mission";
import Animator from "../UI/Animator";
import Product from "../Products/Product";
import About from "./About";
import client from "../../client";
const Main = () => {
  // const [Data, setData] = useState([]);
  // useEffect(() => {
  //   const getProduct = async () => {
  //     const orderData = await client.fetch(`*[_type=='blog']`);
  //     if (orderData && orderData.length > 0) {
  //       setData(orderData);
  //     }
  //   };
  //   getProduct();
  // }, []);
  return (
    <Animator>
      <div className="font">
        <Home />
        <About />
        <Mission />
        <Product />
        <section className="bg-yellow">
          <Footer />
        </section>
      </div>
    </Animator>
  );
};

export default Main;
// export async function getStaticProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
