export class ApiData {
  async activityInfosData(userId) {
    const url = `http://localhost:3000/user/${userId}/activity`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  async averageSessionInfosData(userId) {
    const url = `http://localhost:3000/user/${userId}/average-sessions`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  async performanceInfosData(userId) {
    const url = `http://localhost:3000/user/${userId}/performance`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  async userInfosData(userId) {
    const url = `http://localhost:3000/user/${userId}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
}
