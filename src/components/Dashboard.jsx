import "./Dashboard.scss";
import Hero from './Hero'
import Card from "./Card";
import Barchart from "./Barchart";
import fire from "../assets/icons/fire.svg";
import chicken from "../assets/icons/chicken.svg";
import apple from "../assets/icons/apple.svg";
import burger from "../assets/icons/burger.svg";
import { useState, useEffect } from "react";

function Dashboard() {

  // const [calorieCount, setFirstName] = useState()
  // const [proteinCount, setProteinCount] = useState()
  // const [carboCount, setCarboCount] = useState()
  // const [lipidCount, setLipidCount] = useState()
  
  // useEffect(() => {
  //   const response
  // })

  const calorieCount = 1930;
  const proteinCount = 1930;
  const carboCount = 1930;
  const lipidCount = 1930;



  return (
    <div className="dash">
      <div className="dash--hero">
        <Hero />
      </div>
      <div className="dash--bar-chart">
        <Barchart />
      </div>
      <div className="dash--line-chart">line chart</div>
      <div className="dash--radar-chart">radar chart</div>
      <div className="dash--radial-chart">radial chart</div>
      <div className="dash--cards">
        <Card
          value={calorieCount}
          unit="kCal"
          category="Calories"
          iconPath={fire}
          bgColor="#FF0000"
        />
        <Card
          value={proteinCount}
          unit="g"
          category="Proteines"
          iconPath={chicken}
          bgColor="#4AB8FF"
        />
        <Card
          value={carboCount}
          unit="g"
          category="Glucides"
          iconPath={apple}
          bgColor="#F9CE23"
        />
        <Card
          value={lipidCount}
          unit="g"
          category="Lipides"
          iconPath={burger}
          bgColor="#FD5181"
        />
      </div>
    </div>
  );
}

export default Dashboard;
