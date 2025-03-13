import { userInfosMocked } from "../../public/mockedData";

export async function getDataUserInfos(userId) {
  const mockedData = import.meta.env.VITE_MOCKED_DATA;

  if (mockedData === "true") {
    return userInfosMocked;
  }
  
  const url = `http://localhost:3000/user/${userId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
