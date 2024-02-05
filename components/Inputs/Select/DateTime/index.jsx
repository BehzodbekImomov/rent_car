"use client";

import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";

import "./Date.scss";

export default function DateTime() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
        <DateTimePicker
          sx={{ width: "200px" }}
          label="With Time Clock"
          slotProps={{
            textField: { size: "small" },
            
          }}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        />
        {/* <DateTimePicker
          label="Without view renderers"
          viewRenderers={{
            hours: null,
            minutes: null,
            seconds: null,
          }}
        /> */}
      </DemoContainer>
    </LocalizationProvider>
  );
}
