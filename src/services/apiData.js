export class ApiData {
  async activityInfosData(userId) {
    try {
      const url = `http://localhost:3000/user/${userId}/activity`;
      const response = await fetch(url);
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(
        "Problème survenu lors de la récupération des données API \n",
        error
      );
    }
  }

  async averageSessionInfosData(userId) {
    try {
      const url = `http://localhost:3000/user/${userId}/average-sessions`;
      const response = await fetch(url);
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(
        "Problème survenu lors de la récupération des données API \n",
        error
      );
    }
  }

  async performanceInfosData(userId) {
    try {
      const url = `http://localhost:3000/user/${userId}/performance`;
      const response = await fetch(url);
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(
        "Problème survenu lors de la récupération des données API \n",
        error
      );
    }
  }

  async userInfosData(userId) {
    try {
      const url = `http://localhost:3000/user/${userId}`;
      const response = await fetch(url);
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(
        "Problème survenu lors de la récupération des données API \n",
        error
      );
    }
  }
}
