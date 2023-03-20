const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const productRouter = require("./routes/shop");
const path = require("path")
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin",adminRouter);
app.use(productRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views", "404.html"))
})
app.listen(port);
