import Tab from "../Tabs";
import "./Cars.scss";

const Cars = () => {
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
        <Tab/>
      </div>
    </section>
  );
};

export default Cars;
