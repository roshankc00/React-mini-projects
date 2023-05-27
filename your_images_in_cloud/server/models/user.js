import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    age:{
        type:Number,
    },
    profile:{
        type:String,
    }
},{timestamps:true})

const User=mongoose.model('user',userSchema)

export default User










