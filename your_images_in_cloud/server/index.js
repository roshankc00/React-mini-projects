import express from 'express'
import connectToDb from './config/db.js'
import cors from 'cors'
import userRoute from './routes/userRoute.js'
import cloudinary from 'cloudinary'
const app=express()
const port=9000

// connecting to the database 
connectToDb()

// Configuration 
cloudinary.config({
    cloud_name: "dmeta8flh",
    api_key: "369233915748754",
    api_secret: "0tnHLl4R8k2jXNmWReKJHzBYApU"
  });
  


// middlewares 
app.use(cors())
app.use(express.json())
app.use(express.static('public/upload'))


app.use('/api/v1',userRoute)


app.listen(port,()=>{
    console.log(`listening at the port ${port}`);
})