import { useState } from "react";

export function usePerformanceInfos(userId) {

    const [performanceInfos, setPerformanceInfos] = useState()

    const getPerformanceInfos = async () => {
        const url = `http://localhost:3000/user/${userId}/performance`
        const response = await fetch(url)
        const data = await response.json()
        setPerformanceInfos(data.data)
    }
    return {performanceInfos, getPerformanceInfos}
}