"use client";
import React, { useEffect, useState } from "react";
import About_work from "@/components/About_work";

import Cars from "@/components/Cars";
import Hero from "@/components/Hero";
import Informations from "@/components/Information";
import Locations from "@/components/Locations";

const Home = () => {
  return (
    <main>
      <Hero />
      <Locations />
      <About_work />
      <Cars />
      <Informations />
      {/* <Advantage /> */}
    </main>
  );
};

export default Home;
