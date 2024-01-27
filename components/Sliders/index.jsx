"use client";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiger.scss";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

export default function CarouselCustom() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '"><div className="circle"></div></span>'
      );
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{ width: "400px", height: "230px" }}>
          <div className="carousel_box">
            <div className="card_carousel">
              <div className="card">
                <div className="box_circle"></div>
                <div className="box_title">
                  <h4>Viezh Robert</h4>
                  <span>Warsaw, Poland</span>
                </div>
              </div>
              <p>4.5</p>
            </div>
            <p className="desc">
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px", height: "230px" }}>
          <div className="carousel_box">
            <div className="card_carousel">
              <div className="card">
                <div className="box_circle"></div>
                <div className="box_title">
                  <h4>Viezh Robert</h4>
                  <span>Warsaw, Poland</span>
                </div>
              </div>
              <p>4.5</p>
            </div>
            <p className="desc">
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px", height: "230px" }}>
          <div className="carousel_box">
            <div className="card_carousel">
              <div className="card">
                <div className="box_circle"></div>
                <div className="box_title">
                  <h4>Viezh Robert</h4>
                  <span>Warsaw, Poland</span>
                </div>
              </div>
              <p>4.5</p>
            </div>
            <p className="desc">
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px", height: "230px" }}>
          <div className="carousel_box">
            <div className="card_carousel">
              <div className="card">
                <div className="box_circle"></div>
                <div className="box_title">
                  <h4>Viezh Robert</h4>
                  <span>Warsaw, Poland</span>
                </div>
              </div>
              <p>4.5</p>
            </div>
            <p className="desc">
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px", height: "230px" }}>
          <div className="carousel_box">
            <div className="card_carousel">
              <div className="card">
                <div className="box_circle"></div>
                <div className="box_title">
                  <h4>Viezh Robert</h4>
                  <span>Warsaw, Poland</span>
                </div>
              </div>
              <p>4.5</p>
            </div>
            <p className="desc">
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px", height: "230px" }}>
          <div className="carousel_box">
            <div className="card_carousel">
              <div className="card">
                <div className="box_circle"></div>
                <div className="box_title">
                  <h4>Viezh Robert</h4>
                  <span>Warsaw, Poland</span>
                </div>
              </div>
              <p>4.5</p>
            </div>
            <p className="desc">
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
