export const userInfosMocked = {
  data: {
    id: 12,
    userInfos: {
      firstName: "Karl Mocked",
      lastName: "Dovineau",
      age: 31,
    },
    todayScore: 0.8,
    keyData: {
      calorieCount: 100,
      proteinCount: 200,
      carbohydrateCount: 300,
      lipidCount: 400,
    },
  },
};

export const averageSessionsMocked = {
  data: {
    userId: 12,
    sessions: [
      {
        day: 1,
        sessionLength: 0,
      },
      {
        day: 2,
        sessionLength: 100,
      },
      {
        day: 3,
        sessionLength: 75,
      },
      {
        day: 4,
        sessionLength: 50,
      },
      {
        day: 5,
        sessionLength: 75,
      },
      {
        day: 6,
        sessionLength: 100,
      },
      {
        day: 7,
        sessionLength: 0,
      },
    ],
  },
};

export const performanceMocked = {
  data: {
    userId: 12,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity mocked",
    },
    data: [
      {
        value: 100,
        kind: 1,
      },
      {
        value: 50,
        kind: 2,
      },
      {
        value: 100,
        kind: 3,
      },
      {
        value: 50,
        kind: 4,
      },
      {
        value: 100,
        kind: 5,
      },
      {
        value: 50,
        kind: 6,
      },
    ],
  },
};

export const activityMocked = {
  data: {
    userId: 12,
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 20,
        calories: 100,
      },
      {
        day: "2020-07-02",
        kilogram: 50,
        calories: 70,
      },
      {
        day: "2020-07-03",
        kilogram: 60,
        calories: 60,
      },
      {
        day: "2020-07-04",
        kilogram: 65,
        calories: 55,
      },
      {
        day: "2020-07-05",
        kilogram: 60,
        calories: 60,
      },
      {
        day: "2020-07-06",
        kilogram: 50,
        calories: 70,
      },
      {
        day: "2020-07-07",
        kilogram: 20,
        calories: 100,
      },
    ],
  },
};
