const express=require('express')

const app=express()
const port=9000
app.get('/',(req,res)=>{
    res.json({message:"from server "})
})

app.listen(port,()=>{
    console.log(`running at the ${port}`);
})