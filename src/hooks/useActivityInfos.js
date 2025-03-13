import { useState } from "react";

export function useActivityInfos(userId) {

    const [activitySessions, setActivitySessions] = useState()

    const getActivityInfos = async () => {
        const url = `http://localhost:3000/user/${userId}/activity`
        const response = await fetch(url)
        const data = await response.json()

        const activity = data.data.sessions
        activity.forEach(element => {
            delete Object.assign(element, {["Poids (kg)"]: element["kilogram"]})["kilogram"]
            delete Object.assign(element, {["Calories brûlées (kCal)"]: element["calories"]})["calories"]
        });

        setActivitySessions(activity)
    }
    return {activitySessions, getActivityInfos}
}
