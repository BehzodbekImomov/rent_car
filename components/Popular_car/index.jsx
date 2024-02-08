"use client";

import { useContext, useEffect, useState } from "react";
import CustomizedRating from "../Rating";
import CustomSwiper from "../Sliders/CustomSwiper";
import Link from "next/link";
import { request } from "@/request";
import { carContext } from "@/context/CarContext";
import { Button } from "@mui/material";

import "./Popular_car.scss";
import { useParams } from "next/navigation";
import { useNavigate } from "react-router-dom";
import Loading from "@/app/(public)/loading";
import { REST } from "@/constants/enpoint";

export default function Popular_car() {
  const { dispatch } = useContext(carContext);
  const [popular, setPopular] = useState([]);
  const [data,setData]=useState([])
  const [isLoading, setIsLoading] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  // async function getData() {
  //   try {
  //     setIsLoading(true);
  //     const res = await request.get("cars/1");
  //     setPopular(res?.data);
  //     setIsLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }
  async function getData() {
    try {
      setIsLoading(true);
      const res = await request.get(`${REST.CARS}cars/1`);
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
                  onLoad={isLoading}
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
