import { activityMocked } from "../../public/mockedData.js";

export async function getDataActivityInfos(userId) {
  const mockedData = import.meta.env.VITE_MOCKED_DATA;

  if (mockedData === "true") {
    return activityMocked;
  }

  const url = `http://localhost:3000/user/${userId}/activity`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
