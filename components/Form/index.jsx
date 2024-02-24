"use client";

import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { request } from "@/request";
import { REST } from "@/constants/enpoint";
import Link from "next/link";

import { idContext } from "@/context/IdContext";

import "./FormControl.scss";
export default function Custo_form() {
  const { dispatch } = useContext(idContext);
  const [formSubmit, setFormSubmit] = useState({
    baggage: "",
    brand: "",
    category_id: "",
    description: "",
    doors: "",
    fuel: "",
    gear: "",
    model: "",
    price_arab: "",
    price_euro: "",
    price_use: "",
  });
  const router = useRouter();
  const handleChange = (e) => {
    setFormSubmit({ ...formSubmit, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = async () => {
    formSubmit.baggage = Number(formSubmit.baggage);
    formSubmit.category_id = Number(formSubmit.category_id);
    formSubmit.doors = Number(formSubmit.doors);
    formSubmit.price_arab = Number(formSubmit.price_arab);
    formSubmit.price_euro = Number(formSubmit.price_euro);
    formSubmit.price_use = Number(formSubmit.price_use);

   
    if (Object.values(formSubmit).every((value) => value !== "")) {
      try {
        const res = await request.post(`${REST.CARS}/cars`, formSubmit);
      
        dispatch({ type: "id", data: res?.data?.id });
        router.push("/createImg");
      } catch (err) {
        console.log(err.response.data.msg);
      }
    } else {
      // Display an error message or prevent form submission
      console.log("Please fill in all the form fields.");
    }
  };

  return (
    <div className="form_content">
      <div className="form_control">
        <form onSubmit={handleSubmit}>
          <input
            required
            name="baggage"
            value={formSubmit.baggage}
            onChange={handleChange}
            placeholder="Baggage"
            type="number"
          />

          <input
            required
            name="brand"
            value={formSubmit.brand}
            onChange={handleChange}
            placeholder="Brand"
            type="text"
          />

          <select
            required
            name="category_id"
            value={formSubmit.category_id}
            onChange={handleChange}
            placeholder="category id"
          >
            <option value="1">Popular</option>
            <option value="2">Econom</option>
            <option value="3">Premium</option>
            <option value="4">Luxary</option>
            <option value="5">SV</option>
          </select>
          {/* <input type="number" /> */}

          <input
            required
            name="description"
            value={formSubmit.description}
            onChange={handleChange}
            placeholder="Description"
            type="text"
          />

          <input
            required
            name="doors"
            value={formSubmit.doors}
            onChange={handleChange}
            placeholder="Doors"
            type="number"
          />

          <input
            required
            name="fuel"
            value={formSubmit.fuel}
            onChange={handleChange}
            placeholder="Fuel"
            type="text"
          />

          <input
            required
            name="gear"
            value={formSubmit.gear}
            onChange={handleChange}
            placeholder="Gear"
            type="text"
          />

          <input
            required
            name="model"
            value={formSubmit.model}
            onChange={handleChange}
            placeholder="Model"
            type="text"
          />

          <input
            required
            name="price_arab"
            value={formSubmit.price_arab}
            onChange={handleChange}
            placeholder="Price arab"
            type="number"
          />

          <input
            required
            name="price_euro"
            value={formSubmit.price_euro}
            onChange={handleChange}
            placeholder="Price euro"
            type="number"
          />

          <input
            required
            name="price_use"
            value={formSubmit.price_use}
            onChange={handleChange}
            placeholder="Price use"
            type="number"
          />
         
            <button  type="submit" onClick={handleClick} >Create</button>
        
        </form>
      </div>
    </div>
  );
}
