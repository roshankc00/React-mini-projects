import mongoose from "mongoose";

const connectToDb=async()=>{
    try {
        const res=await mongoose.connect('mongodb://127.0.0.1:27017/uploadimage')
        console.log("connected to the database");
        
    } catch (error) {
        console.log("failed to connect the database");
        
    }
   


}

export default connectToDb