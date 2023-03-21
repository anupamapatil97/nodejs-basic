const path= require("path")
const express = require('express')
const router = express.Router()
const rootDir= require('../util/helper')

router.get("/user",(req,res)=>{
    res.sendFile(path.join(rootDir, "views", "user.html"))
})

module.exports=router