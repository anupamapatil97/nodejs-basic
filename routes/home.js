const express= require('express')
const path= require('path')

const router = express.Router()
const userList=[]
router.get("/",(req,res)=>{
    // res.sendFile(path.join(__dirname, "../","views","home.html"))
    res.render("home", {pageTitle:"Home", path:"/"})
})

router.post("/add-user",(req,res)=>{
    userList.push(req.body)
    res.redirect("/users")
})

exports.router= router
exports.userList= userList