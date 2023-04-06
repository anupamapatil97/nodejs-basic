const express = require("express");
const path= require("path")
const rootDir = require("../util/helper")
const productController= require('../controller/product')
const router = express.Router();

router.get("/add-products", productController.getAddProducts);

router.post("/product",productController.addProducts);

module.exports = router;
