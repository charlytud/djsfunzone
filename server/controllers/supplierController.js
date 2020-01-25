const { Supplier } = require("../models/supplier");
const asyncMiddleware = require("../middlewares/async");

module.exports = {  
    createUpdateSupplier: asyncMiddleware(async(req, res) => {
        const { _id } = req.body || undefined;
        const {
            name,
            contact,
            title,
            address,
            city,
            region,
            postalCode,
            country,
            phone,
            fax,
            homePage
        } = req.body;

        let supplierFields = {};

        if(name) supplierFields.companyName = name; 
        if(contact) supplierFields.contactName = contact; 
        if(title) supplierFields.contactTitle = title; 
        if(address) supplierFields.address = address; 
        if(city) supplierFields.city = city; 
        if(region) supplierFields.region = region; 
        if(postalCode) supplierFields.postalCode = postalCode; 
        if(country) supplierFields.country = country; 
        if(phone) supplierFields.phone = phone; 
        if(fax) supplierFields.fax = fax; 
        if(homePage) supplierFields.homePage = homePage; 

        const supplier = await Supplier.findById(_id);
        if(supplier){
            const updateSupplier = await Supplier.findByIdAndUpdate(
                { _id },
                { $set: supplierFields },
                { new: true }
            );
            return res.status(200).json(updateSupplier);
        }

        const newSupplier = await new Supplier(supplierFields).save();
        return res.status(200).json(newSupplier);
    }),
    getSuppliers: asyncMiddleware(async(req, res) => {
        const suppliers = await Supplier.find();

        if(!suppliers) return res.status(404).json({ errors: "No Supplier Found"});
        res.status(200).json(suppliers);
    }),
    getSupplierById: asyncMiddleware(async(req, res) => {
        const _id = req.query.id;
        const supplier = await Supplier.findById(_id);

        if(!supplier) res.status(404).json({error: "Supplier Not Found"});
        res.status(200).json(supplier);
    }),
    deleteSupplier: asyncMiddleware(async(req, res) => {
        const _id = req.query.id;
        const supplier = await Supplier.findByIdAndRemove(_id);

        if(!supplier) return res.status(404).json({ error: "Supplier Not Found"});
        res.status(200).json({ success: true });
    })
};