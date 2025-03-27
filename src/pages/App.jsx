import "./App.scss";
import Header from "/src/components/dashboard/Header";
import Sidebar from "/src/components/dashboard/Sidebar";
import Dashboard from "/src/components/dashboard/Dashboard";
import { useParams } from "react-router";
import Err404 from "./Err404";

function App() {
  const { userId } = useParams();
  const validUserID = ["12", "18"];

  if (!validUserID.includes(userId)) {
    return <Err404 />;
  }

  return (
    <div className="dash-wrapper">
      <Header />
      <Sidebar />
      <Dashboard userID={userId} />
    </div>
  );
}

export default App;
