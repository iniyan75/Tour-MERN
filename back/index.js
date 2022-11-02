const express= require('express')
const app=express()
const cors=require("cors")
const mongoose=require('mongoose')
app.use(cors())
app.use(express.json())

require('dotenv').config()

mongoose.connect('mongodb+srv://ins:iniyan93@cluster0.oohfvua.mongodb.net/tourDB')

app.use("/",require("./route/tourRoute.js"))


app.listen( process.env.PORT || 3001,()=>{
    console.log(" connected")
})
