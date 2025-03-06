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
import { useEffect } from "react";
import { useParams } from "react-router";
import { useUserInfos } from "/src/hooks/useUserInfos.js";
import { useActivityInfos } from "/src/hooks/useActivityInfos.js";
import { useAverageSessionInfos } from "../../hooks/useAverageSessionInfos";
import { usePerformanceInfos } from "../../hooks/usePerformanceInfos";

function Dashboard() {
  const params = useParams();
  const {
    calorieCount,
    proteinCount,
    carbohydrateCount,
    lipidCount,
    getUserInfos,
    todayScore,
  } = useUserInfos(params.userId);
  const { activitySessions, getActivityInfos } = useActivityInfos(
    params.userId
  );
  const { averageSessions, getAverageSessionInfos } = useAverageSessionInfos(
    params.userId
  );
  const { performanceInfos, getPerformanceInfos } = usePerformanceInfos(
    params.userId
  );

  useEffect(() => {
    getUserInfos();
    getActivityInfos();
    getAverageSessionInfos();
    getPerformanceInfos();
  }, []);

  return (
    <div className="dash">
      <div className="dash--hero">
        <Hero />
      </div>
      <div className="dash--bar-chart">
        <Barchart sessionsData={activitySessions} />
      </div>
      <div className="dash--line-chart">
        <LineChart sessionsData={averageSessions} />
      </div>
      <div className="dash--radar-chart">
        <RadarChart performancesData={performanceInfos} />
      </div>
      <div className="dash--radial-chart">
        <RadialChart score={todayScore} />
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
