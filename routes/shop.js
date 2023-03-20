const express = require("express");
const path =require('path')
const router = express.Router();
const rootDir= require("../util/helper")

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir,"views", "shop.html"))
}),
  (module.exports = router);
