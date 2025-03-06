import { useState } from "react";

export function useAverageSessionInfos(userId) {

    const [averageSessions, setAverageSessions] = useState()

    const getAverageSessionInfos = async () => {
        const url = `http://localhost:3000/user/${userId}/average-sessions`
        const response = await fetch(url)
        const data = await response.json()
        setAverageSessions(data.data.sessions)
    }
    return {averageSessions, getAverageSessionInfos}
}