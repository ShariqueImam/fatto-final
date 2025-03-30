import React from "react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleReview from "./SingleReview";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import useWindowSize from "../../../hooks/useWindowSize";
import { CustomerFeedback } from "../../Products/ProductsData";
const Gallery = () => {
  const style = {
    wrapper: "mb-12 w-[90%] md:w-[100%] mx-auto",
    para: " text-2xl md:text-2xl text-center mx-auto",
  };
  const width = useWindowSize().width;
  return (
    <div className={style.wrapper}>
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={100}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        className="w-full"
        autoplay={true}
      >
        <SwiperSlide className="flex items-center justify-center py-12">
          <SingleReview
            name={CustomerFeedback[0].feedbackAuthor}
            message={CustomerFeedback[0].feedbackText}
          />
          <SingleReview
            name={CustomerFeedback[1].feedbackAuthor}
            message={CustomerFeedback[1].feedbackText}
          />
          <SingleReview
            name={CustomerFeedback[2].feedbackAuthor}
            message={CustomerFeedback[2].feedbackText}
          />
          <SingleReview
            name={CustomerFeedback[3].feedbackAuthor}
            message={CustomerFeedback[3].feedbackText}
          />
          <SingleReview
            name={CustomerFeedback[4].feedbackAuthor}
            message={CustomerFeedback[4].feedbackText}
          />
          <SingleReview
            name={CustomerFeedback[5].feedbackAuthor}
            message={CustomerFeedback[5].feedbackText}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Gallery;
