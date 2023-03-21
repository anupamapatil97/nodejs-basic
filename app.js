const express= require('express')
const homeRouter=require("./routes/home")
const userRouter= require("./routes/user")
const path= require("path")
const app= express()

app.use(express.static(path.join(__dirname,"public")))
app.use(homeRouter)
app.use(userRouter)
app.use((req,res)=>{
    res.sendFile(path.join(__dirname, "views","404.html"))
})

const port=3000
app.listen(port)