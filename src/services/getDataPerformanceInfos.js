import { performanceMocked } from "../../public/mockedData";

export async function getDataPerformanceInfos(userId) {
  const mockedData = import.meta.env.VITE_MOCKED_DATA;

  if (mockedData === "true") {
    return performanceMocked;
  }

  const url = `http://localhost:3000/user/${userId}/performance`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
