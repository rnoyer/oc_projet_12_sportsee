import "./Hero.scss";
import { useEffect } from "react";
import { useUserInfos } from "../hooks/useUserInfos";
import { useParams } from "react-router";

function Hero() {
  const params = useParams()
  const { user, getUserInfos } = useUserInfos(params.userId);

  useEffect(() => {
    getUserInfos();
  }, []);

  return (
    <>
      <h1 className="hello-msg">
        Bonjour <span className="firstname">{user}</span>
      </h1>
      <p className="support-msg">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </>
  );
}

export default Hero;
