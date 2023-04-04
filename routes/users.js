const express= require('express')
const path= require('path')
const homeData = require("./home")

const router = express.Router()

router.get("/users",(req,res)=>{
    // res.sendFile(path.join(__dirname, "../","views","users.html"))
    const userList= homeData.userList
    res.render("users", {pageTitle:"Users", userList:userList, path:"/users"})
})

module.exports= router