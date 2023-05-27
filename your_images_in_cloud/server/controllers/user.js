import User from "../models/user.js";

import cloudinary from 'cloudinary'
export const createUser=async(req,res)=>{

    const {name,email,age}=req.body
    try {
        if(req.file){
            
            const res = cloudinary.uploader.upload(req.file.path)
            res.then(async(data) => {
                console.log(data);
                console.log(data.secure_url);
                const newUser=await User.create(
                    {
                        name,
                        email,
                        age,
                        profile:data.secure_url,
                    })
                    console.log(newUser)
                    
                }).catch((err) => {
                    console.log(err);
                });
                
                
            }else{
                res.send("wow")
            }
         
            res.send(newUser)
         

       
        
    } catch (error) {
       return  res.status(500).json(error)
        
    }


}
 export const getAllUser=async(req,res)=>{
    try {
        const allUser=await User.find({})
        if(allUser){
            res.status(200).json(allUser)
        }else{
            res.status(400).json({
                message:"no user exists"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message:"internal Server error"
        })
        
    }

    
}

