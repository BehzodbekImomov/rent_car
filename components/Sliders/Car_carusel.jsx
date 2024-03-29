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
import Loading from "@/app/[locale]/(public)/loading";

export default function CarCarousel({ data, loading }) {
  // const { carProducts } = useContext(carContext);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  if (!data) {
    return <Loading />; // yoki kerakli UI-ni ko'rsatishingiz mumkin, masalan, yuklanmoqda bo'lgan spinner, xato xabari yoki boshqa maqbul UI.
  }
  console.log(data);
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
        {loading ? (
          <Loading />
        ) : (
          data.map((e) => (
            <SwiperSlide style={{ objectFit: "cover" }} key={e?.id}>
              <figure style={{ objectFit: "cover", height: "100%" }}>
                <img
                  src={`https://backend.intechs.uz/car/v1/image/${e?.id}`}
                  alt="img"
                />
              </figure>
            </SwiperSlide>
          ))
        )}
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
        {loading ? (
          <Loading />
        ) : (
          data.map((e) => (
            <SwiperSlide style={{ objectFit: "cover" }} key={e?.id}>
              <figure style={{ objectFit: "cover", height: "100%" }}>
                <img
                  src={`https://backend.intechs.uz/car/v1/image/${e?.id}`}
                  alt="img"
                />
              </figure>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
}
