"use client";
import { Button, CircularProgress } from "@mui/material";

import React, { Fragment, useContext, useEffect, useState } from "react";
import "./Exclusive_car.scss";
import CustomizedRating from "../Rating";
import CustomSwiper from "../Sliders/CustomSwiper";
import Link from "next/link";
import { request } from "@/request";
import { carContext } from "@/context/CarContext";

import { REST } from "@/constants/enpoint";
import { toast } from "react-toastify";
import Loading from "@/app/[locale]/(public)/loading";
import { useTranslation } from "react-i18next";

export default function Exclusive_car() {
  const { dispatch } = useContext(carContext);
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { t } = useTranslation();
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setIsLoading(true);
      const res = await request.get(`${REST.CARS}cars/4`);
      setPopular(res?.data);
      setIsLoading(false);
    } catch (err) {
      toast.error(err?.message);
    } finally {
      setIsLoading(false);
    }
  }

const handleButton=()=>{
  setIsLoading(true)
   dispatch({
     type: "add-to-cart",
     payload: e?.id,
     products: popular,
     // navigate:navigate
   });
}

  const handlePage = async () => {
    setPage(1);
    setIsLoading(true);
    try {
      const res = await request.get(`${REST.CARS}cars/4?page=${page + 1}`);
      setPopular(res?.data);
      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      // toast.error(err?.message);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="card_cars">
      <ul className="popular_car">
        {popular.map((e) => (
          <li
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
                  Rent Now
                </Button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <CustomSwiper popular={popular} loading={isLoading} />
      <Button
        loading={isLoading}
        loadingIndicator={<CircularProgress color="secondary" size={20} />}
        loadingPosition="end"
        type="submit"
        className="btn"
        variant="text"
        onClick={handlePage}
        style={{ backgroundColor: "var(--white)", color: "" }}
      >
        {t("car_button")}
      </Button>
    </div>
  );
}
