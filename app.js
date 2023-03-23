const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const productRouter = require("./routes/shop");
const expressHbs= require('express-handlebars')

const path = require("path")
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")))

//ejs
app.set("view engine","ejs")
app.set('views',"views")

app.use("/admin",adminData.router);
app.use(productRouter);

app.use((req,res,next)=>{
    // res.status(404).sendFile(path.join(__dirname,"views", "404.html"))
    res.status(404).render("404", {pageTitle:"Page Not Found"})

})
app.listen(port);
