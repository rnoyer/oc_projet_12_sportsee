import { averageSessionsMocked } from "../../public/mockedData";

export async function getDataAverageSessionInfos(userId) {
  const mockedData = import.meta.env.VITE_MOCKED_DATA;

  if (mockedData === "true") {
    return averageSessionsMocked;
  }

  const url = `http://localhost:3000/user/${userId}/average-sessions`
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
