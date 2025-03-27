import "./Hero.scss";
import { useEffect, useState } from "react";
import { DataModel } from "../../models/dataModel";
import { useUserInfos } from "/src/hooks/useUserInfos";
import { useParams } from "react-router";

function Hero({ userID }) {
  const [userName, setUserName] = useState();
  // const { userName, getUserInfos } = useUserInfos(userID);

  useEffect(() => {
    // getUserInfos();
    const fetchData = async () => {
      const dataModel = new DataModel();
      setUserName("Bob");
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="hello-msg">
        Bonjour <span className="firstname">{userName}</span>
      </h1>
      <p className="support-msg">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </>
  );
}

export default Hero;
