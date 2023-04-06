const Product = require("../models/product");


exports.getAddProducts = (req, res, next) => {
  //   console.log("In Second Middleware");
  //   res.send(
  //     `<form action="/admin/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>`
  //   );
  // res.sendFile(path.join(__dirname, "../", "views", "add-product.html"))
  // res.sendFile(path.join(rootDir, "views", "add-product.html"))

  //pug file
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-products",
    productCss: true,
    formCss: true,
    activeAddProduct: true,
  });
};

exports.addProducts = (req, res) => {
    const product = new Product(req.body.title)
    product.save()
  res.redirect("/");
};

exports.getAllProducts=(req, res) => {
    // res.sendFile(path.join(rootDir,"views", "shop.html"))

    //render pug file
    // const products= Product.fetchAll()
    Product.fetchAll((products)=>{
        res.render("shop", {prods:products, pageTitle:"Shop", path:'/', hasProducts: products.length>0, productCss:true, activeShop:true})

    })
  }