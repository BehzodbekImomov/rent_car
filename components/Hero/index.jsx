import { Button } from "@nextui-org/react";
import "./Hero.scss";
import { Stack } from "@mui/material";

export default function Hero() {
  return (
    <section className="hero">
      <div className="bg_content">
        <div className="container_custom ">
          <div className="hero_title">
            <h2>Fast And Easy Way To Rent A Car</h2>
            <p>
              Our Car Rental online booking system designed to meet the specific
              needs of car rental business owners. This easy-to-use car rental
              software will let you manage.
            </p>
          </div>
          <div className="hero_buttons">
            <Stack spacing={2} direction="row">
              <Button className="button_yellow">Booking Now</Button>
              <Button className="button_text" variant="text">See all cars</Button>
            </Stack>
          </div>
        </div>
      </div>
    </section>
  );
}
