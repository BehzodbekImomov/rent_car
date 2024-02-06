"use client";
import React, { useContext, useState } from "react";
import { carContext } from "@/context/CarContext";
import CarCarousel from "../Sliders/Car_carusel";
import Image from "next/image";

import "./Card.scss";
export default function Card_Custom() {
  const { carProducts } = useContext(carContext);
  
  console.log(carProducts[0]);
 
  return (
    <div className="order">
      <div className="container_custom">
        <div className="car_content">
          <div className="car_img"><CarCarousel /></div>
          <div className="car_title">
            <span>4x4 Premium</span>
            <h3>{carProducts[0]?.model}</h3>
            <p>{carProducts[0]?.price_use} $/day</p>
            <ul>
              <li>
                <div className="box">
                  <Image
                    style={{ borderRadius: "100%" }}
                    src="/images/car-door.png"
                    width={30}
                    height={30}
                    alt=""
                  />
                </div>
                <p>Doors:</p> <span>{carProducts[0]?.doors}</span>
              </li>
              <li>
                <div className="box">
                  <Image
                    style={{ borderRadius: "100%" }}
                    src="/images/transmission.png"
                    width={30}
                    height={30}
                    alt=""
                  />
                </div>
                <p>Transmission:</p> <span>{carProducts[0]?.gear}</span>
              </li>
              <li>
                <div className="box">
                  <Image
                    style={{ borderRadius: "100%" }}
                    src="/images/trunk.png"
                    width={30}
                    height={30}
                    alt=""
                  />
                </div>
                <p>Baggage:</p> <span>{carProducts[0]?.baggage}</span>
              </li>

              <li>
                <div className="box">
                  <Image
                    style={{ borderRadius: "100%" }}
                    src="/images/fue.png"
                    width={30}
                    height={30}
                    alt=""
                  />
                </div>
                <p>Fuel:</p> <span>{carProducts[0]?.fuel}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="booking">
          <h3>Booking</h3>
          <h4>Please fill in the details</h4>
          <form>
            <div className="inputs">
              <input type="text" placeholder="Your name " />
              <input type="text" placeholder="Your E-mail " />
              <input type="text" placeholder="Your Phone " />
              <input type="text" placeholder="Your City " />
            </div>
            <button>order</button>
          </form>
        </div>
      </div>
    </div>
  );
}
