"use client";

import { useContext, useEffect, useState } from "react";
import CustomizedRating from "../Rating";
import CustomSwiper from "../Sliders/CustomSwiper";
import Link from "next/link";
import { request } from "@/request";
import { carContext } from "@/context/CarContext";
import { Button } from "@mui/material";

import "./Popular_car.scss";

export default function Popular_car() {
  const { dispatch } = useContext(carContext);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const res = await request.get("cars/1");
      setPopular(res?.data);
    } catch (err) {
      console.log(err);
    } finally {
    }
  }

 
  return (
    <div className="card_cars">
      <ul className="popular_car">
        {popular.map((e) => (
          <li
            key={e.id}
            style={{
              backgroundImage: `url(${e?.image[0]?.body})`,
            }}
          >
            <div className="head_card">
              <p>All New Rush</p>
              {console.log()}
              <CustomizedRating />
            </div>
            <div className="food_card">
              <p>
                ${e?.price_use}/ <span>day</span>
              </p>
              <Link href="order">
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
        ))}
      </ul>
      <CustomSwiper popular={popular} />

      <Button
        type="submit"
        className="btn"
        variant="text"
        style={{ backgroundColor: "var(--white)", color: "" }}
      >
        Show more car
      </Button>
    </div>
  );
}
