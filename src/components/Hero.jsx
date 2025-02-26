import "./Hero.scss";

function Hero({ firstName, todayScore }) {
    firstName = "Thomas"
  return (
    <>
        <h1 className="hello-msg">Bonjour <span className="firstname">{firstName}</span></h1>
        <p className="support-msg">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </>

);
}

export default Hero;
