import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.scss";

// import required modules
import { EffectCoverflow } from "swiper/modules";
import CustomizedRating from "../Rating";
import { Button } from "@mui/material";

export default function CustomSwiper() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
     
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <li style={{ backgroundImage: "url(/images/pop_car.png)" }}>
            <div className="head_card">
              <p>All New Rush</p>

              <CustomizedRating />
            </div>
            <div className="food_card">
              <p>
                $72.00/ <span>day</span>
              </p>
              <Button variant="contained" style={{ background: "#FEC31D" }}>
                Rent Now
              </Button>
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li style={{ backgroundImage: "url(/images/pop_car.png)" }}>
            <div className="head_card">
              <p>All New Rush</p>

              <CustomizedRating />
            </div>
            <div className="food_card">
              <p>
                $72.00/ <span>day</span>
              </p>
              <Button variant="contained" style={{ background: "#FEC31D" }}>
                Rent Now
              </Button>
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li style={{ backgroundImage: "url(/images/pop_car.png)" }}>
            <div className="head_card">
              <p>All New Rush</p>

              <CustomizedRating />
            </div>
            <div className="food_card">
              <p>
                $72.00/ <span>day</span>
              </p>
              <Button variant="contained" style={{ background: "#FEC31D" }}>
                Rent Now
              </Button>
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li style={{ backgroundImage: "url(/images/pop_car.png)" }}>
            <div className="head_card">
              <p>All New Rush</p>

              <CustomizedRating />
            </div>
            <div className="food_card">
              <p>
                $72.00/ <span>day</span>
              </p>
              <Button variant="contained" style={{ background: "#FEC31D" }}>
                Rent Now
              </Button>
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li style={{ backgroundImage: "url(/images/pop_car.png)" }}>
            <div className="head_card">
              <p>All New Rush</p>

              <CustomizedRating />
            </div>
            <div className="food_card">
              <p>
                $72.00/ <span>day</span>
              </p>
              <Button variant="contained" style={{ background: "#FEC31D" }}>
                Rent Now
              </Button>
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li style={{ backgroundImage: "url(/images/pop_car.png)" }}>
            <div className="head_card">
              <p>All New Rush</p>

              <CustomizedRating />
            </div>
            <div className="food_card">
              <p>
                $72.00/ <span>day</span>
              </p>
              <Button variant="contained" style={{ background: "#FEC31D" }}>
                Rent Now
              </Button>
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li style={{ backgroundImage: "url(/images/pop_car.png)" }}>
            <div className="head_card">
              <p>All New Rush</p>

              <CustomizedRating />
            </div>
            <div className="food_card">
              <p>
                $72.00/ <span>day</span>
              </p>
              <Button variant="contained" style={{ background: "#FEC31D" }}>
                Rent Now
              </Button>
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li style={{ backgroundImage: "url(/images/pop_car.png)" }}>
            <div className="head_card">
              <p>All New Rush</p>

              <CustomizedRating />
            </div>
            <div className="food_card">
              <p>
                $72.00/ <span>day</span>
              </p>
              <Button variant="contained" style={{ background: "#FEC31D" }}>
                Rent Now
              </Button>
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li style={{ backgroundImage: "url(/images/pop_car.png)" }}>
            <div className="head_card">
              <p>All New Rush</p>

              <CustomizedRating />
            </div>
            <div className="food_card">
              <p>
                $72.00/ <span>day</span>
              </p>
              <Button variant="contained" style={{ background: "#FEC31D" }}>
                Rent Now
              </Button>
            </div>
          </li>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
