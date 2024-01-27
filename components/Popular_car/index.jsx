import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";
import React, { Fragment } from "react";
import "./Popular_car.scss";
export default function Popular_car() {
  return (
    <div className="card_cars">
      <ul className="popular_car">
        <li style={{ backgroundImage: "url(/images/pop_car.png)" }}>
          <div className="head_card">
            <p>All New Rush</p>
            {/* <Image src={FavoriteBorderIcon} width alt=""={24} height={24} /> */}
            <FavoriteBorderIcon style={{ color: "red" }} />
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
            <Image src="/svg/like.svg" alt="" width={24} height={24} />
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
            <Image src="/svg/like.svg" alt="" width={24} height={24} />
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
            <Image src="/svg/like.svg" alt="" width={24} height={24} />
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
            <Image src="/svg/like.svg" alt="" width={24} height={24} />
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
