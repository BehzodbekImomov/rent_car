import Link from "next/link";
import Image from "next/image";

import { Button } from "@nextui-org/react";
import "./Navigate.scss";

const Navigate = () => {
  return (
    <nav>
      <div className="container_custom navigations">
        <Link className="logo" href="/">
          <Image src="/images/logo.png" height={44} width={98} alt=""/>
        </Link>
        <ul className="menu">
          <li>
            {" "}
            <Link className="anchor" href="/">Home</Link>
          </li>
          <li>
            <Link className="anchor" href="/">Rental Detals</Link>
          </li>
          <li>
            <Link className="anchor" href="/">Why Choose Us</Link>
          </li>
          <li>
            <Link className="anchor" href="/">Testimonial</Link>
          </li>
          <li>
            {" "}
            <Link className="anchor" href="/">
              Brands{" "}
           <Image src='/svg/vector.svg' width={15} height={6} alt=""/>
            </Link>
          </li>
          <li className="registr">
            <Link className="anchor" href="/">
              {" "}
              <div className="line"></div>
              Register
            </Link>
          </li>
          <li><Button type="submit">Log In</Button></li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navigate;
