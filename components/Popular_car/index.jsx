"use client";

import { useContext, useEffect, useState } from "react";
import CustomizedRating from "../Rating";
import CustomSwiper from "../Sliders/CustomSwiper";
import Link from "next/link";
import { request } from "@/request";
import { carContext } from "@/context/CarContext";
import { Button, CircularProgress } from "@mui/material";

import "./Popular_car.scss";

import Loading from "@/app/[locale]/(public)/loading";
import { REST } from "@/constants/enpoint";

import { LoadingButton } from "@mui/lab";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Popular_car() {
  const { dispatch } = useContext(carContext);
  const [popular, setPopular] = useState([]);

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setIsLoading(true);
      
      const res = await request.get(`${REST.CARS}cars/1?page=${page}`);
      setPopular(res?.data);
      setIsLoading(false);
    } catch (err) {
      // toast.error(err?.message);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  const handleButton =()=>{
  setIsLoading(true)
     dispatch({
       type: "add-to-cart",
       payload: e?.image[0]?.id,
       products: popular,
     });
     
  }

  const handlePage = async () => {
    setPage(1);
    setIsLoading(true);
    try {
      const res = await request.get(`${REST.CARS}cars/1?page=${page + 1}`);
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
        { (
          popular.map((e) => (
            <li
              key={e.id}
              style={
                {
                  backgroundImage: `url(https://backend.intechs.uz/car/v1/image/${e?.image[0]?.id})`,
                }
              }
            >
              {/* <div className="bg_img" style={{objectFit:"cover"}}>
                <Image
                  src={`https://backend.intechs.uz/car/v1/image/${e?.image[0]?.id}`}
                  width={300}
                  height={400}
                  alt="car"
                />
              </div> */}
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
                  <LoadingButton
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
                    Rent now
                  </LoadingButton>
                </Link>
              </div>
            </li>
          ))
        )}
      </ul>
      <CustomSwiper popular={popular} loading={isLoading} />

      <Button
        // loading={isLoading}
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
