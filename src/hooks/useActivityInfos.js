import { useState } from "react";
import { getDataActivityInfos } from "../services/getDataActivityInfos";

export function useActivityInfos(userId) {
  const [activitySessions, setActivitySessions] = useState();

  const getActivityInfos = async () => {
    const data = await getDataActivityInfos(userId);
    const formattedData = []

    const activity = data.data.sessions;

    activity.forEach((element) => {
        const tempObject = {}

        tempObject["Poids (kg)"] = element.kilogram
        tempObject["Calories brûlées (kCal)"] = element.calories
        tempObject.day = element.day

        formattedData.push(tempObject)
    });

    setActivitySessions(formattedData);
  };
  return { activitySessions, getActivityInfos };
}
