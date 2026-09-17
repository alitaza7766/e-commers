import React from "react";
import one from "../pictures/Group.png";
import two from "../pictures/zara-logo-1 1.png";
import three from "../pictures/gucci-logo-1 1.png";
import four from "../pictures/prada-logo-1 1.png";
import five from "../pictures/Group (1).png";
import "./Brand-logo-modules.css";

function Brand() {
  return (
    <div className="brand-section">
      <div className="brandframe">
        <div className="brandch">
          <img src={one} height="30" alt="Brand logo" />
        </div>
        <div className="brandch">
          <img src={two} height="30" alt="Zara logo" />
        </div>

        <div className="brandch">
          <img src={three} height="30" alt="Gucci logo" />
        </div>
        <div className="brandch">
          <img src={four} height="30" alt="Prada logo" />
        </div>
        <div className="brandch">
          <img src={five} height="30" alt="Brand logo" />
        </div>
      </div>
    </div>
  );
}

export default Brand;
