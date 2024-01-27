import Image from "next/image";
import "./About_work.scss";

export default function About_work() {
  return (
    <section className="about_work" id="rental">
      <div className="container_custom">
        <div className="work_content">
          <h3>How it work</h3>
          <p className="paragraf">
            A high-performing web-based car rental system for any rent-a-car
            company and website
          </p>
        </div>

        <ul className="work_boxs">
          <li>
            <Image
              src="/svg/location.svg"
              alt="logo"
              width={106}
              height={106}
            />
            <h4>Choose Location</h4>
            <p>
              Aliquam erat volutpat. Integer malesuada turpis id fringilla
              suscipit. Maecenas ultrices, orci vitae convallis mattis.
            </p>
          </li>
          <li>
            <div className="box_img">

            <Image  src="/images/data.png" alt="" width={45} height={45} />
            </div>

            <h4>Choose Location</h4>
            <p>
              Aliquam erat volutpat. Integer malesuada turpis id fringilla
              suscipit. Maecenas ultrices, orci vitae convallis mattis.
            </p>
          </li>
          <li>
            <div className="box_img">

            <Image style={{color:"#FEC31D",opacity:"1"}} src="/images/car.png" alt="" width={45} height={45} />
            </div>
            <h4>Choose Location</h4>
            <p>
              Aliquam erat volutpat. Integer malesuada turpis id fringilla
              suscipit. Maecenas ultrices, orci vitae convallis mattis.
            </p>
          </li>
        </ul>
        
        <div className="vector1"><Image src='/svg/vector1.svg' width={460} height={83} alt="vector"/></div>
        <div className="vector2"><Image src='/svg/vector2.svg' width={460} height={83} alt="vector"/></div>
      </div>
    </section>
  );
}
