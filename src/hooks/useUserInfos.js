import { useState } from "react";

export function useUserInfos(userId) {

    const [user, setUser] = useState()
    const [todayScore, setTodayScore] = useState()
    const [calorieCount, setCalorieCount] = useState()
    const [proteinCount, setProteinCount] = useState()
    const [carbohydrateCount, setCarbohydrateCount] = useState()
    const [lipidCount, setLipidCount] = useState()


    const getUserInfos = async () => {
        const url = `http://localhost:3000/user/${userId}`
        const response = await fetch(url)
        const data = await response.json()
        setUser(data.data.userInfos.firstName)
        setTodayScore(data.data.todayScore)
        setCalorieCount(data.data.keyData.calorieCount)
        setProteinCount(data.data.keyData.proteinCount)
        setCarbohydrateCount(data.data.keyData.carbohydrateCount)
        setLipidCount(data.data.keyData.lipidCount)
    }
    return {user, todayScore, calorieCount, proteinCount, carbohydrateCount, lipidCount, getUserInfos}
}
