import "./Home.scss";
import Header from "/src/components/dashboard/Header";
import Sidebar from "/src/components/dashboard/Sidebar";
import { Link } from "react-router";

function Home() {
  return (
    <div className="dash-wrapper">
      <Header />
      <Sidebar />
      <dl className="homepage-wrapper">
        <dt>
          <h2>Choisissez un profil :</h2>
        </dt>
        <dd>
          <Link to="/dashboard/12">
            <p>Karl</p>
          </Link>
        </dd>
        <dd>
          <Link to="/dashboard/18">
            <p>Cecilia</p>
          </Link>
        </dd>
      </dl>
    </div>
  );
}

export default Home;
