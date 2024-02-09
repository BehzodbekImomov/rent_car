"use client";
import { useEffect } from "react";
import Tab from "../Tabs";
import "./Cars.scss";
import { request } from "@/request";

const Cars = () => {
 

  return (
    <section className="cars" id="brands">
      <div className="container_custom">
        <div className="cars_content">
          <h3>Most popular car rental deals</h3>
          <p>
          A high-performing car rental system and website in AE
          </p>
        </div>

        <Tab />
      </div>
    </section>
  );
};

export default Cars;
