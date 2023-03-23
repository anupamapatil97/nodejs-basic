const express = require("express");
const path =require('path')
const router = express.Router();
const rootDir= require("../util/helper")
const adminData= require("./admin")

router.get("/", (req, res) => {
  console.log(adminData.products,"products")
  // res.sendFile(path.join(rootDir,"views", "shop.html"))

  const products= adminData.products
  //render pug file
  res.render("shop", {prods:products, docTitle:"Shop", path:'/', hasProducts: products.length>0, productCss:true, activeShop:true})
}),
  (module.exports = router);
