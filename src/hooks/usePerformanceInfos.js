import { useState } from "react";

export function usePerformanceInfos(userId) {

    const [performanceInfos, setPerformanceInfos] = useState()

    const getPerformanceInfos = async () => {
        const url = `http://localhost:3000/user/${userId}/performance`
        const response = await fetch(url)
        const data = await response.json()
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