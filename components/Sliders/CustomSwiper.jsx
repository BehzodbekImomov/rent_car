'use client'

import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper/modules";
import CustomizedRating from "../Rating";
import { Button, CircularProgress } from "@mui/material";
import Link from "next/link";
import { carContext } from "@/context/CarContext";
import Loading from "@/app/[locale]/(public)/loading";
import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./styles.scss";
import { Carousel } from "react-responsive-carousel";

// import required modules

export default function CustomSwiper({ popular, loading }) {
  const { dispatch } = useContext(carContext);
  const { t } = useTranslation();
const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   const swiper = new Swiper("mySwiper", {});
  //   swiper.update();
  // }, []);

  const handleButton=()=>{
    setIsLoading(true)
     dispatch({
       type: "add-to-cart",
       payload: e?.id,
       products: popular,
     });
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          dynamicHeight={true}
          showIndicators={false}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          {popular.map((e) => (
            <li
              className="li_carousel"
              key={e.id}
              style={{
                backgroundImage: `url(https://backend.intechs.uz/car/v1/image/${e?.image[0]?.id})`,
              }}
            >
              <div className="head_card">
                <p>{e?.brand}</p>

                <CustomizedRating />
              </div>
              <div className="food_card">
                <p>
                  AED{e?.price_arab}/ <span>day</span>
                </p>
                <Link href={`order/${e?.id}`}>
                  {" "}
                  <Button
                    loading={isLoading}
                    loadingIndicator={
                      <CircularProgress color="secondary" size={20} />
                    }
                    loadingPosition="end"
                    onClick={handleButton}
                    type="submit"
                    variant="contained"
                    style={{ background: "#FEC31D" }}
                  >
                    {t("car_button")}
                  </Button>
                </Link>
              </div>
            </li>
          ))}
        </Carousel>
      )}
    </>
  );
}
