const express = require("express");
const path= require("path")
const rootDir = require("../util/helper")
const adminController= require('../controller/admin')
const router = express.Router();

router.get("/add-products", adminController.getAddProducts);

router.post("/product",adminController.addProducts);

router.get("/products", adminController.getProducts);

router.get("/edit-product/:productId", adminController.getEditProducts);

router.post("/edit-product", adminController.postEditProduct);
router.post("/delete-product", adminController.postDeleteProduct);




module.exports = router;
