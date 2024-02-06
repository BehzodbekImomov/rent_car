"use client";
import React, { useContext, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Car_carousel.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { carContext } from "@/context/CarContext";

export default function CarCarousel() {
  const { carProducts } = useContext(carContext);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {carProducts[0]?.image.map((e, index) => (
          <SwiperSlide key={index}>
            <img src={e?.body} />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <img src="/images/Porsche4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Porsche2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Porsche3.png" />
        </SwiperSlide> */}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper1"
      >
         {carProducts[0]?.image.map((e, index) => (
          <SwiperSlide key={index}>
            <img src={e?.body} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
