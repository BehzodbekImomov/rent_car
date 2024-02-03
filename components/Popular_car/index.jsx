"use client";
import { Button } from "@mui/material";


import React, { Fragment, useState } from "react";
import "./Popular_car.scss";
import CustomizedRating from "../Rating";
export default function Popular_car() {
  // const [isRed, setIsRed] = useState(false);
  // const like = (id) => {
  //   setIsRed(!isRed);
  // };
  return (
    <div className="card_cars">
      <ul className="popular_car">
        <li style={{ backgroundImage: "url(/images/pop_car.png)" }}>
          <div className="head_card">
            <p>All New Rush</p>
           
          <CustomizedRating/>
          </div>
          <div className="food_card">
            <p>
              $72.00/ <span>day</span>
            </p>
            <Button variant="contained" style={{ background: "#FEC31D" }}>
              Rent Now
            </Button>
          </div>
        </li>
        <li style={{ backgroundImage: "url(/images/pop_car.png)" }}>
          <div className="head_card">
            <p>All New Rush</p>
           
          <CustomizedRating/>
          </div>
          <div className="food_card">
            <p>
              $72.00/ <span>day</span>
            </p>
            <Button variant="contained" style={{ background: "#FEC31D" }}>
              Rent Now
            </Button>
          </div>
        </li>
        <li style={{ backgroundImage: "url(/images/pop_car.png)" }}>
          <div className="head_card">
            <p>All New Rush</p>
           
          <CustomizedRating/>
          </div>
          <div className="food_card">
            <p>
              $72.00/ <span>day</span>
            </p>
            <Button variant="contained" style={{ background: "#FEC31D" }}>
              Rent Now
            </Button>
          </div>
        </li>
        <li style={{ backgroundImage: "url(/images/pop_car.png)", }}>
          <div className="head_card">
            <p>All New Rush</p>
           
          <CustomizedRating/>
          </div>
          <div className="food_card">
            <p>
              $72.00/ <span>day</span>
            </p>
            <Button variant="contained" style={{ background: "#FEC31D" }}>
              Rent Now
            </Button>
          </div>
        </li>
        <li style={{ backgroundImage: "url(/images/pop_car.png)" }}>
          <div className="head_card">
            <p>All New Rush</p>
            <CustomizedRating/>
          </div>
          <div className="food_card">
            <p>
              $72.00/ <span>day</span>
            </p>
            <Button variant="contained" style={{ background: "#FEC31D" }}>
              Rent Now
            </Button>
          </div>
        </li>
        <li style={{ backgroundImage: "url(/images/pop_car.png)" }}>
          <div className="head_card">
            <p>All New Rush</p>
            <CustomizedRating/>
          </div>
          <div className="food_card">
            <p>
              $72.00/ <span>day</span>
            </p>
            <Button variant="contained" style={{ background: "#FEC31D" }}>
              Rent Now
            </Button>
          </div>
        </li>
        <li style={{ backgroundImage: "url(/images/pop_car.png)" }}>
          <div className="head_card">
            <p>All New Rush</p>
            <CustomizedRating/>
          </div>
          <div className="food_card">
            <p>
              $72.00/ <span>day</span>
            </p>
            <Button variant="contained" style={{ background: "#FEC31D" }}>
              Rent Now
            </Button>
          </div>
        </li>
        <li style={{ backgroundImage: "url(/images/pop_car.png)" }}>
          <div className="head_card">
            <p>All New Rush</p>
            <CustomizedRating/>
          </div>
          <div className="food_card">
            <p>
              $72.00/ <span>day</span>
            </p>
            <Button variant="contained" style={{ background: "#FEC31D" }}>
              Rent Now
            </Button>
          </div>
        </li>
      </ul>
      <Button
        className="btn"
        variant="text"
        style={{ backgroundColor: "var(--white)", color: "" }}
      >
        Show more car
      </Button>
    </div>
  );
}
