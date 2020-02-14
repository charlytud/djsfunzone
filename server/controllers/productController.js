
const { Product } = require("../models/product");
const asyncMiddleware = require("../middlewares/async");

module.exports = {
    createProduct: asyncMiddleware(async(req, res) => {
        const {
            name,
            description,
            rate,
            picture
        } = req.body;
    
        let productFields = {};

        if(name) productFields.productName = name;
        if(description) productFields.description = description;
        if(rate) productFields.rate = rate;
        if(picture) productFields.picture = picture;

        await new Product(productFields).save((err, product)=>{
            if(err) return res.send(err);

            return res.status(200).send(product);
        });
    }),
    updateProduct: asyncMiddleware(async(req, res) => {
        const {
            _id,
            name,
            description,
            rate,
            picture
        } = req.body;
    
        let productFields = {};

        if(name) productFields.productName = name;
        if(description) productFields.description = description;
        if(rate) productFields.rate = rate;
        if(picture) productFields.picture = picture;

        Product.findByIdAndUpdate(
            { _id },
            { $set: productFields },
            function(err, product){
                if (err) return res.send(err);
                
                return res.status(200).json({
                    success: "true"
                });
            }
        );
    }),
    getProducts: asyncMiddleware(async(req, res) => {
        const products = await Product.find();
        if(!products){
            return res.status(404).json({ error: "No Product Found"});
        }
        return res.status(200).json(products);
    }),
    getProductById: asyncMiddleware(async(req, res)=>{
        const _id = req.query.id;
        const product = await Product.findById({ _id });
        if(!product) return res.status(400).json({ error: "No Product Found" });
        return res.status(200).send(product);
    }),
    deleteProduct: asyncMiddleware(async(req, res) => {
        const _id = req.query.id;
        const product = await Product.findByIdAndRemove({ _id });

        if(!product) return res.status(400).json({error: "Product Not Found"});
        
        return res.status(200).json({ success: true });      
    })
};