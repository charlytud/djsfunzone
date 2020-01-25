const adminCategory = require("../api/admin/category");
const category = require("../api/public/category");
const adminProduct = require("../api/admin/product");
const product = require("../api/public/product");
const adminSupplier = require("../api/admin/supplier");
const supplier = require("../api/public/supplier");

module.exports = app => {
    app.use("/admin/category", adminCategory);
    app.use("/admin/category/update", adminCategory);
    app.use("/api/categories", category);
    app.use("/api/", category);
    app.use("/admin/product", adminProduct);
    app.use("/api/products", product);
    app.use("/api/products/field", product);
    app.use("/api/", product);
    app.use("/admin/supplier", adminSupplier);
    app.use("/api/suppliers", supplier);
    app.use("/api/", supplier);
};