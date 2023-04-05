import { useAuth } from "../context/auth";
import { useEffect,useState } from "react";
import axios from "axios";
import AdCard from "../components/cards/adCrad";
function Home() {
//context
    const[auth,setAuth]=useAuth();

    //state
    const[adsforSell,setadsforSell]=useState();
    const[adsforRent,setadsforRent]=useState();

    useEffect(()=>{
      fetchAds();
    },[]);
    const fetchAds=async()=>{
      try{
        const{data}=await axios.get("/ads");
        setadsforSell(data.adsforSell);
        setadsforRent(data.adsforRent);
      }
      catch(err){
       
        console.log(err);
      }
    }
    return (
      <div>
      <h1 className="display-1 bg-primary text-light p-5">For Sell</h1>
      <div className="container"><div className="row">
        {adsforSell?.map((ad)=>(
<AdCard ad={ad} key={ad._id}/>
        ))}
        </div></div>

        <h1 className="display-1 bg-primary text-light p-5">For Rent</h1>
      <div className="container"><div className="row">
        {adsforRent?.map((ad)=>(
<AdCard ad={ad} key={ad._id}/>
        ))}
        </div></div>
      </div>
    );
  }
  
  export default Home;
  