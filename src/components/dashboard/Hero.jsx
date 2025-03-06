import "./Hero.scss";
import { useEffect } from "react";
import { useUserInfos } from "/src/hooks/useUserInfos";
import { useParams } from "react-router";

function Hero() {
  const params = useParams()
  const { userName, getUserInfos } = useUserInfos(params.userId);

  useEffect(() => {
    getUserInfos();
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
