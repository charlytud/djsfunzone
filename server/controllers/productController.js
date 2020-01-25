const { Product } = require("../models/product");
const { Category } = require("../models/category");
const { Supplier } = require("../models/supplier");
const asyncMiddleware = require("../middlewares/async");

module.exports = {
    createUpdateProduct: asyncMiddleware( async (req, res) => {
        const errors = {};
        const { _id } = req.body || undefined;
        const {
        name,
        supplier,
        category,
        quantity,
        price,
        stock,
        order,
        reorder,
        discontinued
        } = req.body;

        let productFields = {};

        if(name) productFields.productName  = name;
        if(supplier) {
            const supplierFound = await Supplier.findById({ _id: supplier });
            if(!supplierFound) {
              errors.notFound = "Supplier not found";
              return res.status(404).json(errors);
            }

            productFields.supplierId  = supplier;
        }
        if(category){
            const categoryFound = await Category.findById({ _id: category });
            if(!categoryFound) {
               errors.notFound = "Category not found";
               return res.status(404).json(errors);
            }
            
            productFields.categoryId  = category;
        } 
        if(quantity) productFields.quantityPerUnit  = quantity;
        if(price) productFields.unitPrice  = price;
        if(stock) productFields.unitsInStock  = stock;
        if(order) productFields.unitsInOrder  = order;
        if(reorder) productFields.reorderLevel  = reorder;
        if(discontinued) productFields.discontinued  = discontinued; 

        // If product exist update else save new product
        const product = await Product.findById(_id);
        if(product){
            const updateProduct = await Product.findByIdAndUpdate(
                { _id },
                { $set: productFields },
                { new: true }
            );
            return res.status(200).json(updateProduct);
        }

        const  newProduct = await new Product(productFields).save();
        res.status(200).json(newProduct);
    }),
    getProducts: asyncMiddleware(async(req, res) => {
        const errors = {};
        const products = await Product.find()
        .populate({
            path: 'categoryId', 
            model: 'Category', 
            select: 'categoryName'})
        .populate({
            path: 'supplierId', 
            model: 'Supplier', 
            select: 'companyName'}).
        exec();
        if(!products){
            errors.notFound = "No product found";
            return res.status(404).json(errors);
        }

        return res.status(200).json(products);
    }),
    getProductById: asyncMiddleware( async(req, res)=>{
        const errors = {};
        const _id = req.query.id;
        const product = await Product.findById(_id)
        if(!product) {
            errors.notFound = "Product not found";
            return res.status(404).json(errors);
        }
        return res.status(200).json(product);
    }),
    getProductByFields: asyncMiddleware(async(req, res)=>{
        const errors = {};
        const {
            category,
            supplier
        } = req.query

        let filterFields = { category: null, supplier: null };

        if(category) filterFields.category = category;
        if(supplier) filterFields.supplier = supplier;

        if(filterFields.category && filterFields.supplier) {
            const product = await Product.find(
                { 
                    categoryId: filterFields.category, 
                    supplierId: filterFields.supplier 
                }
            )
            .populate({
            path: 'categoryId', 
            model: 'Category', 
            select: 'categoryName'})
            .populate({
            path: 'supplierId', 
            model: 'Supplier', 
            select: 'companyName'})
            .exec();

            if(!product){
                errors.notFound = "No product found";
                return res.status(404).json(errors);
            }
            return res.status(200).json(product)
        } else if(filterFields.category && filterFields.supplier === null) {
            const product = await Product.find(
                { categoryId: filterFields.category }
            ).populate({
            path: 'categoryId', 
            model: 'Category', 
            select: 'categoryName'})
            .populate({
            path: 'supplierId', 
            model: 'Supplier', 
            select: 'companyName'}).
            exec();

            if(!product) {
                errors.notFound = "No product found in selected category"
                return res.status(404).json(errors);
            }
            return res.status(200).json(product)
        } else if ( filterFields.category === null && filterFields.supplier ) {
            const product = await Product.find(
                { supplierId: filterFields.supplier }
            ).populate({
            path: 'categoryId', 
            model: 'Category', 
            select: 'categoryName'})
            .populate({
            path: 'supplierId', 
            model: 'Supplier', 
            select: 'companyName'}).
            exec();

            if(!product) {
                errors.notFound = "No product found with selected supplier"
                return res.status(404).json(errors);
            }
            return res.status(200).json(product)
        };
    }),
    deleteProduct: asyncMiddleware(async(req, res) => {
        const errors = {};
        const _id = req.query.id;
        const product = await Product.findByIdAndRemove(_id);
        if(!product){
            errors.notFound = "Product not found";
            return res.status(404).json(errors);
        }

        return res.status(200).json({ success: true });
    })
};