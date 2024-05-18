const express = require("express")
const app =express()
const sendMail = require("./controller/sendMail")

app.get("/" , (req, res)=>{
    res.send("im from backend")
})
app.get("/mail" , sendMail)

app.listen(4000 ,()=>{
    console.log("server is running on port 4000")
})