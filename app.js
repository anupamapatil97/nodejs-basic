const express= require('express')

const app= express()

const port =3000

app.use((req,res,next)=>{
    console.log("Hello from First Middleware")
    next()
})

app.use((req,res,next)=>{
    console.log("Hello from Second Middleware")
    res.send(`<h1>Hello from middleware</h1>`)
})

app.use("/users",(req,res,next)=>{
    console.log("Hello from First Middleware")
    res.send(`<h1>Hello! welcome to Users Page</h1>`)
})

app.use("/",(req,res,next)=>{
    console.log("Hello from Second Middleware")
    res.send(`<h1>Hello! Welcome to Home Page</h1>`)
})

app.listen(port)