import React from "react";
import { useLocation } from "react-router";

function About() {
  const { state } = useLocation();

  return (
    <div>
      <div>
        {state?.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default About;
