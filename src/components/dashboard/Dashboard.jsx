import "./Dashboard.scss";
import Hero from "./Hero";
import Card from "./Card";
import Barchart from "../charts/Barchart";
import LineChart from "../charts/LineChart";
import RadarChart from "../charts/RadarChart";
import RadialChart from "../charts/RadialChart";
import fire from "/src/assets/icons/fire.svg";
import chicken from "/src/assets/icons/chicken.svg";
import apple from "/src/assets/icons/apple.svg";
import burger from "/src/assets/icons/burger.svg";
import { useState, useEffect } from "react";
import { DataModel } from "../../models/dataModel";
import { data } from "react-router";
// import { useUserInfos } from "/src/hooks/useUserInfos.js";
// import { useActivityInfos } from "/src/hooks/useActivityInfos.js";
// import { useAverageSessionInfos } from "../../hooks/useAverageSessionInfos";
// import { usePerformanceInfos } from "../../hooks/usePerformanceInfos";
import DataSourceSelector from "./DataSourceSelector";

function Dashboard({ userID }) {
  const [activitySessions, setActivitySessions] = useState();
  const [averageSessions, setAverageSessions] = useState();
  const [performanceInfos, setPerformanceInfos] = useState();
  const [todayScore, setTodayScore] = useState();
  const [calorieCount, setCalorieCount] = useState();
  const [proteinCount, setProteinCount] = useState();
  const [carbohydrateCount, setCarbohydrateCount] = useState();
  const [lipidCount, setLipidCount] = useState();
  // const {
  //   todayScore,
  //   calorieCount,
  //   proteinCount,
  //   carbohydrateCount,
  //   lipidCount,
  //   getUserInfos,
  // } = useUserInfos(userID);
  // const { activitySessions, getActivityInfos } = useActivityInfos(userID);
  // const { averageSessions, getAverageSessionInfos } =
  //   useAverageSessionInfos(userID);
  // const { performanceInfos, getPerformanceInfos } = usePerformanceInfos(userID);

  useEffect(() => {
    // getUserInfos();
    // getActivityInfos();
    // getAverageSessionInfos();
    // getPerformanceInfos();
    const fetchData = async () => {
      const dataModel = new DataModel();
      setActivitySessions(await dataModel.getActivityInfos(userID));
      setAverageSessions(await dataModel.getAverageSessionInfos(userID));
      setPerformanceInfos(await dataModel.getPerformanceInfos(userID));
      setTodayScore(30);
      setCalorieCount(30);
      setProteinCount(30);
      setCarbohydrateCount(30);
      setLipidCount(30);
    };
    fetchData();
  }, []);

  return (
    <div className="dash">
      <div className="dash--hero">
        <Hero userID={userID} />
      </div>
      <div className="dash--selector">
        <DataSourceSelector />
      </div>
      <div className="dash--bar-chart">
        <Barchart sessionsData={activitySessions} />
      </div>
      <div className="squared-chart-container">
        <div className="dash--line-chart squared-chart">
          <LineChart sessionsData={averageSessions} />
        </div>
        <div className="dash--radar-chart squared-chart">
          <RadarChart performancesData={performanceInfos} />
        </div>
        <div className="dash--radial-chart squared-chart">
          <RadialChart scoreData={todayScore} />
        </div>
      </div>
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
          value={carbohydrateCount}
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
