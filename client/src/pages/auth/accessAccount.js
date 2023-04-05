import { useParams,useNavigate} from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useAuth} from "../../context/auth"
export default function AccessAccount(){
    //context
    const [auth,setAuth]=useAuth();
    //hooks
    const {token}=useParams();
    const navigate =useNavigate();

    useEffect(()=>{
        if(token)requestAccess()
    },[token])
    
    const requestAccess=async()=>{
        try{
            const{data}=await axios.post(`/accessAccount`,{resetCode:token});
            if(data?.error){
                toast.error(data.error);
               
            }
            else{

                //save in local storage
                localStorage.setItem("auth",JSON.stringify(data));
                //save in context
                setAuth(data);
                toast.success("Please Update your Password");
                navigate("/");
            }
        }
        catch(err){
         console.log(err);
        }
    }
    console.log(token);;
    return <div
    className="display-1 d-flex justify-content-center align-items-center vh-100"
    style={{ marginTop: "-5%" }}
  >
    Please wait...
  </div>
}