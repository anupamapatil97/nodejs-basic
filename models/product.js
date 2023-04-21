const fs = require('fs')
const path= require('path')
const p = path.join(path.dirname(process.mainModule.filename), "data", "products.json")
const Cart= require('./cart')

getProductsFromFile=(callback)=>{

    fs.readFile(p,(err,fileContent)=>{
        if(err){
            callback([])
        }
        else{
            callback(JSON.parse(fileContent))

        }
    })
}
const product=[]

module.exports = class Product{
    constructor(id, title, imageUrl, description, price)
    {
        this.title=title;
        this.imageUrl=imageUrl;
        this.description=description;
        this.price=price;
        this.id=id
    }
    save(){

       
        // product.push(this)
        // const p = path.join(path.dirname(process.mainModule.filename), "data", "products.json")
        getProductsFromFile(products=>{

            if(this.id){
                
                const existingProductIndex= products.findIndex(prod=>prod.id.toString()===this.id.toString())
                const updatedProduct= [...products];
                updatedProduct[existingProductIndex]=this;

                 fs.writeFile(p, JSON.stringify(updatedProduct), (err)=>{
                console.log(err)
            })
            }
            else{

            this.id=Math.random()
                products.push(this)
                fs.writeFile(p, JSON.stringify(products), (err)=>{
                    console.log(err)
                })
            }
           
        })

        // fs.readFile(p,(err,fileContent)=>{
        //     let products=[]
        //     console.log("file content", err)
        //     if(!err){
        //         products= JSON.parse(fileContent)
        //     }
        //     products.push(this)
        //     fs.writeFile(p, JSON.stringify(products), (err)=>{
        //         console.log(err)
        //     })
        // })
    }
    static fetchAll(callback){
        getProductsFromFile(callback)
    }
    static findById(id,cb){
        getProductsFromFile(products=>{
            const product= products.find(p=> p.id.toString()=== id.toString())
            cb(product)
        })
    }

    static deleteById(id){
        getProductsFromFile(products=>{
            const product= products.find(prod=> prod.id.toString() === id.toString())
            const updatedProduct= products.filter(p=> p.id.toString()!== id.toString())
            fs.writeFile(p, JSON.stringify(updatedProduct), (err)=>{
                console.log(err)
                if(!err){
                    Cart.deleteProduct(id, product.price)
                }
            })        
        })
    }
}