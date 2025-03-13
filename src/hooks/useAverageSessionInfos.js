import { useState } from "react";
import { getDataAverageSessionInfos } from "../services/getDataAverageSessionInfos";

export function useAverageSessionInfos(userId) {

    const [averageSessions, setAverageSessions] = useState()
    const days = {"1":"L","2":"M","3":"M","4":"J","5":"V","6":"S","7":"D"}

    const getAverageSessionInfos = async () => {
        const data = await getDataAverageSessionInfos(userId)
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
