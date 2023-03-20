const express = require("express");
const path= require("path")
const rootDir = require("../util/helper")

const router = express.Router();

router.get("/add-products", (req, res, next) => {
//   console.log("In Second Middleware");
//   res.send(
//     `<form action="/admin/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>`
//   );
  // res.sendFile(path.join(__dirname, "../", "views", "add-product.html"))
  res.sendFile(path.join(rootDir, "views", "add-product.html"))

});

router.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
