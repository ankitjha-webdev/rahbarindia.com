import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";

// import required modules
import { Pagination, Navigation,Autoplay } from "swiper";
import TrekComp from "./TrekComp";

const CardSwipe = () => {
  return (
    <>
      <Swiper
      style={{
        "--swiper-navigation-color": "rgb(67 160 71)",
        "--swiper-pagination-color": "rgb(67 160 71)",
      }}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation={true}
       
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        // modules={[Pagination]}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <TrekComp/> </SwiperSlide>
        <SwiperSlide><TrekComp/></SwiperSlide>
        <SwiperSlide><TrekComp/></SwiperSlide>
        <SwiperSlide><TrekComp/></SwiperSlide>
        <SwiperSlide><TrekComp/></SwiperSlide>
        <SwiperSlide><TrekComp/></SwiperSlide>
        <SwiperSlide><TrekComp/></SwiperSlide>
        <SwiperSlide><TrekComp/></SwiperSlide>
        <SwiperSlide><TrekComp/></SwiperSlide>
      </Swiper>
    </>
  );
}
export default CardSwipe;