"use client";
import React, { useContext, useEffect, useState } from "react";
import { carContext } from "@/context/CarContext";
import CarCarousel from "../Sliders/Car_carusel";
import Image from "next/image";

import { request } from "@/request";
import { REST } from "@/constants/enpoint";
import { Button, CircularProgress } from "@mui/material";

import "./Card.scss";
import { useTranslation } from "react-i18next";

export default function Card_Custom({ id }) {
  const { t } = useTranslation();
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [booking, setBooking] = useState({
    customer_name: "",
    contact_number: "",
    email: "",
    from_destination: "",
  });
  useEffect(() => {
    getDataId();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      booking.customer_name === "" ||
      booking.email === "" ||
      booking.contact_number === "" ||
      booking.from_destination === ""
    ) {
      console.log("Inputlar to'ldirilmagan");
      return;
    }
    handleClick();
  };

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    try {
      setIsLoading(true);

      booking.car_id = Number(id);

      await request.post(`${REST.ORDERS}`, booking);
      setBooking({
        customer_name: "",
        contact_number: "",
        email: "",
        from_destination: "",
      });
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  async function getDataId() {
    try {
      setIsLoading(true);
      const res = await request.get(`${REST.CARS}car/${id}`);
      setPopular(res?.data);

      setIsLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="order">
      <div className="container_custom">
        <div className="car_content">
          <div className="car_img">
            <CarCarousel data={popular.image} loading={isLoading} />
          </div>
          <div className="car_title">
            <span>{popular?.brand}</span>
            <h3>{popular?.model}</h3>
            <p>
              {popular?.price_arab} {t("money")}
            </p>
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
                <p>{t("doors")}</p> <span>{popular?.doors}</span>
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
                <p>{t("transmission")}</p>{" "}
                <span>
                  {popular.gear &&
                    popular.gear.replace("matic transmission", "")}
                </span>
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
                <p>{t("baggage")}</p> <span>{popular?.baggage}</span>
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
                <p>{t("fuel")}</p> <span>{popular?.fuel}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="car_desc">
          <p>{popular?.description}</p>
        </div>
        <div className="booking">
          <h3>{t("booking")}</h3>
          <h4>{t("booking_desc")}</h4>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <input
                required
                onChange={handleChange}
                name="customer_name"
                value={booking.customer_name}
                type="text"
                placeholder={t("your_name")}
              />
              <input
                required
                onChange={handleChange}
                name="email"
                value={booking.email}
                type="email"
                placeholder={t("your_email")}
              />
              <input
                required
                onChange={handleChange}
                name="contact_number"
                value={booking.contact_number}
                type="tel"
                placeholder={t("your_number")}
              />
              <input
                required
                onChange={handleChange}
                name="from_destination"
                value={booking.from_destination}
                type="text"
                placeholder={t("your_sity")}
              />
            </div>
            <Button
              variant="contained"
              loading={isLoading}
              loadingIndicator={
                <CircularProgress color="secondary" size={20} />
              }
              loadingPosition="end"
              // onClick={handleSubmit}
              type="submit"
            >
              {t("order")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
