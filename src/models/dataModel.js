import { useMockData } from "../config";
import { ApiData } from "../services/apiData";
import { MockData } from "../services/mockData";

export class DataModel {
  constructor() {
    this.dataService = useMockData ? new MockData() : new ApiData();
  }

  async getActivityInfos(userId) {
    const data = await this.dataService.activityInfosData(userId);
    const formattedData = [];
    const activity = data.data.sessions;

    activity.forEach((element) => {
      const tempObject = {};

      tempObject["Poids (kg)"] = element.kilogram;
      tempObject["Calories brûlées (kCal)"] = element.calories;
      tempObject.day = element.day;

      formattedData.push(tempObject);
    });
    return formattedData;
  }

  async getAverageSessionInfos(userId) {
    const data = await this.dataService.averageSessionInfosData(userId);
    const days = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };

    const formattedData = [];

    for (const [key, day] of Object.entries(days)) {
      data.data.sessions.forEach((element) => {
        const serie = {};
        if (element.day === parseInt(key)) {
          serie.day = day;
          serie.sessionLength = element.sessionLength;
          formattedData.push(serie);
          return;
        }
      });
      return formattedData;
    }
  }

  async getPerformanceInfos(userId) {
    const data = await this.dataService.performanceInfosData(userId);

    const formattedData = [];

    for (const [key, kind] of Object.entries(data.data.kind)) {
      data.data.data.forEach((element) => {
        const serie = {};
        if (element.kind === parseInt(key)) {
          serie.kind = kind;
          serie.value = element.value;
          formattedData.push(serie);
          return;
        }
      });
    }
    return formattedData;
  }

  async getUserInfos(userId) {
    const data = await this.dataService.userInfosData(userId);
    const scoreAmount = data.data.todayScore || data.data.score;
    const scoreData = [
      {
        name: "Score",
        fill: "#FF0000",
      },
    ];
    scoreData[0].todayScore = scoreAmount * 100;

    const todayScore = scoreData;
    const userName = data.data.userInfos.firstName;
    const calorieCount = data.data.keyData.calorieCount;
    const proteinCount = data.data.keyData.proteinCount;
    const carbohydrateCount = data.data.keyData.carbohydrateCount;
    const lipidCount = data.data.keyData.lipidCount;

    return {
      userName,
      todayScore,
      calorieCount,
      proteinCount,
      carbohydrateCount,
      lipidCount,
    };
  }
}
