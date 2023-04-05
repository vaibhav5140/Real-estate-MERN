import * as config from "../config.js";
import { nanoid } from "nanoid";
import Ad from "../models/ad.js";
import User from "../models/user.js"
import slugify from "slugify";
import ad from "../models/ad.js";
export const uploadImage = async (req, res) => {
  try {
    // console.log(req.body);
    const { image } = req.body;

    const base64Image = new Buffer.from(
      image.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );
    const type = image.split(";")[0].split("/")[1];

    // image params
    const params = {
      Bucket: "real-estate-project-vaibhav",
      Key: `${nanoid()}.${type}`,
      Body: base64Image,
      ACL: "public-read",
      ContentEncoding: "base64",
      ContentType: `image/${type}`,
    };

    config.AWSS3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      } else {
         console.log(data);
        res.send(data);
      }
    });
  } catch (err) {
    console.log(err);
    res.json({ error: "Upload failed. Try again." });
  }
};

export const removeImage=async(req,res)=>{
try{
    const{Key,Bucket}=req.body;
   config.AWSS3.deleteObject({Bucket,Key},(err,data)=>{
     if(err){
        console.log(err);
        res.sendStatus(403);
     }else{
        res.send({ok:true});
     }
   });
}
catch(err){
console.log(err);
}
}

export const create=async(req,res)=>{
  try{
    //console.log(req.body);
    const{photos,description,title,address,price,type,landsize}=req.body;
    if(!photos?.length){
return res.json({error:"Photo is required"});}
if(!description){
  return res.json({error:"Description is required"});
    }
    if(!title){
      return res.json({error:"Title is required"});
        }
        if(!address){
          return res.json({error:"Address is required"});
            }
            if(!price){
              return res.json({error:"Price is required"});
            }
            
            if(!landsize){
              return res.json({error:"LandSize is required"});
            }
//const geo=await config.GOOGLE_GEOCODER.geocode(address);
//console.log(geo); 
const ad=await new Ad({
  ...req.body,
  postedBy: req.user._id,
  // location: {
  //   type: "Point",
  //   coordinates: [geo?.[0]?.longitude, geo?.[0]?.latitude],
  // },
  // googleMap: geo,
  slug: slugify(`${type}-${address}-${price}-${nanoid(6)}`),
}).save();
// make user role > Seller
const user = await User.findByIdAndUpdate(
  req.user._id,
  {
    $addToSet: { role: "Seller" },
  },
  { new: true }
);

user.password = undefined;
user.resetCode = undefined;

res.json({
  ad,
  user,
});
 }
  catch(err){
    res.json({error:"Something went wrong"});
    console.log(err);

  }
}

export const ads=async(req,res)=>{
try{
  const adsforSell=await Ad.find({action:"Sell"})
  .select("-photos.Key -photos.key -photos.ETag")
  .sort({createdAt:-1}).limit(12);

  const adsforRent=await Ad.find({action:"Rent"})
  .select("-photos.Key -photos.key -photos.ETag")
  .sort({createdAt:-1}).limit(12);
   
  res.json({adsforRent,adsforSell});
}
catch(err){
  res.json({error:"Something went wrong"});
console.log(err);
  
}
}

export const read=async(req,res)=>{
  try{
    const ad=await Ad.findOne({slug:req.params.slug}).populate(
      "postedBy",
      "name username email phone company photo.Location"
    )
    console.log(ad);
    
    const related = await Ad.find({
      _id: { $ne: ad._id },
      action: ad.action,
      type: ad.type,
      address: {
        $regex: ad.address,
        $options: "i",
      },
    })
      .limit(3)
      .select("-photos.Key -photos.key -photos.ETag -photos.Bucket -googleMap");
    res.json({ad,related})
  }
  catch(err){
    res.json({error:"Something went wrong"});
console.log(err);
  }
}
export const addToWishlist=async(req,res)=>{
try{
  const user=await User.findByIdAndUpdate(
    req.user._id,{
      $addToSet:{wishlist:req.body.adId},
  },
  {new:true});
  user.password = undefined;
  user.resetCode = undefined;
  res.json(user);
}
catch(err){
console.log(err);
}
}

export const removeFromWishlist=async(req,res)=>{
  try{
    const user=await User.findByIdAndUpdate(
      req.user._id,{
        $pull:{wishlist:req.params.adId},
    },
    {new:true});
    user.password = undefined;
    user.resetCode = undefined;
    res.json(user);
  }
  catch(err){
  console.log(err);
  }
  }