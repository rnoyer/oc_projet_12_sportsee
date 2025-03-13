import { useState } from "react";
import { getDataPerformanceInfos } from "../services/getDataPerformanceInfos";

export function usePerformanceInfos(userId) {

    const [performanceInfos, setPerformanceInfos] = useState()

    const getPerformanceInfos = async () => {
        const data = await getDataPerformanceInfos(userId)
        const formattedData = []

        for(const [key, kind] of Object.entries(data.data.kind)) {
            data.data.data.forEach(element => {
                const serie = {}
                if(element.kind === parseInt(key)) {
                    serie.kind = kind
                    serie.value = element.value
                    formattedData.push(serie)
                    return
                }
            });
            
        }
        setPerformanceInfos(formattedData)

    }
    return {performanceInfos, getPerformanceInfos}
}