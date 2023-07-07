import { useState } from "react"
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { GOOGLE_PLACES_KEY } from "../../config";
import CurrencyInput from 'react-currency-input-field';
import ImageUpload from "./imageUpload";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast"
import { useAuth } from "../../context/auth";
export default function AdForm({action,type}){
  const [auth, setAuth] = useAuth();
//state
const[ad,setAd]=useState({
    photos: [],
    uploading: false,
    price: "",
    address: "",
    bedrooms: "",
    bathrooms: "",
    carpark: "",
    landsize: "",
    title: "",
    description: "",
    loading: false,
    type,
    action,

})

//hooks
const navigate=useNavigate();
const handleClick=async()=>{
  try{
  setAd({...ad,loading:true});
  const{data}=await axios.post("/ad-create",ad);
  console.log(data);
  if(data?.error){
    toast.error(data.error);
    setAd({...ad,loading:false});
  }
  else{
     // data {user, ad}

        // update user in context
        setAuth({ ...auth, user: data.user });
        // update user in local storage
        const fromLS = JSON.parse(localStorage.getItem("auth"));
        fromLS.user = data.user;
        localStorage.setItem("auth", JSON.stringify(fromLS));

        toast.success("Ad created successfully");
        setAd({ ...ad, loading: false });
        // navigate("/dashboard");

        // reload page on redirect
        window.location.href = "/dashboard";
  }
  }
  catch(err){
    console.log(err);
    setAd({...ad,loading:false});
  }
}

return(
   
    <>
     
     {/* <div className="mb-3 form-control">
        <GooglePlacesAutocomplete
          apiKey={GOOGLE_PLACES_KEY}
          apiOptions="au"
          selectProps={{
            defaultInputValue: ad?.address,
            placeholder: "Search for address..",
            onChange: ({ value }) => {
              setAd({ ...ad, address: value.description });
            },
          }}
        />
      </div> */}
      <ImageUpload ad={ad} setAd={setAd}/>
      <input
type="text"
className="mb-3 form-control"
value={ad.address}
placeholder="Enter your address"
onChange={(e)=>setAd({ ...ad, address: e.target.value})}
/>
<CurrencyInput
placeholder="Enter Price"
defaultValue={ad.price}
className="mb-3 form-control"
onValueChange={(value)=>setAd({ ...ad, price: value })}/>

{type=='House' ?(
  <>
<input
type="number"
min="0"
className="mb-3 form-control"
value={ad.bedrooms}
placeholder="Enter Number of bedrooms"
onChange={(e)=>setAd({ ...ad, bedrooms: e.target.value })}
/>

<input
type="number"
min="0"
className="mb-3 form-control"
value={ad.bathrooms}
placeholder="Enter Number of bathrooms"
onChange={(e)=>setAd({...ad, bathrooms:e.target.value})}/>

<input
type="number"
min="0"
className="mb-3 form-control"
value={ad.carpark}
placeholder="Enter Number of carparks"
onChange={(e)=>setAd({...ad, carpark:e.target.value})}/>
</>
):("")
}
<input
type="text"
className="mb-3 form-control"
value={ad.landsize}
placeholder="Size of Land"
onChange={(e)=>setAd({...ad, landsize:e.target.value})}/>

<input
type="text"
className="mb-3 form-control"
value={ad.title}
placeholder="Enter Title"
onChange={(e)=>setAd({...ad,  title:e.target.value})}/>
<textarea
className="mb-3 form-control"
value={ad.description}
placeholder="Enter description"
onChange={(e)=>setAd({...ad,  description:e.target.value})}/>



<button onClick={handleClick} className={`btn btn-primary mb-5 ${ad.loading? "disabled":"" } `}>{ad.loading?"Saving...":"Submit"}</button>
      {/* <pre>{JSON.stringify(ad, null, 4)}</pre> */}
    </>
)
}