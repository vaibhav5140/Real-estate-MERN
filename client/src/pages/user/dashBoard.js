//import { useAuth } from "../context/auth";
import Sidebar from "../../components/nav/sideBar"
function Dashboard() {

    //const[auth,setAuth]=useAuth();
    return (
      <div>
      <h1 className="display-1 bg-primary text-light p-5">Dashboard</h1>
      <Sidebar/>
      </div>
    );
  }
  
  export default Dashboard;
  