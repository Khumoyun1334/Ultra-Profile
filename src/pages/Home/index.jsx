import React from "react";
import QAsos from "../../images/portfolio-img1.jpg";

import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  const data = [
    {
      img: QAsos,
      name: "Akmaljon",
    },
  ];

  const handleNaxt = () => {
    navigate("/about", { state: data });
  };

  return (
    <div>
      <div>
        <button onClick={() => handleNaxt()}>ok</button>
      </div>
    </div>
  );
}

export default Home;
