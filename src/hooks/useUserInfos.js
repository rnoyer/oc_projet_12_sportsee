import { useState } from "react";
import { getDataUserInfos } from "../services/getDataUserInfos";

export function useUserInfos(userId) {
  const [userName, setUserName] = useState();
  const [todayScore, setTodayScore] = useState();
  const [calorieCount, setCalorieCount] = useState();
  const [proteinCount, setProteinCount] = useState();
  const [carbohydrateCount, setCarbohydrateCount] = useState();
  const [lipidCount, setLipidCount] = useState();

  const scoreData = [
    {
      name: "Score",
      fill: "#FF0000",
    },
  ];

  const getUserInfos = async () => {

    const data = await getDataUserInfos(userId)
    const scoreAmount = data.data.todayScore || data.data.score;

    scoreData[0].todayScore = scoreAmount * 100;

    setTodayScore(scoreData);
    setUserName(data.data.userInfos.firstName);
    setCalorieCount(data.data.keyData.calorieCount);
    setProteinCount(data.data.keyData.proteinCount);
    setCarbohydrateCount(data.data.keyData.carbohydrateCount);
    setLipidCount(data.data.keyData.lipidCount);
  };
  return {
    userName,
    todayScore,
    calorieCount,
    proteinCount,
    carbohydrateCount,
    lipidCount,
    getUserInfos,
  };
}
