const path= require("path")
const express = require('express')
const router = express.Router()
const rootDir= require('../util/helper')

router.get("/",(req,res)=>{
    res.sendFile(path.join(rootDir, "views", "home.html"))
})

module.exports=router