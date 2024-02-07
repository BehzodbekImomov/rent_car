"use client";
import React, { useContext, useEffect, useState } from "react";
import { carContext } from "@/context/CarContext";
import CarCarousel from "../Sliders/Car_carusel";
import Image from "next/image";

import "./Card.scss";
import { request } from "@/request";
export default function Card_Custom({ id }) {
  // const { carProducts } = useContext(carContext);
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getDataId();
  }, []);

  async function getDataId() {
    try {
      setIsLoading(true);
      const res = await request.get(`car/${id}`);
      setPopular(res?.data);
      // console.log(res);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  console.log(popular);
  return (
    <div className="order">
      <div className="container_custom">
        <div className="car_content">
          <div className="car_img">
            <CarCarousel data={popular?.image} loading={isLoading} />
          </div>
          <div className="car_title">
            <span>{popular?.category?.name}</span>
            <h3>{popular?.model}</h3>
            <p>{popular?.price_use} $/day</p>
            <ul>
              <li>
                <div className="box">
                  <Image
                    style={{ borderRadius: "100%" }}
                    src="/svg/car-door.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                </div>
                <p>Doors:</p> <span>{popular?.doors}</span>
              </li>
              <li>
                <div className="box">
                  <Image
                    style={{ borderRadius: "100%" }}
                    src="/svg/transmission.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                </div>
                <p>Transmission:</p> <span>{popular?.gear}</span>
              </li>
              <li>
                <div className="box">
                  <Image
                    style={{ borderRadius: "100%" }}
                    src="/svg/trunk.svg"
                    width={45}
                    height={45}
                    alt=""
                  />
                </div>
                <p>Baggage:</p> <span>{popular?.baggage}</span>
              </li>

              <li>
                <div className="box">
                  <Image
                    style={{ borderRadius: "100%" }}
                    src="/svg/fuel.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                </div>
                <p>Fuel:</p> <span>{popular?.fuel}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="car_desc">
          <p>{popular?.description}</p>
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
