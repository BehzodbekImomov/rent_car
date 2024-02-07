"use client";
import { Button } from "@mui/material";

import React, { Fragment, useContext, useEffect, useState } from "react";
import "./Large_car.scss";
import CustomizedRating from "../Rating";
import CustomSwiper from "../Sliders/CustomSwiper";
import Link from "next/link";
import { request } from "@/request";
import { carContext } from "@/context/CarContext";
import Loading from "@/app/(public)/loading";

export default function Large_car() {

  const { dispatch } = useContext(carContext);
  const [popular, setPopular] = useState([]);
  const [isLoading,setIsLoading]=useState(false)

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setIsLoading(true);
      const res = await request.get("cars/2");
      setPopular(res?.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="card_cars">
    <ul className="popular_car">
      {isLoading ? (
        <Loading />
      ) : (
        popular.map((e) => (
          <li
            key={e.id}
            style={{
              backgroundImage: `url(${e?.image[0]?.body})`,
            }}
          >
            <div className="head_card">
              <p>{e?.brand}</p>
              {console.log()}
              <CustomizedRating />
            </div>
            <div className="food_card">
              <p>
                ${e?.price_use}/ <span>day</span>
              </p>
              <Link href={`order/${e?.id}`}>
                {" "}
                <Button
                  onClick={() =>
                    dispatch({
                      type: "add-to-cart",
                      payload: e?.id,
                      products: popular,
                      // navigate:navigate
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
        ))
      )}
    </ul>
    <CustomSwiper popular={popular} loading={isLoading}/>

    <Button
      type="submit"
      className="btn"
      variant="text"
      style={{ backgroundColor: "var(--white)", color: "" }}
    >
      Show more
    </Button>
  </div>
  );
}
