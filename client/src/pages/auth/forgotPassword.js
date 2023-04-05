import { useState } from "react";
import axios from "axios";
//import  { API } from "../config";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
//import { useAuth  } from "../context/auth";
import { Link } from "react-router-dom";
function ForgotPassword() {

       //states
   const[email,setEmail]=useState("");
   
    const[loading,setLoading]=useState(false);

    //hooks
    const navigate=useNavigate();
 const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
        setLoading(true);
       const {data}=await axios.post(`/forgotPassword`,{email});
       if(data?.error){
        toast.error(data.error);
        setLoading(false);
       }
       else{
        
        toast.success("Please check your Email for Password Reset Link");
        setLoading(false);
        navigate("/");
       }
       console.log(data);
    }
    catch(err){
        
        console.log(err);
        toast.error("Something went wrong");
        setLoading(false);
    }
 }



    return (
      <div>
      <h1 className="display-1 bg-primary text-light p-5">Forgot Password</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <form onClick={handleSubmit}>
                <input
                 type="text"
                 placeholder="Enter your email"
                 className="form-control mb-4"
                 required
                 autoFocus
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}/>
                

                
                <button disabled={loading} className="btn btn-primary col-12 mb-4">{loading?"Loading..." :"Submit"} </button>
            </form>
           <Link className="text-danger" to="/login">Back to Login</Link>
          </div>
        </div>

      </div>
      </div>
    );
  }
  
  export default ForgotPassword;