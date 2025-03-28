import { activityMocked } from "../../public/mockedData.js";
import { averageSessionsMocked } from "../../public/mockedData";
import { performanceMocked } from "../../public/mockedData";
import { userInfosMocked } from "../../public/mockedData";

export class MockData {
  async activityInfosData() {
    try {
      return activityMocked;
    } catch (error) {
      console.error(
        "Problème survenu lors de la récupération des données mockés \n",
        error
      );
    }
  }

  async averageSessionInfosData() {
    try {
      return averageSessionsMocked;
    } catch (error) {
      console.error(
        "Problème survenu lors de la récupération des données mockés \n",
        error
      );
    }
  }

  async performanceInfosData() {
    try {
      return performanceMocked;
    } catch (error) {
      console.error(
        "Problème survenu lors de la récupération des données mockés \n",
        error
      );
    }
  }

  async userInfosData() {
    try {
      return userInfosMocked;
    } catch (error) {
      console.error(
        "Problème survenu lors de la récupération des données mockés \n",
        error
      );
    }
  }
}
