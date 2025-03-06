import { useState } from "react";

export function useActivityInfos(userId) {

    const [activitySessions, setActivitySessions] = useState()

    const getActivityInfos = async () => {
        const url = `http://localhost:3000/user/${userId}/activity`
        const response = await fetch(url)
        const data = await response.json()
        setActivitySessions(data.data.sessions)
    }
    return {activitySessions, getActivityInfos}
}
