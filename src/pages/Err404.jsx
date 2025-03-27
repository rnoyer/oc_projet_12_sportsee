import "./Err404.scss";
import { Link } from "react-router";

function Err404() {
  return (
    <div className="error-wrapper">
      <h2>Oups, il n'y a rien ici...</h2>
      <Link to="/">Retour sur la Homepage</Link>
    </div>
  );
}

export default Err404;
