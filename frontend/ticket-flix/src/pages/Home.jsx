import React from "react";
import Carousol from "../components/Carousol";

const Home = () => {
  return (
    <div className="homeContainer">
      <Carousol />
      <div className="roundBox">
        <h1>Book your first ticket today</h1>
      </div>
    </div>
  );
};

export default Home;
