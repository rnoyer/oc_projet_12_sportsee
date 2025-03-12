import { useState } from "react";

export function useAverageSessionInfos(userId) {

    const [averageSessions, setAverageSessions] = useState()
    const days = {"1":"L","2":"M","3":"M","4":"J","5":"V","6":"S","7":"D"}

    const getAverageSessionInfos = async () => {
        const url = `http://localhost:3000/user/${userId}/average-sessions`
        const response = await fetch(url)
        const data = await response.json()
        const formattedData = []

        for(const [key, day] of Object.entries(days)) {
            data.data.sessions.forEach(element => {
                const serie = {}
                if(element.day === parseInt(key)) {
                    serie.day = day
                    serie.sessionLength = element.sessionLength
                    formattedData.push(serie)
                    return
                }
            });
        }

        setAverageSessions(formattedData)
    }
    return {averageSessions, getAverageSessionInfos}
}
