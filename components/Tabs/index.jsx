"use client";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import Popular_car from "../Popular_car";
import Large_car from "../Large_car";
import Small_car from "../Small_car";
import Exclusive_car from "../Exclusive_car";
import TemporaryDrawer from "../Drawer";

import "./Tabs.scss";
import SVcar from "../SVcar";

export default function Tabs() {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",

            "& .MuiTabs-indicator": {
              backgroundColor: "#FEC31D", // Set the color of the underline
            },
          }}
        >
          <TabList
            centered
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab label="Popular" value="1" />
            <Tab label="Ecomon" value="2" />
            <Tab label="Premium" value="3" />
            <Tab label="Luxury" value="4" />
            <Tab label="SV" value="5" />
          </TabList>
        </Box>

        <TabPanel value="1">
          <Popular_car />
        </TabPanel>
        <TabPanel value="2">
          <Large_car />
        </TabPanel>
        <TabPanel value="3">
          <Small_car />
        </TabPanel>
        <TabPanel value="4">
          <Exclusive_car />
        </TabPanel>
        <TabPanel value="5">
          <SVcar />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
