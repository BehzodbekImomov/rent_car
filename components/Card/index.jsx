"use client";
import React from "react";

import "./Card.scss";
import Image from "next/image";
import CarCarousel from "../Sliders/Car_carusel";
export default function Card_Custom() {
  return (
    <div className="order">
      <div className="container_custom">
        <div className="car_content">
          <div className="car_img">
            <CarCarousel />
          </div>
          <div className="car_title">
            <span>4x4 Premium</span>
            <h3>Porsche Cayenne (2022)</h3>
            <p>2,200,000 $/day</p>
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
                <p>Doors:</p> <span>4</span>
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
                <p>Transmission:</p> <span>Автомат</span>
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
                <p>Baggage:</p> <span>1800</span>
              </li>
              {/* <li>
                <div className="box">
                  <Image
                    style={{ borderRadius: "100%" }}
                    src="/images/ice.png"
                    width={30}
                    height={30}
                    alt=""
                  />
                </div>
                <p>Air conditioner:</p> <span>Available</span>
              </li> */}
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
                <p>Fuel:</p> <span>Petrol</span>
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
