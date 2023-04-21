const Product = require("../models/product");


exports.getAddProducts = (req, res, next) => {

  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-products",
    editing: false
  });
};

exports.addProducts = (req, res) => {
 
     const  title = req.body.title;
     const  imageUrl=req.body.imageUrl;
     const  description=req.body.description;
     const price= req.body.price;
    
    const product = new Product(null, title, imageUrl, description, price)
    product.save()
  res.redirect("/");
};

exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "admin/products"
      });
    });
  };

  
exports.getEditProducts = (req, res, next) => {
  const editMode= req.query.edit;
  if(!editMode){
    return res.redirect("/")
  }
  const productId= req.params.productId;

  Product.findById(productId, product=>{
    if(!product){
      return res.redirect('/')
    }
    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "/admin/edit-products",
      editing: editMode,
      product: product
    });
  })

};

exports.postEditProduct=(req,res)=>{
  const prodId= req.body.productId;
  const updatedTitle=req.body.title;
  const updatedPrice=req.body.price;
  const updatedImgUrl=req.body.imageUrl;
  const updatedDescription=req.body.description

  const updatedProduct= new Product(prodId, updatedTitle, updatedImgUrl,  updatedDescription, updatedPrice)
  updatedProduct.save()

  res.redirect("/admin/products")

}

exports.postDeleteProduct=(req,res)=>{
  const prodId= req.body.productId
  Product.deleteById(prodId);
  res.redirect('/admin/products')
}