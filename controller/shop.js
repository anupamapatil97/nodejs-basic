const Product = require("../models/product");
const Cart = require("../models/cart");


exports.getAllProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products"
    });
  });
};

exports.getProduct=(req,res)=>{
  const prodId= req.params.productId;
  console.log(prodId)
  Product.findById(prodId, products=>{
    res.render('shop/product-details',{product:products, pageTitle:'Product Details', path:"/products"})
  })
}

exports.getIndex = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/"
    });
  });
};

exports.getCart = (req, res) => {
  Cart.getCartProduct(cart=>{
    Product.fetchAll(products=>{
      const cartProduct=[]
      for(let product of products){
        const cartProductData= cart.products.find(prod=>prod.id.toString()=== product.id.toString())
        if(cartProductData){
          cartProduct.push({productData:product, qty:cartProductData.qty})
        }
      }
      res.render("shop/cart", {
        pageTitle: "Your Cart",
        path: "/cart",
        products: cartProduct
      });
    })

  })

};
exports.postCart = (req, res) => {
const prodId= req.body.productId;
Product.findById(prodId, (product)=>{
  Cart.addProducts(prodId, product.price)
})
console.log(prodId,"prodID")
res.redirect('/cart')

};

exports.getCheckout = (req, res) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout"
  });
};

exports.getOrders = (req, res) => {
  res.render("shop/orders", {
    pageTitle: "Your Orders",
    path: "/orders"
  });
};

exports.postCartDelete=(req,res)=>{
  const prodId=req.body.productId;
  Product.findById(prodId, product=>{
    Cart.deleteProduct(prodId, product.price)
    res.redirect('/cart')
  })
}