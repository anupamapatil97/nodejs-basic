const fs= require('fs')
const path= require('path')

const p = path.join(path.dirname(process.mainModule.filename), "data", "cart.json")


module.exports= class Cart{
    constructor(){
        this.products =[];
        this.totalPrice=0
    }
    static addProducts=(id, productPrice)=>{
        fs.readFile(p,(err, fileContent)=>{
            let cart= {products:[], totalPrice:0}
            if(!err){
                cart=JSON.parse(fileContent)
            }

            let existingProductIndex = cart.products.findIndex(prod=>prod.id.toString()===id.toString())

            console.log(existingProductIndex)
            
            let existingProducts = cart.products[existingProductIndex]
            let updatedProduct;
            if(existingProducts){
                updatedProduct={...existingProducts}
                updatedProduct.qty=updatedProduct.qty+1;

                cart.products=[...cart.products]
                cart.products[existingProductIndex]=updatedProduct
            }else{
                updatedProduct={ id:id, qty:1}
                cart.products=[...cart.products, updatedProduct]
            }
            cart.totalPrice=cart.totalPrice + +productPrice
            fs.writeFile(p, JSON.stringify(cart), err=>{
                console.log(err)
            })
        })

    }

    static deleteProduct=(id, productPrice)=>{
        fs.readFile(p,(err, fileContent)=>{

            if(err){
                return;
            }
            const updatedCart= {...JSON.parse(fileContent)}

            const product=updatedCart.products.find(prod=>prod.id.toString()=== id.toString())
            if(!product){
                return;
            }
            const productQty= product.qty
            updatedCart.products= updatedCart.products.filter(prod=> prod.id.toString() !== id.toString())
            updatedCart.totalPrice=updatedCart.totalPrice - productPrice * productQty

            fs.writeFile(p, JSON.stringify(updatedCart), err=>{
                console.log(err)
            })
        })
    }

    static getCartProduct=(cb)=>{
        fs.readFile(p,(err, fileContent)=>{
            const cart= JSON.parse(fileContent)

            if(err){
                cb(null)
            }else{
            cb(cart)
            }
        })
    }
}
