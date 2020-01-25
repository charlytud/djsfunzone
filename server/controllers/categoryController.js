
const { Category } = require("../models/category");
const asyncMiddleware = require("../middlewares/async");

module.exports = {
    createUpdateCategory: asyncMiddleware(async(req, res) => {
        const {
            name,
            description,
            picture
        } = req.body;
        
        const { _id } = req.body || undefined;

        let categoryFields = {}

        if(name) categoryFields.categoryName = name;
        if(description) categoryFields.description = description;
        if(picture) categoryFields.picture = picture;

        const category = await Category.findById( _id );

        if(category) {
            const updateCategory = Category.findByIdAndUpdate(
                { _id },
                { $set: categoryFields },
                { new: true }
            );

            return res.status(200).json(updateCategory);
        }

        const newCategory = await new Category(categoryFields).save();
        
        res.json(newCategory);
    }),
    getCategories: asyncMiddleware(async(req, res) => {
        const categories = await Category.find();
        if(!categories){
            return res.status(404).json({ error: "No Category Found"});
        }
        return res.status(200).json(categories);
    }),
    getCategoryById: asyncMiddleware(async(req, res)=>{
        const _id = req.query.id;
        const category = await Category.findById({ _id });
        if(!category) return res.status(400).json({ error: "No Category Found "});
        return res.status(200).send(category);
    }),
    deleteCategory: asyncMiddleware(async(req, res) => {
        const _id = req.query.id;
        const category = await Category.findByIdAndRemove({ _id });

        if(!category) return res.status(400).json({error: "Category Not Found"});
        
        return res.status(200).json({ success: true });      
    })
};