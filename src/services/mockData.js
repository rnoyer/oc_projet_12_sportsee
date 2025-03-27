import { activityMocked } from "../../public/mockedData.js";
import { averageSessionsMocked } from "../../public/mockedData";
import { performanceMocked } from "../../public/mockedData";
import { userInfosMocked } from "../../public/mockedData";

export class MockData {
  async activityInfosData() {
    return activityMocked;
  }

  async averageSessionInfosData() {
    return averageSessionsMocked;
  }

  async performanceInfosData() {
    return performanceMocked;
  }

  async userInfosData() {
    return userInfosMocked;
  }
}
