const express = require("express");
const router = express.Router();
const shopController = require("../controller/shop")


router.get("/", shopController.getIndex),
router.get("/cart", shopController.getCart),
router.post("/cart", shopController.postCart),

router.get("/products", shopController.getAllProducts),
router.get("/products/:productId", shopController.getProduct),

router.get("/checkout", shopController.getCheckout),
router.get("/orders", shopController.getOrders),

router.post("/cart-delete-item", shopController.postCartDelete),


  (module.exports = router);
