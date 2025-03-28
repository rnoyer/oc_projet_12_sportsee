import "./Hero.scss";
import { useEffect, useState } from "react";
import { DataModel } from "../../models/dataModel";

function Hero({ userID }) {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const dataModel = new DataModel();
      setUserName((await dataModel.getUserInfos(userID)).userName);
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
