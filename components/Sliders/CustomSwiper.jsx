import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper/modules";
import CustomizedRating from "../Rating";
import { Button } from "@mui/material";
import Link from "next/link";
import { carContext } from "@/context/CarContext";
import Loading from "@/app/(public)/loading";

import "./styles.scss";
import { REST } from "@/constants/enpoint";

// import required modules

export default function CustomSwiper({ popular, loading }) {
  const { dispatch } = useContext(carContext);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
          // onLoad={true}
        >
          {popular.map((e) => (
            <SwiperSlide key={e.id}>
              <li
                style={{
                  backgroundImage: `url(${REST.IMAGES}/${e?.id})`,
                }}
              >
                <div className="head_card">
                  <p>{e?.brand}</p>
                  {console.log()}
                  <CustomizedRating />
                </div>
                <div className="food_card">
                  <p>
                  AED{e?.price_use}/ <span>day</span>
                  </p>
                  <Link href={`order/${e?.id}`}>
                    {" "}
                    <Button
                      onClick={() =>
                        dispatch({
                          type: "add-to-cart",
                          payload: e?.id,
                          products: popular,
                        })
                      }
                      type="submit"
                      variant="contained"
                      style={{ background: "#FEC31D" }}
                    >
                      Rent Now
                    </Button>
                  </Link>
                </div>
              </li>
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>
  <li style={{ backgroundImage: "url(/images/pop_car.png)" }}>
    <div className="head_card">
      <p>All New Rush</p>

      <CustomizedRating />
    </div>
    <div className="food_card">
      <p>
        $72.00/ <span>day</span>
      </p>
      <Link href="order">
        {" "}
        <Button
          type="submit"
          variant="contained"
          style={{ background: "#FEC31D" }}
        >
          Rent Now
        </Button>
      </Link>
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
      <Link href="order">
        {" "}
        <Button
          type="submit"
          variant="contained"
          style={{ background: "#FEC31D" }}
        >
          Rent Now
        </Button>
      </Link>
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
      <Link href="order">
        {" "}
        <Button
          type="submit"
          variant="contained"
          style={{ background: "#FEC31D" }}
        >
          Rent Now
        </Button>
      </Link>
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
      <Link href="order">
        {" "}
        <Button
          type="submit"
          variant="contained"
          style={{ background: "#FEC31D" }}
        >
          Rent Now
        </Button>
      </Link>
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
      <Link href="order">
        {" "}
        <Button
          type="submit"
          variant="contained"
          style={{ background: "#FEC31D" }}
        >
          Rent Now
        </Button>
      </Link>
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
      <Link href="order">
        {" "}
        <Button
          type="submit"
          variant="contained"
          style={{ background: "#FEC31D" }}
        >
          Rent Now
        </Button>
      </Link>
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
      <Link href="order">
        {" "}
        <Button
          type="submit"
          variant="contained"
          style={{ background: "#FEC31D" }}
        >
          Rent Now
        </Button>
      </Link>
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
      <Link href="order">
        {" "}
        <Button
          type="submit"
          variant="contained"
          style={{ background: "#FEC31D" }}
        >
          Rent Now
        </Button>
      </Link>
    </div>
  </li>
</SwiperSlide> */}
        </Swiper>
      )}
    </>
  );
}
