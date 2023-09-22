import "../styles/Home.css";
import "../assets/data/investments";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [investments, setInvestments] = useState([]);
  useEffect(() => {
    fetch("/src/assets/data/investments.json")
      .then((res) => res.json())
      .then((data) => setInvestments(data.investments));
  }, []);

  const investmentElements = investments.map((investment) => (
    <Link to={`/${investment.id}`} key={investment.id}>
      <div className="investiment-types-img-container-intern-div">
        <img src={`${investment.image_link}`} alt={investment.type} />
        <p>{investment.type}</p>
      </div>
    </Link>
  ));

  return (
    <div>
      <div className="investiment-types-img-container">
        {investmentElements}
      </div>
    </div>
  );
};

export default Home;
