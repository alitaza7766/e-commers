import "./dress-style-modules.css";
import casualImage from "../pictures/Frame 61.png";
import formalImage from "../pictures/Frame 62.png";
import partyImage from "../pictures/Frame 64.png";
import gymImage from "../pictures/Frame 63.png";

function DressStyle() {
  return (
    <div>
      <div className="middlerow2ndmain">
        <div className="middlerow2nd">
          <div className="middlerow2ndbanner">BROWSE BY DRESS STYLE</div>
          <div className="middlerow2nd3">
            <div className="middle2ndtopleft">
              <img src={casualImage} alt="Casual dress style" />
            </div>
            <div className="middle2ndtopright">
              <img src={formalImage} alt="Formal dress style" />
            </div>
            <div className="middle2ndbottomleft">
              <img src={partyImage} alt="Party dress style" />
            </div>
            <div className="middle2ndbottomright">
              <img src={gymImage} alt="Gym dress style" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DressStyle;
