const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const productRouter = require("./routes/shop");
const expressHbs= require('express-handlebars')
const pageNotFoundController= require("./controller/404")

const path = require("path")
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")))

//ejs
app.set("view engine","ejs")
app.set('views',"views")

app.use("/admin",adminRoutes);
app.use(productRouter);

app.use(pageNotFoundController.pageNotFound)
app.listen(port);
