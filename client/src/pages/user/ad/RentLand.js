import Sidebar from "../../../components/nav/sideBar"
import AdForm from "../../../components/forms/Adform";
function RentLand() {

   
    return (
      <div>
      <h1 className="display-1 bg-primary text-light p-5">Rent Land</h1>
      <Sidebar/>
      <div className="container mt-2">
      <AdForm action="Rent" type="Land"/>
      </div>
      </div>
    );
  }
  
  export default RentLand;