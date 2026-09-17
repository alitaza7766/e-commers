import React from "react";
import { Link } from "react-router-dom";
import frameStats from "../pictures/Frame 57.png";
import mainBanner from "../pictures/Rectangle 2 (1).png";
import vectorOne from "../pictures/Vector (1).png";
import vectorTwo from "../pictures/Vector 2.png";
import "../Hero-layout/Hero-modules.css";

function Hero() {
  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="ch1 banner">
            <div className="ch1 banner1">
              FIND CLOTHES <br />
              THAT MATCHES <br />
              YOUR STYLE
            </div>
            <div className="ch1 banner01">
              <p>
                Browse through our diverse range of meticulously crafted
                garments, designed <br />
                to bring out your individuality and cater to your sense of style
              </p>
            </div>
            <div>
              <Link className="bannerbutton" to="/products">
                Shop Now
              </Link>
            </div>

            <img
              className="numberimg"
              src={frameStats}
              width="600"
              alt="Customer statistics"
            />
          </div>
          <div className="ch1 banner2">
            <img
              className="mainBanner"
              src={mainBanner}
              alt="Fashion collection"
            />
            <img className="vector1" src={vectorOne} alt="" />
            <img className="vector2" src={vectorTwo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
