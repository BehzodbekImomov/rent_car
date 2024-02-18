"use client"
import NativeSelectGroup from "../Inputs/Select/NativeSelect";
import { Button } from "@mui/material";
import DateTime from "../Inputs/Select/DateTime";
import { useNavigate } from "react-router-dom";

import "./Locations.scss";
import Link from "next/link";

export default function Locations() {

  return (
    <section className="loc">
      <div className="container_custom">
        <div className="location">
          <ul className="location_content">
            <li className="box pick">
              <div className="pick_up">
                <div>
                  {/* <Image scr="/svg/sircle.svg" width={8} height={8} /> */}
                  <div className="img"></div>
                </div>
                <h4>Pick - Up</h4>
              </div>
              <ul>
                <li>
                  <h5>Locations</h5>
                  <NativeSelectGroup name="Select your city" />
                </li>
                <div className="line"></div>
                <li>
                  <h5>Date time</h5>
                  <DateTime  slotProps={{ textField: { helperText: 'Please fill this field' } }} name="Select your date" />
                </li>
              
               
              </ul>
            </li>
            <li className="box drop">
              <div className="drop_off">
                <div>
                  {/* <Image scr="/svg/sircle.svg" width={8} height={8} /> */}
                  <div className="img"></div>
                </div>
                <h4>Drop - Off</h4>
              </div>
              <ul>
                <li>
                  <h5>Locations</h5>
                  <NativeSelectGroup name="Select your city" />
                </li>
                <div className="line"></div>
                <li>
                  <h5>Date time</h5>
                  <DateTime name="Select your date" />
                </li>
                
               
                <div className="btn">
                  <Link href="#brands">
                  <Button
                    variant="contained"
                    style={{ background: "#FEC31D" }}
                    className="search_btn"
                   
                  >
                    Search
                  </Button>
                  </Link>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
