import "../styles/Home.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="investiment-types-img-container">
        <Link to={`/1`} key="1">
          <div className="investiment-types-img-container-intern-div">
            <img
              src="https://raw.githubusercontent.com/lswebdevelops/gorilla-system/main/src/assets/images/stocks-image.jpg"
              alt="stocks"
            />
            <p>Stocks</p>
          </div>
        </Link>

        <Link to={`/2`} key="2">
          <div className="investiment-types-img-container-intern-div">
            <img
              src="https://raw.githubusercontent.com/lswebdevelops/gorilla-system/main/src/assets/images/reits-image.jpg"
              alt="reits"
            />
            <p>Reits</p>
          </div>
        </Link>
        <Link to={`/3`} key="3">
          <div className="investiment-types-img-container-intern-div">
            <img
              src="https://raw.githubusercontent.com/lswebdevelops/gorilla-system/main/src/assets/images/bonds-image.jpg"
              alt="bonds"
            />
            <p>Bonds</p>
          </div>
        </Link>
        <Link to={`/4`} key="4">
          <div className="investiment-types-img-container-intern-div">
            <img
              src="https://raw.githubusercontent.com/lswebdevelops/gorilla-system/main/src/assets/images/emergency-fund-image.jpg"
              alt="emergency-fund"
            />
            <p>Emergency Fund</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
