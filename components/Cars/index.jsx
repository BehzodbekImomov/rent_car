"use client";
import { useEffect } from "react";
import Tab from "../Tabs";
import "./Cars.scss";
import { request } from "@/request";

const Cars = () => {
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const res = await request.get("cars?page=1");
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
    }
  }

  return (
    <section className="cars" id="brands">
      <div className="container_custom">
        <div className="cars_content">
          <h3>Most popular car rental deals</h3>
          <p>
            A high-performing web-based car rental system for any rent-a-car
            company and website
          </p>
        </div>

        <Tab />
      </div>
    </section>
  );
};

export default Cars;
